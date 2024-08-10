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
            <h1 className="m-0 p-0 rounded-lg text-center text-shadow-xl font-offbit text-9xl text-or
                           bg-gradient-to-br from-transparent via-bla to-transparent">wanderlust</h1>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div className="animation_layer parallax" style={{ backgroundImage: "url(/assets/darkest.png)" }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <div id="textblock">
            <div id="textblock-container">
              <h1 id="textblock-title">What is Firewatch?</h1>
              <p id="textblock-content">
                The year is 1989.<br /><br />
                You are a man named Henry who has retreated from your messy life to work as a fire lookout in the Wyoming wilderness. Perched atop a mountain, it's your job to find smoke and keep the wilderness safe.<br /><br />
                An especially hot, dry summer has everyone on edge. Your supervisor, a woman named Delilah, is available to you at all times over a small, handheld radio—and is your only contact with the world you've left behind.<br /><br />
                But when something strange draws you out of your lookout tower and into the world below, you'll explore a wild and unknown environment, facing questions and making interpersonal choices that can build or destroy the only meaningful relationship you have.
              </p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default CityParallax;