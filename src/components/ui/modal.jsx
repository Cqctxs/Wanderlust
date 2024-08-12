"use client";

import Link from "next/link";
import { CircleArrowLeft } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useState } from "react";

import data from "@/app/map/test.json";

export const Modal = ({ data, onLocationChange }) => {
  const [index, setIndex] = useState(0);
  const maxIndex = data.itinerary.length - 1;

  const handlePreviousClick = () => {
    setIndex((prevIndex) => {
      const newIndex = Math.max(prevIndex - 1, 0);
      onLocationChange(data.itinerary[newIndex].cityCoordinates);
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => {
      const newIndex = Math.min(prevIndex + 1, maxIndex);
      onLocationChange(data.itinerary[newIndex].cityCoordinates);
      return newIndex;
    });
  };

  return (
    <div className="absolute w-full h-screen flex justify-between pointer-events-none">
      <div className="top-0 left-0 p-4 text-wh drop-shadow-bla pointer-events-auto">
        <Link href="/plan">
          <div className="transform transition duration-200 ease-in-out hover:scale-110">
            <CircleArrowLeft size={56} />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center h-screen relative p-12">
        <div className="drop-shadow-bla pointer-events-auto">
          <div className="font-offbit rounded-2xl h-28 bg-wh w-[36em] flex-col flex justify-center p-5 pt-8 text-bla">
            <div className="text-5xl">Day {index + 1}</div>
            <div className="text-lg text-bla/50">
              Day {index + 1} Trip Itinerary
            </div>
          </div>
          <div className="w-[36em] h-[48em] flex flex-col">
            <div className="flex-grow p-5 bg-wh rounded-2xl overflow-auto">
              <h2>
                Day {index + 1}: {data.itinerary[index].date}
              </h2>
              <h3>Overview</h3>
              <p>{data.itinerary[index].overview}</p>
              <h3>Activities</h3>
              <ul>
                {data.itinerary[index].activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 bg-wh rounded-2xl">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious onClick={handlePreviousClick} />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">{index + 1}</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext onClick={handleNextClick} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
