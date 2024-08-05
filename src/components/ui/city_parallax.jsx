"use client";

import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const CityParallax = ({sky_0, sky_1, sky_2, city_0, city_1, city_2, city_3}) => {
  return (
    <>
        <Parallax pages={7} style={{ top:'0', left: '0'}} className="animation">
            <ParallaxLayer speed={0.5}>
                <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${sky_0})` }}></div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.6}>
                <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${sky_1})` }}></div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.7}>
                <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${sky_2})` }}></div>
            </ParallaxLayer>
            {/* City */}
            <ParallaxLayer speed={0.8}>
                <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${city_0})` }}></div>
            </ParallaxLayer>

            <ParallaxLayer speed={0.9}>
                <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${city_1})` }}></div>
            </ParallaxLayer>

            <ParallaxLayer speed={1.0}>
                <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${city_2})` }}></div>
            </ParallaxLayer>

            <ParallaxLayer speed={1.1}>
                <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${city_3})` }}></div>
            </ParallaxLayer>
        </Parallax>
    </>
  )
};

export default CityParallax;