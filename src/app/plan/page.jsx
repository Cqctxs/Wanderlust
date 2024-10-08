"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";
import { Frame } from "@/components/ui/navbar/frame";
import { CityParallax } from "@/components/ui/city_parallax.jsx";
import { MapSmall } from "@/components/ui/mapsmall";
import countries from "./countries";
import travelData from "./sampleTravelData";
import { ThreeDots } from "react-loader-spinner";

const Page = () => {
  const { user, isLoading } = useUser();
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [pageNumber, setPageNumber] = useState(1);
  const [dataLoading, setDataLoading] = useState(false);
  const [loadingTime, setLoadingTime] = useState(0);
  const [travelData, setTravelData] = useState(null);

  const handleExploreClick = () => {
    localStorage.setItem('travelData', JSON.stringify(travelData));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (dataLoading) setLoadingTime(loadingTime + 0.1);
    }, 100);
    return () => clearInterval(intervalId);
  }, [dataLoading, loadingTime]);

  useEffect(() => {
    // Add a small timeout or force update mechanism if necessary
    const timer = setTimeout(() => {
      // Force component update
    }, 0);
    return () => clearTimeout(timer);
  }, [pageNumber]);

  const handleSubmit = async () => {
    if (dataLoading) return;
    console.log(`${country}, ${startDate}, ${endDate} is being GET'd`);
    try {
      setDataLoading(true);
      setLoadingTime(0);
      const response = await axios.post('https://portfolio-backend-430914.nn.r.appspot.com/api/generate', 
        { 
          country,
          startDate,
          endDate,
          sub: user.sub,
        }
      );
      setTravelData(response.data);
    } catch (error) {
      console.error(`omg there's an error ${error}`);
    } finally {
      setDataLoading(false);
      console.log("yay yay we are done");
    }
  };

  return (
    <>
      <Frame />
      <CityParallax 
        pages={2.15}
        hasLogo={false}
        searchValue={
          <div className="flex z-20 animation_layer parallax text-center align-center justify-center mt-56 h-min">
            <div>
              <h1 id="top" className="flex text-center drop-shadow-lg justify-center font-sans font-bold text-[1000%] text-wh tracking-tight">
                Where to?
              </h1>
              <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="flex row-span-3 w-[50vw] justify-center">
                <div className="flex">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-6/10 drop-shadow-lg pl-6 py-3 border-0 rounded-l-full"
                  >
                    <option value="" disabled>Select a country</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.name}>{country.name}</option>
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
                    className="w-2/10 drop-shadow-lg ml-1 py-2 border-0"
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
          <div className="flex h-full flex-col align-center items-center justify-center bg-[#252322]">
            <h1 className="text-wh text-4xl" data-aos="fade-down">Generating your trip... {loadingTime.toFixed(1)}s</h1>
            <ThreeDots
                visible={true}
                height="12vw"
                width="15vw"
                color="#2176ff"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
          </div> 
          : ( !travelData ? 
            <div className="flex h-full flex-col align-center items-center justify-center bg-[#252322]">
              <h1 className="text-wh text-4xl" data-aos="fade-down">Enter trip details <a href="#search-bar">above</a></h1>
              <ThreeDots
                  visible={true}
                  height="12vw"
                  width="15vw"
                  color="#2176ff"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
              />
            </div> 
            :
            <div className="h-full bg-[#252322] flex flex-col justify-center items-center px-8 py-16 pb-40">
            {/* Heading */}
            <h1 className="text-wh font-sans text-8xl mb-12" data-aos="fade-up">Your Trip to {travelData?.country}</h1>
          
            <div className="flex h-min w-screen mx-8 px-12  space-x-8">
              {/* Left Card - Map */}
              <div className="relative  flex w-3/5 bg-[#353130] rounded-2xl shadow-lg overflow-hidden" data-aos="fade-right">
                <MapSmall data={travelData} />
              </div>
              {/* Right Card Container */}
              <div className="flex flex-col w-2/5 space-y-4" data-aos="fade-left">
                {/* Right Card - Scrollable Paragraph */}
                <div className="relative bg-[#353130] rounded-2xl shadow-lg p-8 pb-8 flex flex-col overflow-y-auto h-[500px]">
                  {/* Content Container */}
                  <div className="text-wh text-lg flex-1">
                    <h1 className="text-wh font-sans text-4xl mb-2 text-center">Travel Itinerary</h1>
                    <ul className="list-disc ml-4 space-y-2 text-2xl text-[#c3c0c0]">
                      {travelData?.itinerary.map((day, index) => (
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
                  <a href="/map" onClick={handleExploreClick}
                  className="bg-blu text-wh font-sans text-3xl font-bold py-6 px-10 rounded-full shadow-md transition-transform transform hover:scale-105"
                  >
                    Explore This Trip
                  </a>
                </div>
              </div>
            </div>
          </div>
          )
        }
      />
    </>
  );
};

export default Page;
