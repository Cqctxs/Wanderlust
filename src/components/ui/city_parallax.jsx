"use client";

import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../app/globals.css';

export const CityParallax = ({ hasLogo=true, searchValue, everything_after }) => {
  const [isClient, setIsClient] = useState(false);

  

  useEffect(() => {
    setIsClient(true);
    // initializes animate on scroll
    AOS.init({
        duration: 2000, 
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
        ::-webkit-scrollbar {
        display: none;
        }

        body {
        -ms-overflow-style: none;
        scrollbar-width: none;
        }

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
            z-index: 5;
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
            margin: 4px;
            letter-spacing: 1px;
        }
        
        .gradient-text {
            background: linear-gradient(to right, #357cfe, #e74c5c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition:all 0.2s ease;
            margin: 0px;
}
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
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_sunset_2.png)"}}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_sunset_1.png)", backgroundSize: "60%", backgroundPosition: "53% 42%"}}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_sunset_0.png)", backgroundSize: "cover", backgroundPosition: "45% 40%"}}></div>
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
        {
            hasLogo ? 
                <ParallaxLayer offset={0} speed={-3}>
                    <div className="w-full absolute h-auto parallax mt-[15vh] flex justify-center">
                        <h1 className="m-0 p-2 rounded-lg text-center text-shadow-xl font-offbit font-bold text-[1700%] text-wh
                                    tracking-tight" data-aos="fade-up">wanderlust</h1>
                    </div>
                </ParallaxLayer>
                : <></>
        }
        <ParallaxLayer offset={0} speed={0}>
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_orange_0.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
        {searchValue}
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
            {everything_after}
        </ParallaxLayer>
    </Parallax>
    </div>
    </>
  );
};

export default CityParallax;