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
    <div className="h-screen">
      <Frame/>
      <CityParallax 
        hasLogo={true}
        searchValue={<></>}
        everything_after={
          <div className="h-full bg-[#252221]">
    <div className="pt-20 w-full">
        <div className="flex rounded-lg items-center justify-evenly mt-8 m-14 bg-[#353130] py-16 px-16" data-aos="fade-right">
            <p className="text-4xl font-sans text-wh w-2/5 px-2 text-right leading-snug">
                Powered by <a className="text-blu gradient-text" href="https://gemini.google.com/">Gemini AI</a>, 
                Wanderlust uses a large database of popular tourism destinations to tailor your travel itinerary. <br /><br />
                <div className="flex rounded-xl bg-blu justify-center py-8">
                  <a href="/plan">
                    <h1 className="font-sans text-wh font-extrabold text-7xl">Get Started     </h1>
                  </a>
                </div>
            </p>
            <img className="drop-shadow-xl rounded-[2%] w-3/5 ml-10 h-auto" src="/assets/tripexample.png" alt="Trip Example"></img>
        </div>
    </div>
  </div>

        }
      ></CityParallax>
      <div>
      </div>
    </div>
  );
}
