"use client";

import React, { useEffect } from 'react';
import { Map, useControl } from 'react-map-gl';
import { MapboxOverlay } from '@deck.gl/mapbox';
import { ScatterplotLayer } from '@deck.gl/layers';
import 'mapbox-gl/dist/mapbox-gl.css';

function DeckGLOverlay(props) {
  const overlay = useControl(() => new MapboxOverlay(props));

  useEffect(() => {
    overlay.setProps(props);
  }, [props, overlay]);

  return null;
}

export default function Test() {
  const layers = [
    new ScatterplotLayer({
      id: 'deckgl-circle',
      data: [
        { position: [0.45, 51.47] }
      ],
      getPosition: d => d.position,
      getFillColor: [255, 0, 0, 100],
      getRadius: 1000,
      beforeId: 'waterway-label' // In interleaved mode render the layer under map labels
    })
  ];

  return (
    <div className='w-full h-screen'>
      <Map
        initialViewState={{
          longitude: 0.45,
          latitude: 51.47,
          zoom: 11
        }}
        mapStyle="mapbox://styles/mapbox/light-v9"
      >
        <DeckGLOverlay layers={layers} interleaved />
      </Map>
    </div>
  );
}