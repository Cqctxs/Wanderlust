"use client";

import React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useQuery } from "@tanstack/react-query";
import { Frame } from "@/components/ui/navbar/frame";
import axios from "axios";

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
    
    return (
      <div className="flex-col items-center h-full justify-center align-center">
        <h1 className="flex justify-center">{data}</h1>
      </div>
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