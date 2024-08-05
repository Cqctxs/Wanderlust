"use client";

import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import CityParallax from "../../components/ui/city_parallax"

export default function Home() {
  return (
    <div>
      {/* Parallax background */}
      <div className="flex-col items-center align-center bg-bla justify-center m-40 z-50">
        <p>parallax goes here</p>
        <CityParallax 
            sky_0={"/assets/citybg_day_0.jpg"} 
            sky_1={"/assets/citybg_day_1.jpg"} 
            sky_2={"/assets/citybg_day_2.jpg"}
            city_0={"/assets/citybg_blue_0.jpg"} 
            city_1={"/assets/citybg_blue_1.jpg"} 
            city_2={"/assets/citybg_blue_2.jpg"} 
            city_3={"/assets/citybg_blue_3.jpg"} 
          />
      </div>
    </div>
  );
}
