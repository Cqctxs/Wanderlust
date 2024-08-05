"use client";

import React, { useRef } from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl';

const INITIAL_VIEW_STATE = {
    latitude: 43.642567,
    longitude: -79.387054,
    zoom: 15,
    bearing: 0,
    pitch: 0
};

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function MapPage() {
    const mapRef = useRef(null);

    const handleMapLoad = () => {
        const map = mapRef.current.getMap();
        map.setConfigProperty("basemap", "lightPreset", "dusk");
    };

    return (
        <div onContextMenu={(e) => {
            e.preventDefault();
        }}>
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
            >
                <Map
                    ref={mapRef}
                    mapStyle="mapbox://styles/mapbox/standard-beta"
                    mapboxAccessToken={TOKEN}
                    maxPitch={85}
                    onLoad={handleMapLoad}
                />
            </DeckGL>
        </div>
    );
}