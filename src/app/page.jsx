"use client"

import Image from "next/image";
import { Frame } from "@/components/ui/navbar/frame";
import { useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { CityParallax } from '../components/ui/city_parallax'

export default function Home() {
  return (
    <div>
      <Frame/>
      <CityParallax 
        sky_0={"/assets/citybg_day_0.png"} sky_1={"/assets/citybg_day_1.png"} sky_2={"/assets/citybg_day_2.png"}
        city_0={"/assets/citybg_blue_0.png"} city_1={"/assets/citybg_blue_1.png"} city_2={"/assets/citybg_blue_2.png"} city_3={"/assets/citybg_blue_3.png"} 
      ></CityParallax>
    </div>
  );
}
