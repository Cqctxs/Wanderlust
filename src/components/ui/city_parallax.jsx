"use client";

import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../app/globals.css';

export const CityParallax = ({ sky_0, sky_1, sky_2, city_0, city_1, city_2, city_3, hasLogo=true, hasSearch=false, everything_after }) => {
  const [isClient, setIsClient] = useState(false);

  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }

  useEffect(() => {
    setIsClient(true);
    // initializes animate on scroll
    AOS.init({
        duration: 2400, 
        delay: 1,
        once: true,
        easing: 'ease',
    });

    console.log('aos initialized');
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <>
    <div class = "overflow-y-scroll no-scrollbar">
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

        .gradient-text {
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
        <ParallaxLayer offset={0} speed={0.05}>
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
        </ParallaxLayer>
        {
            hasLogo ? 
                <ParallaxLayer offset={0} speed={-3}>
                    <div className="w-full absolute h-auto parallax mt-[15vh] flex justify-center">
                        <h1 className="m-0 p-2 rounded-lg text-center text-shadow-xl font-offbit text-[1700%] text-wh
                                    tracking-tight" data-aos="fade-up">wanderlust</h1>
                    </div>
                </ParallaxLayer>
                : <></>
        }
        <ParallaxLayer offset={0} speed={0}>
        <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/darkest.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
        <div className="h-full bg-[#252221]">
            <div className="pt-20 w-full">
                <div className="flex items-center justify-evenly mt-8">
                    <p className="text-4xl font-sans text-wh w-[40%] text-right line-height-2" data-aos="fade-right">
                        Powered by <a className="text-blu gradient-text" href="https://gemini.google.com/">Google's Gemini AI</a>, 
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
            {everything_after}
        </ParallaxLayer>
    </Parallax>
    </div>
    </>
  );
};

export default CityParallax;