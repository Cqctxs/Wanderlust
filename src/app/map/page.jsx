"use client";

import React, { useRef } from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';
import { ArcLayer, ScatterplotLayer } from '@deck.gl/layers';

const INITIAL_VIEW_STATE = {
    latitude: 43.642567,
    longitude: -79.387054,
    zoom: 16,
    bearing: 0,
    pitch: 45
};

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapPage() {
    const mapRef = useRef(null);

    const handleMapLoad = () => {
        const map = mapRef.current.getMap();
        map.setConfigProperty("basemap", "lightPreset", "dusk");
    }

    const arcData = [
        {
            sourcePosition: [-79.387054, 43.642567],
            targetPosition: [-79, 43]
        },
        {
            sourcePosition: [-78.387054, 42.642567],
            targetPosition: [-78, 42]
        },
        {
            sourcePosition: [-77.387054, 41.642567],
            targetPosition: [-77, 41]
        },
    ];

    const arcLayer = new ArcLayer({
        id: 'arc-layer',
        data: arcData,
        getSourcePosition: d => d.sourcePosition,
        getTargetPosition: d => d.targetPosition,
        getSourceColor: [255, 97, 40],
        getTargetColor: [255, 97, 40],
        widthMinPixels: 16, // Minimum radius in pixels
        widthMaxPixels: 16,  // Maximum radius in pixels
        greatCircle: true
        
    });
    const circleLayer = new ScatterplotLayer({
        id: 'scatter-plot',
        data: [
            { position: [-79.387054, 43.642567]},
            { position: [-78.387054, 42.642567]},
            { position: [-77.387054, 41.642567]},
        ],
        getPosition: d => d.position,
        getFillColor: [255, 97, 40],
        radiusMinPixels: 8, // Minimum radius in pixels
        radiusMaxPixels: 8  // Maximum radius in pixels
    });
    
    const layers = [circleLayer, arcLayer];
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
                    mapStyle="mapbox://styles/mapbox/standard-beta"
                    mapboxAccessToken={TOKEN}
                    onLoad={handleMapLoad}
                />
            </DeckGL>
        </div>
    );
}