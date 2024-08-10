"use client"

import Image from "next/image";
import { Frame } from "@/components/ui/navbar/frame";
import { useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { CityParallax } from '../components/ui/city_parallax'

import AOS from 'aos';
import 'aos/dist/aos.css';
import './globals.css';

export default function Home() {
  return (
    <div className=" h-screen">
      <Frame/>
      <CityParallax 
        sky_0={"/assets/citybg_sunset_0.png"} sky_1={"/assets/citybg_sunset_1.png"} sky_2={"/assets/citybg_sunset_2.png"}
        city_0={"/assets/citybg_orange_0.png"} city_1={"/assets/citybg_orange_1.png"} city_2={"/assets/citybg_orange_2.png"} city_3={"/assets/citybg_orange_3.png"} 
        everything_after={
          <div className="h-full bg-[#252221]">
            <div className="pt-20 w-full">
                <h1 className="gradient-title font-sans font-bold text-6xl w-full text-center text-shadow-xl" data-aos="fade-down">Wanderlust</h1>
                <div className="flex items-center justify-evenly mt-8">
                    <p className="text-4xl font-sans text-home w-[40%] text-center" data-aos="fade-right">
                        Powered by <a className="font-bold text-home-dark gradient-text" href="https://gemini.google.com/">Google's Gemini AI</a>, 
                        Wanderlust uses a <b className="highlight highlight-variant-4 highlight-[#1b2e57]">large database</b> of popular <b className="highlight highlight-variant-4 highlight-[#405a53]">tourism destinations</b> to tailor your travel itinerary.
                    </p>
                    <img className="drop-shadow-xl rounded-2xl w-[40%] h-auto" src="/assets/blank_map.png" data-aos="fade-left"></img>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <a href="/plan">
                    <h1 className="font-sans text-home font-bold text-4xl highlight highlight-variant-7 highlight-home-dark">Get Started</h1>
                </a>
            </div>
        </div>
        }
      ></CityParallax>
      <div>
      </div>
    </div>
  );
}
