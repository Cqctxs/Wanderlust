"use client";

import React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useQuery } from "@tanstack/react-query";
import { Frame } from "@/components/ui/navbar/frame";
import axios from "axios";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { CityParallax } from "../../components/ui/city_parallax.jsx";

const Plan = () => {
  const { user, isLoading } = useUser();

  /*
  const fetchItinerary = async (country, startDate, endDate, sub) => {
    const res = await axios.post("http://localhost:8080/api/generate", {
      country,
      startDate,
      endDate,
      sub,
    }, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data; // Return the data from the response
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["itinerary"],
    queryFn: () => fetchItinerary("China", "2024-10-10", "2024-10-15", user.sub),
  });
  */

  const getInnerContent = () => {

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

    return (
      <CityParallax
      hasLogo={false}
      searchValue={
        <div className="z-20 animation_layer parallax flex justify-center w-full">
        <ReactSearchAutocomplete className="mt-[40vh] w-[50vw]"
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
        />
        </div>
      }
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
    );
  }

  return (
    <>
      <Frame />
      {getInnerContent()}
    </>
  )
};

export default Plan;