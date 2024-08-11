"use client";

import React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Plan = () => {
  const { user, isLoading } = useUser();

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

  if (isPending) return <div>Loading tasks...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  console.log(data)

  return (
    <>
      <Frame />
      <CityParallax
        hasLogo={false}
        searchValue={
          <div className="flex z-20 animation_layer parallax justify-center mt-48 h-min">
            <div>
              <h1 className="flex text-center justify-center font-sans font-bold text-[1000%] text-wh tracking-tight">
                Where to?
              </h1>
              <form onSubmit={handleSubmit} className="row-span-3 w-[50vw]">
                <div className="flex">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-6/10 py-3 border-0 rounded-l-full"
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
                    className="w-2/10 ml-1 border-0 py-2"
                  />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-2/10 ml-1 py-2 border-0 "
                  />
                  <button type="submit" onSubmit={handleSubmit} className="w-16 p-2 border-0 ml-1 rounded-r-full bg-blue-500 text-white">
                  Go
                  </button>
                </div>
              </form>
            </div>
          </div>
        }
        everything_after={<div className="h-full bg-[#252221]"></div>}
      ></CityParallax>
    </>
  );
};

export default Plan;