"use client";

import { Map } from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const INITIAL_VIEW_STATE = {
    latitude: 43.642567,
    longitude: -79.387054,
    zoom: 11,
    bearing: 0,
    pitch: 0
};

export default function MapPage() {
    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
        >
            <Map mapStyle="mapbox://styles/mapbox/standard-beta" mapboxAccessToken={TOKEN} />
        </DeckGL>
    );
}