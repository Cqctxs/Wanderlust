"use client"

import Image from "next/image";
import { Frame } from "@/components/ui/navbar/frame";
import { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { CityParallax } from '../components/ui/city_parallax';
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
                <div className="flex rounded-xl drop-shadow-xl items-center justify-evenly mt-8 ml-32 mr-32 bg-[#353130]" data-aos="fade-right">
                    <p className="text-4xl font-sans text-wh w-2/5 pr-4 text-left ml-20  leading-tight">
                        Powered by <a className="text-blu gradient-text" href="https://gemini.google.com/">Gemini AI</a>, 
                        Wanderlust uses a large database of popular tourism destinations to tailor your travel itinerary. <br /><br />
                        <div className="flex  rounded-lg bg-blu justify-center py-6 mr-24">
                          <a href="/plan">
                            <h1 className="font-sans text-wh font-extrabold text-5xl">Get started     </h1>
                          </a>
                        </div>
                    </p>
                    <img className="w-[55%] rounded-r-xl ml-10 h-max" src="/assets/tripexample.png" alt="Trip Example"></img>
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
