"use client";

import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useMutation } from "@tanstack/react-query";
import { Frame } from "@/components/ui/navbar/frame";
import axios from "axios";
import { CityParallax } from "../../components/ui/city_parallax.jsx";
import countries from "./countries.json";

const fetchItinerary = async ({ country, startDate, endDate, sub }) => {
  const res = await axios.get("http://localhost:8080/api/generate", {
    params: { country, startDate, endDate, sub },
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

const Page = () => {
  const { user, isLoading } = useUser();
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const mutation = useMutation(fetchItinerary);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ country, startDate, endDate, sub: user.sub });
  };

  return (
    <>
      <Frame />
      <CityParallax
        hasLogo={false}
        searchValue={
          <div className="flex z-20 animation_layer parallax justify-center items-center w-full">
            <div className="grid grid-rows-4 gap-4">
              <h1 className="row-span-1 flex rounded-lg text-center justify-center items-center font-sans font-bold text-[1000%] text-wh tracking-tight">
                Where to?
              </h1>
              <form onSubmit={handleSubmit} className="row-span-3 w-[50vw]">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full p-2 border rounded"
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
                  className="w-full p-2 border rounded mt-4"
                />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full p-2 border rounded mt-4"
                />
                <button type="submit" onSubmit={handleSubmit} className="w-full p-2 border rounded mt-4 bg-blue-500 text-white">
                  Submit
                </button>
              </form>
            </div>
          </div>
        }
        everything_after={<div className="h-full bg-[#252221]"></div>}
      ></CityParallax>
    </>
  );
};

export default Page;