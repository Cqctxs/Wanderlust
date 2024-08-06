"use client";

import React, { useRef } from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import { ArcLayer, ScatterplotLayer } from '@deck.gl/layers';
import data from './test.json';

const INITIAL_VIEW_STATE = {
    latitude: 43.642567,
    longitude: -79.387054,
    zoom: 7,
    bearing: 0,
    pitch: 45
};

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapPage() {
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

    const layers = [arcLayer, scatterplotLayer];

    return (
        <div onContextMenu={(e) => {
            e.preventDefault();
        }}>
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={layers}
            >
                <Map
                    ref={mapRef}
                    mapStyle="mapbox://styles/wanderlust-ai/clzhqt1ma005x01paht0n1n89?optimize=true"
                    mapboxAccessToken={TOKEN}
                    maxPitch={85}
                />
            </DeckGL>
        </div>
    );
}