"use client"

import Image from "next/image";
import { Frame } from "@/components/ui/navbar/frame";
import { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax';

export default function Home() {
  return (
    <div>
      <img src="/assets/citybg_sunset_2.png" className="h-full w-full fixed"></img>
      <Frame/>
      <div style={{ height: '100vh' }}>
        <Parallax
          bgImage="/assets/citybg_sunset_1.png"
          strength={500}
          bgImageStyle={{ height: '100vh', width: '100%' }}
          style={{ height: '100vh' }}
        >
          <div style={{ height: '100vh' }}>
            <Parallax
              bgImage="/assets/citybg_sunset_0.png"
              strength={400}
              bgImageStyle={{ height: '100vh', width: '100%' }}
              style={{ height: '100vh' }}
            >
              <div style={{ height: '100vh' }}>
                <Parallax
                  bgImage="/assets/citybg_orange_3.png"
                  strength={300}
                  bgImageStyle={{ height: '100vh', width: '100%' }}
                  style={{ height: '100vh' }}
                >
                  <div style={{ height: '100vh' }}>
                    <Parallax
                      bgImage="/assets/citybg_orange_2.png"
                      strength={200}
                      bgImageStyle={{ height: '100vh', width: '100%' }}
                      style={{ height: '100vh' }}
                    >
                      <div style={{ height: '100vh' }}>
                        <Parallax
                          bgImage="/assets/citybg_orange_1.png"
                          strength={100}
                          bgImageStyle={{ height: '100vh', width: '100%' }}
                          style={{ height: '100vh' }}
                        >
                          <div style={{ height: '100vh' }}>
                            <Parallax
                              bgImage="/assets/citybg_orange_0.png"
                              strength={0}
                              bgImageStyle={{ height: '100vh', width: '100%' }}
                              style={{ height: '100vh' }}
                            >
                              
                            </Parallax>
                          </div>
                        </Parallax>
                      </div>
                    </Parallax>
                  </div>
                </Parallax>
              </div>
            </Parallax>
          </div>
        </Parallax>
      </div>
      <Parallax strength={0}>
        <div
          style={{
            backgroundImage: 'url(/assets/citybg_orange_color.png)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            height: '100vh',
            padding: '20px',
            color: '#ffffff',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor metus eget neque malesuada, nec varius sem tincidunt. Curabitur ac turpis vitae urna egestas faucibus. Fusce auctor mi ut nisl elementum, nec fringilla ante auctor. Duis tincidunt ligula sit amet urna posuere, non malesuada enim convallis. Mauris tincidunt velit non turpis suscipit, non elementum libero vehicula. Integer gravida turpis ut quam laoreet, at sagittis leo dapibus. Vestibulum vel ligula eu quam facilisis iaculis.</p>
          <p>Donec nec libero eget dui consequat vulputate. Nullam facilisis sapien vitae mauris dapibus, id consectetur sapien tincidunt. Sed nec lectus et mauris iaculis fermentum. Aenean luctus orci sed risus euismod, id sagittis odio hendrerit. Duis vel eros et felis condimentum tincidunt. In vitae magna eget nisl rhoncus commodo sit amet vel sapien. Quisque scelerisque massa ut mi varius, non pretium odio ornare. Vivamus ac urna ac libero dictum egestas sed sed tortor.</p>
          <p>Aliquam erat volutpat. Maecenas varius magna ut nisi varius, sed efficitur felis consectetur. Nulla facilisi. Aenean iaculis dui id augue consectetur, at interdum ligula pellentesque. Sed venenatis turpis ut risus hendrerit, nec ultrices magna facilisis. Vestibulum in diam ac dolor ullamcorper hendrerit. Integer id vestibulum odio. Sed a tortor ut nisi bibendum aliquet non a ligula. Integer sit amet lectus sit amet ligula vehicula tempus non nec urna.</p>
          <p>Praesent ut risus varius, interdum metus in, accumsan orci. Suspendisse potenti. Donec sit amet ligula ultricies, tempor libero a, commodo velit. Donec ac nulla sapien. Integer eget urna ac velit scelerisque malesuada eget sit amet arcu. Proin in risus eu eros faucibus tempor id id turpis. Aliquam erat volutpat. Duis lobortis lacus sit amet massa hendrerit auctor.</p>
        </div>
      </Parallax>
    </div>
  );
}
