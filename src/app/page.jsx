"use client";

import Image from "next/image";
import { Frame } from "@/components/ui/navbar/frame";
import { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { CityParallax } from "@/components/ui/city_parallax"; 
import AOS from 'aos';
import Footer from '../components/ui/navbar/footer';
import 'aos/dist/aos.css';
import './globals.css';

export default function Home() {

  AOS.init({
    duration: 2000, 
    delay: 1000, 
    once: false,
    easing: 'ease',
  });

  return (
    <div className="h-screen bg-[#252322]">
      <Frame />
      <CityParallax
        pages={2.1}
        hasLogo={true}
        searchValue={<></>}
        everything_after={
          <div className="h-full mb-[0] bg-[#252322]" id="top">
            <div className="pt-20 w-full bg-[#252322]">
              <div
                className="flex rounded-2xl drop-shadow-xl items-center justify-evenly mt-8 ml-32 mr-32 bg-[#353130]"
                data-aos="fade-right"
              >
                <p className="text-4xl font-sans text-wh w-2/5 pr-4 text-left ml-20 leading-tight">
                  Powered by{" "}
                  <a
                    className="text-blu gradient-text"
                    href="https://gemini.google.com/"
                  >
                    Gemini AI
                  </a>
                  , Wanderlust uses a large database of popular tourism
                  destinations to tailor your travel itinerary. <br />
                  <br />
                  <a
                    href="/plan"
                    className="flex rounded-full bg-blu justify-center py-6 mr-24 transition duration-100 ease-in-out hover:bg-[#ff6128] transform hover:scale-105"
                  >
                    <h1 className="font-sans text-wh font-extrabold text-5xl">
                      Get started
                    </h1>
                  </a>
                </p>
                <a href="/map" className="m-0 p-0 w-[55%] ml-10 h-max">
                  <img
                    className="rounded-r-2xl duration-100 transform hover:scale-105"
                    src="/assets/tripexample.png"
                    alt="Trip Example"
                  />
                </a>
              </div>
            </div>
          </div>
        }
      ></CityParallax>
      <div className="bg-[#252322]"></div>
    </div>
  );
}
