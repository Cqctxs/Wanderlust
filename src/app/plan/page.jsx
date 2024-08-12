"use client";

import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useMutation } from "@tanstack/react-query";
import { Frame } from "@/components/ui/navbar/frame";
import axios from "axios";
import { CityParallax } from "../../components/ui/city_parallax.jsx";
import countries from "./countries.js";

const Page = () => {
  const { user, isLoading } = useUser();
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetchItinerary = async ({ country, startDate, endDate, sub }) => {
    const res = await axios.get("http://localhost:8080/api/generate", {
      params: { country, startDate, endDate, sub },
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  };

  const mutation = useMutation(fetchItinerary);

  const handleSubmit = async () => {
    console.log(`${country}, ${startDate}, ${endDate} is being GET'd`);

    const params = {
      country: {country},
      startDate: {startDate},
      endDate: {endDate},
    };
    console.log(params);

    try {
      /*
      const response = await axios.get('http://localhost:8080/api/generate', {
        headers: {
          'Content-Type': 'application/json',
        },
        params: params,
      });
      */
     const response = await axios.get('http://localhost:8080/api/generate');

      console.log(`the value is ${response.data}`);
    } catch (error) {
      console.error(`omg there's an error ${error}`);
    } finally {
      console.log('yay yay we are done');
    }
  };

  return (
    <>
      <Frame />
      <CityParallax
        hasLogo={false}
        searchValue={
          <div className="flex z-20 animation_layer parallax justify-center mt-48 h-min">
            <div>
              <h1 className="flex pr-4 text-center drop-shadow-lg justify-center font-sans font-bold text-[1000%] text-wh tracking-tight">
                Where to?
              </h1>
              <form onSubmit={handleSubmit} className="row-span-3 w-[50vw]">
                <div className="flex">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-6/10 drop-shadow-lg pl-6 py-3 border-0 rounded-l-full"
                  >
                    <option value="" disabled>Select a country</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-2/10 drop-shadow-lg ml-1 border-0 py-2"
                  />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-2/10 drop-shadow-lg ml-1 py-2 border-0 "
                  />
                  <button type="button" onClick={handleSubmit} className="w-16 p-2 drop-shadow-lg border-0 ml-1 rounded-r-full bg-blue-500 text-white">
                    Go
                  </button>
                </div>
              </form>
            </div>
          </div>
        }
        everything_after={<div className="h-full bg-[#252322]"></div>}
      ></CityParallax>
    </>
  );
};

export default Page;