"use client";

import React, { useRef } from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import { ArcLayer, ScatterplotLayer, IconLayer } from '@deck.gl/layers';
import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';

// Mapbox token for accessing map styles
const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

// Tooltip configuration for the layers
function getTooltip({ object }) {
    return object && {
        html: `<h1><b>${object.message.title}</b></h1> <div>${object.message.m1} <br> ${object.message.m2}</div>`,
        style: {
            "inline-size": "450px",
            "overflow-wrap": "break-word"
        }
    };
}  

export const MapSmall = ({data}) => {
    const mapRef = useRef(null);

    const INITIAL_VIEW_STATE = {
        latitude: data?.itinerary[0].cityCoordinates.lat,
        longitude: data?.itinerary[0].cityCoordinates.lng,
        zoom: 7,
        bearing: 0,
        pitch: 15
    };

    // Process city data for visualization
    const cityData = [];
    data?.itinerary.forEach((day) => {
        const lnglat = [day.cityCoordinates.lng, day.cityCoordinates.lat];

        const message = {title: "Name: No name found", m1: "Overview: No overview found", m2: ""};
        if (day["city"]) message["title"] = day.city;
        if (day["overview"]) message["m1"] = "Overview: " + day.overview;
        const cityInfo = {position: lnglat, message: message};
        cityData.push(cityInfo);
    });

    // Process hotel data for visualization
    const hotelData = [];
    data?.itinerary.forEach((day) => {
        if (day["hotel"] && day.hotel["geometry"] && day.hotel.geometry["location"] && day.hotel.geometry.location["lng"] && day.hotel.geometry.location["lat"]) {
            const lnglat = [day.hotel.geometry.location.lng, day.hotel.geometry.location.lat];

            const message = {title: "Name: No name found", m1: "Address: No address found", m2: "Rating: No rating found"};
            if (day.hotel["name"]) message["title"] = day.hotel.name;
            if (day.hotel["plus_code"] && day.hotel.plus_code["compound_code"]) message["m1"] = "Address: " + day.hotel.plus_code.compound_code;
            if (day.hotel["rating"]) message["m2"] = "Rating: " + day.hotel.rating;
            const hotelInfo = {position: lnglat, message: message};
            hotelData.push(hotelInfo);
        }
    });

    // Create arc layer for routes between cities
    const arcData = [];
    for (let i = 0; i < cityData.length - 1; i++) {
        arcData.push({
            sourcePosition: cityData[i].position,
            targetPosition: cityData[i + 1].position
        });
    }

    const arcLayer = new ArcLayer({
        id: 'arc-layer',
        data: arcData,
        getSourcePosition: d => d.sourcePosition,
        getTargetPosition: d => d.targetPosition,
        getSourceColor: [255, 140, 0],
        getTargetColor: [2255, 37, 70],
        getWidth: 5
    });

    // Scatterplot layer for city points
    const scatterplotLayer = new ScatterplotLayer({
        id: 'scatterplot-layer',
        data: cityData,
        getPosition: d => d.position,
        getFillColor: [255, 97, 40],
        getRadius: 100,
        radiusMinPixels: 10,
        pickable: true,
        onHover: info => console.log(info) // Example hover behavior
    });

    // Icon layer for hotel markers
    const iconLayer = new IconLayer({
        id: 'icon-layer',
        data: hotelData,
        getColor: d => [140, 140, 0],
        getIcon: d => 'marker',
        getPosition: d => d.position,
        getSize: 40,
        iconAtlas: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        iconMapping: {
            "marker": {
                "x": 0,
                "y": 0,
                "width": 71,
                "height": 71,
                "anchorY": 71,
                "mask": true
            }
        },
        pickable: true
    });

    const layers = [arcLayer, scatterplotLayer, iconLayer];

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={layers}
            getTooltip={getTooltip}
            style={{ width: '100%', height: '100%' }}
        >
            <Map
                id="map"
                ref={mapRef}
                mapStyle="mapbox://styles/wanderlust-ai/clzhqt1ma005x01paht0n1n89"
                mapboxAccessToken={TOKEN}
                maxPitch={85}
                reuseMaps={true}
                style={{ width: '100%', height: '100%' }}
            />
        </DeckGL>
    );
}