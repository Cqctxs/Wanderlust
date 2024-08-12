"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useMutation } from "@tanstack/react-query";
import { Frame } from "@/components/ui/navbar/frame";
import axios from "axios";
import { CityParallax } from "@/components/ui/city_parallax.jsx";
import { MapSmall } from "@/components/ui/mapsmall";
import countries from "./countries";
import travelData from "./sampleTravelData";
import { MagnifyingGlass } from "react-loader-spinner";

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

  // for the loading screen
  const [initialLoad, setInitialLoad] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (dataLoading) setLoadingTime(loadingTime + 0.1);
    }, 100);
    return () => clearInterval(intervalId);
  });

  const handleSubmit = async () => {
    console.log(`${country}, ${startDate}, ${endDate} is being GET'd`);

    try {
      setInitialLoad(false);
      setLoadingTime(0);
      setDataLoading(true);

      const response = await axios.post('http://localhost:8080/api/generate', 
        { 
          country: country,
          startDate: startDate,
          endDate: endDate,
          sub: user.sub,
        }
      );
      setDataLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error(`omg there's an error ${error}`);
    } finally {
      console.log("yay yay we are done");
    }
  };

  return (
    <>
      <Frame />
      <CityParallax 
        hasLogo={false}
        searchValue={
          <div className="flex z-20 animation_layer parallax align-center justify-center mt-56 h-min">
            <div>
              <h1 className="flex text-center drop-shadow-lg justify-center font-sans font-bold text-[1000%] text-wh tracking-tight">
                Where to?
              </h1>
              <form onSubmit={handleSubmit} className="row-span-3 w-[50vw]">
                <div className="flex">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-6/10 drop-shadow-lg pl-6 py-3 border-0 rounded-l-full"
                  >
                    <option value="" disabled>
                      Select a country
                    </option>
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
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-20 p-2 pr-3 drop-shadow-lg border-0 ml-1 text-2xl rounded-r-full bg-blue-500 text-white"
                  >
                    Go
                  </button>
                </div>
              </form>
            </div>
          </div>
        }
        everything_after={ dataLoading ? 
          <div className="h-full flex justify-center bg-[#252322]">
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
            <h1 className="">Loading... {loadingTime.toFixed(1)}s</h1>
          </div> 
          : 
          <div className="h-full bg-[#252322] flex flex-col justify-center items-center px-8 py-16">
          {/* Heading */}
          <h1 className="text-wh font-sans text-8xl mb-12">Your Trip to {travelData.country}</h1>
        
          <div className="flex h-min w-screen mx-8 px-12  space-x-8">
            {/* Left Card - Map */}
            <div className="relative  flex w-3/5 bg-[#353130] rounded-2xl shadow-lg overflow-hidden">
              <MapSmall />
            </div>
            {/* Right Card Container */}
            <div className="flex flex-col w-2/5 space-y-4">
              {/* Right Card - Scrollable Paragraph */}
              <div className="relative bg-[#353130] rounded-2xl shadow-lg p-8 pb-8 flex flex-col overflow-y-auto h-[500px]">
                {/* Content Container */}
                <div className="text-wh text-lg flex-1">
                  <h1 className="text-wh font-sans text-4xl mb-2 text-center">Travel Itinerary</h1>
                  <ul className="list-disc ml-4 space-y-2 text-2xl text-[#c3c0c0]">
                    {travelData.itinerary.map((day, index) => (
                      <li key={index}>
                        {day.city} - {day.date}
                        <ul className="list-disc ml-8 mt-2 text-lg font-extralight text-[#c3c0c0]">
                          {day.locations.map((activity, i) => (
                            <li key={i}>{activity}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Button Below the Right Card */}
              <div className="flex justify-center">
                <a href="/map"
                className="bg-blu text-wh font-sans text-3xl font-bold py-6 px-10 rounded-full shadow-md transition-transform transform hover:scale-105"
                 >
                  Explore This Trip
                </a>
              </div>
            </div>
          </div>
        </div>
        }
        everything_after_everything_after={
          <div className="bg-[#252323] border-[#252323] text-wh h-full p-0">
              <div className="flex justify-center space-x-8">
                <a
                  href="#our-team"
                  className="rounded-full bg-[#FF6128] px-8 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
                >
                  Our Team
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#FF6128] px-6 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
                >
                  Github
                </a>
                <a
                  href="#contact"
                  className="rounded-full bg-[#FF6128] px-6 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
                >
                  Contact Us
                </a>
                <a
                  href="#other"
                  className="rounded-full bg-[#FF6128] px-6 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
                >
                  ???
                </a>
              </div>
            </div>
        }
      ></CityParallax>
    </>
  );
};

export default Page;
