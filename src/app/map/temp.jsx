"use client";

import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
// import the mapbox styles
// alternatively can use a link tag in the head of public/index.html
// see https://docs.mapbox.com/mapbox-gl-js/api/
import "mapbox-gl/dist/mapbox-gl.css";

// Grab the access token from your Mapbox account
// I typically like to store sensitive things like this
// in a .env file
mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

export default function Map() {
  const mapContainer = useRef();

  // this is where all of our map logic is going to live
  // adding the empty dependency array ensures that the map
  // is only rendered once
  useEffect(() => {
    // create the map and configure it
    // check out the API reference for more options
    // https://docs.mapbox.com/mapbox-gl-js/api/map/
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/standard-beta",
      center: [-87.901982, 43.039403],
      pitch: 70, // allows us to view the map in 3D
      bearing: 40,
      zoom: 15.5
    });

    // Set the light preset to dusk
    map.on("style.load", () => {
      map.setConfigProperty("basemap", "lightPreset", "dusk");
    });

    // cleanup function to remove map on unmount
    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};
