"use client";

import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const CityParallax = ({sky_0, sky_1, sky_2, city_0, city_1, city_2, city_3, everything_after}) => {
  return (
    <>
        <Parallax pages={8} style={{ top:'0', left: '0'}} className="animation">
            <ParallaxLayer speed={1}>
                <div className="absolute h-full  w-full bg-cover bg-center" style={{ backgroundImage: `url(${sky_2})` }}></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={1.4}>
                <div className="absolute h-full  w-full bg-cover bg-center" style={{ backgroundImage: `url(${sky_1})` }}></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={1.8}>
                <div className="absolute h-full  w-full bg-cover bg-center" style={{ backgroundImage: `url(${sky_0})` }}></div>
            </ParallaxLayer>
            {/* City */}
            <ParallaxLayer offset={0} speed={2.2}>
                <div className="absolute h-full  w-full bg-cover bg-center" style={{ backgroundImage: `url(${city_3})` }}></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={2.6}>
                <div className="absolute h-full  w-full bg-cover bg-center" style={{ backgroundImage: `url(${city_2})` }}></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={3.0}>
                <div className="absolute h-full  w-full bg-cover bg-center" style={{ backgroundImage: `url(${city_1})` }}></div>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={3.4}>
                <div className="absolute h-full  w-full bg-cover bg-center" style={{ backgroundImage: `url(${city_0})` }}></div>
            </ParallaxLayer>

            {/* Everything After */}
            <ParallaxLayer offset={0} speed={-1}>
                {everything_after}
            </ParallaxLayer>
        </Parallax>
    </>
  )
};

export default CityParallax;