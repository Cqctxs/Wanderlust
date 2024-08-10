"use client";

import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export const CityParallax = ({ sky_0, sky_1, sky_2, city_0, city_1, city_2, city_3, everything_after }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
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

          .animation, .animation_layer {
            height: 1000px;
          }

          .animation {
            display: block;
            position: relative;
            z-index: 10;
          }

          .animation_layer {
            background-position: bottom center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 100%;
            position: absolute;
          }
          
          .logo_layer {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 1136px;
            height: 184px;
          }

          .animation_layer.parallax {
            position: fixed;
          }

          .gradient-text:hover {
            background: linear-gradient(to right, #357cfe, #e74c5c);
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
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_sunset_2.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2}>
          <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_sunset_1.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_sunset_0.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.05}>
          <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_orange_3.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.15}>
          <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_orange_2.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/citybg_orange_1.png)" }}></div>
        </ParallaxLayer>
        {/* logo */}
        <ParallaxLayer offset={0} speed={-1.1}>
          <div className="w-full absolute h-auto parallax mt-40 flex justify-center">
            <h1 className="m-0 p-2 rounded-lg text-center text-shadow-xl font-offbit text-9xl text-or
                           backdrop-brightness-125 backdrop-blur-xl">wanderlust</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/darkest.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <div className="h-full bg-[#2a2320]">
            <div className="m-auto p-[70] w-[80vw]">
              <h1 id="textblock-title">Wanderlust</h1>
              <p id="textblock-content">
                Your adventures begin here! <br></br> <br></br>
                Powered by <a className="font-bold text-home-dark gradient-text" href="https://gemini.google.com/">Google's Gemini AI</a>, 
                Wanderlust uses a large database of popular tourism destinations to tailor a travel itinerary for your travels.
              </p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default CityParallax;