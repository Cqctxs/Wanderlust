"use client";

import React, { useRef } from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import { ArcLayer, ScatterplotLayer, IconLayer } from '@deck.gl/layers';
import data from '../../app/map/test.json';
import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';

const INITIAL_VIEW_STATE = {
    latitude: 0,
    longitude: 0,
    zoom: 3,
    bearing: 0,
    pitch: 15
};

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

function getTooltip({object}) {
    return object && {
        html: `<h1><b>${object.message.title}</b></h1> <div>${object.message.address} <br> ${object.message.rating}</div>`,
    };
}  

export const MapWrapper = () => {
    const mapRef = useRef(null);

    const cityData = [];
    data.itinerary.forEach((day) => {
        const lnglat = [day.cityCoordinates.lng, day.cityCoordinates.lat];

        const message = {title: "Name: No name found", address: "Address: No address found"};
        if (day.hotel["name"]) message["title"] = day.hotel.name;
        if (day.hotel["plus_code"] && day.hotel.plus_code["compound_code"]) message["address"] = "Address: " + day.hotel.plus_code.compound_code;
        if (day.hotel["rating"]) message["info"] = "Rating: " + day.hotel.rating;
        const cityInfo = {position: lnglat, message: message};
        cityData.push(cityInfo);
    });

    const hotelData = [];
    data.itinerary.forEach((day) => {
        if (day["hotel"] && day.hotel["geometry"] && day.hotel.geometry["location"] && day.hotel.geometry.location["lng"] && day.hotel.geometry.location["lat"]) {
            const lnglat = [day.hotel.geometry.location.lng, day.hotel.geometry.location.lat];

            const message = {title: "Name: No name found", address: "Address: No address found", rating: "Rating: No rating found"};
            if (day.hotel["name"]) message["title"] = day.hotel.name;
            if (day.hotel["plus_code"] && day.hotel.plus_code["compound_code"]) message["address"] = "Address: " + day.hotel.plus_code.compound_code;
            if (day.hotel["rating"]) message["info"] = "Rating: " + day.hotel.rating;
            const hotelInfo = {position: lnglat, message: message};
            hotelData.push(hotelInfo);
        }
    });
    console.log(hotelData);

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

    const scatterplotLayer = new ScatterplotLayer({
        id: 'scatterplot-layer',
        data: cityData,
        getPosition: d => d.position,
        getFillColor: [255, 97, 40],
        getRadius: 100,
        radiusMinPixels: 10, // Minimum radius in pixels
        pickable: true,
        onHover: console.log("hi chat")
    });

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
        <div className="relative w-full h-screen">
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={layers}
                getTooltip={getTooltip}
            >
                <Map
                    ref={mapRef}
                    mapStyle="mapbox://styles/wanderlust-ai/clzhqt1ma005x01paht0n1n89"
                    mapboxAccessToken={TOKEN}
                    maxPitch={85}
                    reuseMaps={true}
                />
            </DeckGL>
        </div>
    );
}