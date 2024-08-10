"use client";

import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../../styles/global.css';

export const CityParallax = ({ sky_0, sky_1, sky_2, city_0, city_1, city_2, city_3, everything_after }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // initializes animate on scroll
    AOS.init({
        duration: 2400, 
        delay: 1,
        once: false,
        easing: 'ease',
    });

    console.log('aos initialized');
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <>
    <div>
    <style>
        {`
        #textblock {
            background-color: #2a2320;
            height: 100vh;
        }

        #textblock-container {
            width: 50%;
            margin: 0 auto;
            padding-top: 70px;
        }

        #textblock-title {
            color: #ffaf1b;
            font-size: 35px;
            font-weight: 600;
            font-family: "Helvetica Neue";
        }

        #textblock-content {
            color: #ffaf1b;
            font-size: 20px;
        }

        #textblock-footer {
            color: #ffaf1b;
            font-size: 15px;
            font-weight: 400;
            position: fixed;
            width: 100%;
            bottom: 0px;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-bottom: 20px;
        }

        #textblock-devsense {
            text-decoration: none;
            color: #ffaf1b;
            font-size: 15px;
            font-weight: 600;
        }

        .animation {
            height: 100vh;
        }

        .animation {
            display: block;
            position: relative;
            z-index: 10;
        }

        .animation_layer {
            background-position: top center;
            background-size: contain;
            background-repeat: repeat-x;
            width: 100%;
            height: 100%;
            position: absolute;
        }

        .animation_layer.parallax {
            position: fixed;
        }

        .gradient-text:hover {
            background: linear-gradient(to right, #357cfe, #e74c5c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .gradient-title {
            background: linear-gradient(to right, #ffaf1b, #cc6f0b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        #artback {
            background-image: url("/assets/citybg_sunset_2.png");
        }

        #mountain {
            background-image: url("/assets/citybg_sunset_1.png");
        }

        #logoland {
            background-image: url("/assets/citybg_sunset_0.png");
        }

        #jungle1 {
            background-image: url("/assets/citybg_orange_3.png");
        }

        #jungle2 {
            background-image: url("/assets/citybg_orange_2.png");
        }

        #jungle3 {
            background-image: url("/assets/citybg_orange_1.png");
        }

        #jungle4 {
            background-image: url("/assets/citybg_orange_0.png");
        }
        `}
    </style>
    <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={0}>
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_sunset_2.png)", backgroundSize: "cover" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_sunset_1.png)", backgroundSize: "cover", background: "center center" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_sunset_0.png)", backgroundSize: "cover", background: "center center" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_orange_3.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_orange_2.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.05}>
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_orange_1.png)" }}></div>
        </ParallaxLayer>
        {/* logo */}
        <ParallaxLayer offset={0} speed={-1}>
        <div className="w-full absolute h-auto parallax mt-40 flex justify-center">
            <h1 className="m-0 p-2 rounded-lg text-center text-shadow-xl font-offbit text-9xl text-or
                        backdrop-brightness-125 backdrop-blur-xl">wanderlust</h1>
        </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/darkest.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
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
                <a href="/generate">
                    <h1 className="font-sans text-home font-bold text-4xl highlight highlight-variant-7 highlight-home-dark">Get Started</h1>
                </a>
            </div>
        </div>
        </ParallaxLayer>
    </Parallax>
    </div>
    </>
  );
};

export default CityParallax;