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
    pitch: 0
};

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export const MapWrapper = () => {
    const mapRef = useRef(null);

    const cityData = [];
    data.itinerary.forEach((day) => {
        const lnglat = [day.cityCoordinates.lng, day.cityCoordinates.lat];
        cityData.push(lnglat);
    });
    console.log(cityData);

    const arcData = [];
    for (let i = 0; i < cityData.length - 1; i++) {
        arcData.push({
            sourcePosition: cityData[i],
            targetPosition: cityData[i + 1]
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
        getPosition: d => d,
        getFillColor: [255, 97, 40],
        getRadius: 100,
        radiusMinPixels: 10, // Minimum radius in pixels
    });

    // const iconLayer = new IconLayer({
    //     id: 'icon-layer',
    //     data: cityData,
    //     getIcon: d => 'marker',
    //     getPosition: d => d,
    //     getSize: 5,
    //     iconAtlas: '/hotel.svg', // Path to the local icon atlas file
    //     iconMapping: {
    //         marker: { x: 0, y: 0, width: 128, height: 128, mask: true }
    //     },
    //     sizeScale: 15
    // });

    const layers = [arcLayer, scatterplotLayer];

    return (
        <div className="relative w-full h-screen">
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={layers}
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