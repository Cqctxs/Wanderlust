"use client";

import React from 'react';
import { DialogTitle, DialogActions, DialogContent, Button, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Frame } from "@/components/ui/navbar/frame";
import { useUser } from "@auth0/nextjs-auth0/client";
import { UserRoundX } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Footer from "@/components/ui/navbar/footer";
import { MapSmall } from '@/components/ui/mapsmall';
import axios from "axios";

export default function ProfileClient() {
  const { user, isLoading } = useUser();
  const [open, setOpen] = React.useState(false);
  const [travData, setTravData] = React.useState();


  const handleClickToOpen = (value) => {
    setOpen(true);
    setTravData(data.previousGenerations[value])
    console.log(travData)
  };

  const handleToClose = (value) => {
    setOpen(false);
  };
  const fetchPreviousGenerations = async (sub) => {
    console.log("joshua")
    const res = await axios.post(
      "https://portfolio-backend-430914.nn.r.appspot.com/api/user",
      {
        sub,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res.data; // Return the data from the response
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["previousGenerations"],
    queryFn: () => fetchPreviousGenerations(user.sub),
    enabled: !!user,
    onSuccess: (data) => {
      console.log("query succeeded with data: ", data);
    },
    onError: (error) => {
      console.log(`query failed with: ${error}`);
    },
  });

  if (!user)
    return (
      <div>
      <div className="flex bg-or h-screen w-screen justify-center items-center">
      <div className="bg-[#F7F5F2] justify-center items-center mt-12 rounded-xl shadow-md overflow-hidden px-24 pt-24 pb-12 flex flex-col">
        <div className="flex flex-col items-center justify-center h-full">
            <UserRoundX size={128} />
          <h2 className="text-3xl font-semibold text-center text-[#252221] mt-4">
            No user authenicated, please log in first.
          </h2>
          <a
          href="/api/auth/login"
          className="rounded-full mt-8 text-wh text-4xl bg-[#FF6128] px-10 py-5 font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
        >
          Login
          </a>
        </div>
      </div>
      </div>
      <Footer />
      </div>
    );

  return (
    <div>
      <Frame />
      <Box>
      <Dialog open={open} onClose={handleToClose} fullScreen={true}>
        <DialogContent>
          <div className="h-full bg-[#252322] flex flex-col justify-center items-center px-8 py-16 pb-40">
            <h1 className="text-wh font-sans text-8xl mb-12">Your trip to {travData?.country}</h1>
            <div className="flex h-min w-screen mx-8 px-12 space-x-8">
              <div className="relative flex w-3/5 bg-[#353130] rounded-2xl shadow-lg overflow-hidden">
                <MapSmall data={travData} />
              </div>
              <div className="flex flex-col w-2/5 space-y-4">
                <div className="relative bg-[#353130] rounded-2xl shadow-lg p-8 pb-8 flex flex-col overflow-y-auto h-[500px]">
                  <div className="text-wh text-lg flex-1">
                    <h1 className="text-wh font-sans text-4xl mb-2 text-center">Travel Itinerary</h1>
                    <ul className="list-disc ml-4 space-y-2 text-2xl text-[#c3c0c0]">
                      {travData?.itinerary.map((day, index) => (
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
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose}
            color="primary" autoFocus>
              Close
            </Button>
        </DialogActions>
      </Dialog>
    </Box>
      <div className="bg-[#FF6128] flex items-center justify-center px-6 pt-24 pb-12">
        <div className="grid grid-cols-4 gap-4 w-full mt-3 h-[calc(100vh-8rem)]">
          {/* Left Column with Two Boxes */}
          <div className="col-span-1 flex flex-col gap-4">
            {/* User Profile Picture Box */}
            <div className="bg-[#F7F5F2] rounded-lg shadow-md overflow-hidden p- flex flex-col h-full">
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  className="h-36 w-36 rounded-full border-4 border-[#2176FF]"
                  src={user.picture}
                  alt={user.name}
                />
                <h2 className="text-5xl font-semibold text-center text-[#252221] mt-4">
                  {user.name}
                </h2>
                <p className="text-center text-gray-800 mt-2">{user.email}</p>
              </div>
            </div>

            {/* Additional User Information Box */}
            <div className="bg-[#F7F5F2] rounded-lg shadow-md overflow-hidden p-6 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-center text-[#252221] mb-2">
                Additional Information
              </h2>
              <p className="text-gray-600">
                You can add more details here about the user. Consider
                including:
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Recent Activity</li>
                <li>Favorite Destinations</li>
                <li>Upcoming Trips</li>
                <li>Contact Information</li>
              </ul>
            </div>
          </div>

          <div className="col-span-3 bg-[#F7F5F2] rounded-lg shadow-md overflow-y-auto p-12 px-16 flex flex-col h-full">
            <h2 className="text-5xl font-semibold text-center text-[#252221] mt-2 mb-4">
              Generation History
            </h2>
            <div className="space-y-4 flex-grow">
              {isPending ? (
                <p className="text-gray-600">Loading...</p>
              ) : (
                (error && !data) ? (
                  <p>Could not find any previous data. Try generating a trip!</p>
                ) : (
                  <div className="text-gray-600">
                  {data.previousGenerations.map((travelPlan, index) => (
                    <div key={index} className="mb-6">
                      <div className="grid gap-6 grid-cols-2">
                        <div>
                          <h2 className="font-normal text-blu text-3xl">
                            {travelPlan.country}
                          </h2>
                          <p className="font-normal text-gray text-lg mb-2">{travelPlan.itinerary[0].date} to {travelPlan.itinerary[travelPlan.itinerary.length - 1].date}</p>
                        </div>
                        
                        <div className="flex justify-end items-center">
                          <a 
                            className="bg-blu text-wh font-sans text-1xl font-bold py-4 px-7 rounded-full shadow-md transition-transform hover:scale-105"
                            onClick={() => {handleClickToOpen(index)}}
                          >
                            Review Trip
                          </a>
                        </div>
                      </div>
                      
                      <hr style={{width: "100%"}}></hr>
                      
                      {/* {travelPlan?.itinerary.map((day, index) => (
                        <li key={index}>
                          {day.city} - {day.date}3
                          <ul className="list-disc ml-8 mt-2 text-lg font-extralight text-[#c3c0c0]">
                            {day.locations.map((activity, i) => (
                              <li key={i}>{activity}</li>
                            ))}
                          </ul>
                        </li>
                      ))} */}
                    </div>
                  ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
