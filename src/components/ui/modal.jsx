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
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const [travData, setTravData] = React.useState();

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
      <div className="absolute p-4 right-0 text-wh drop-shadow-bla pointer-events-auto">
        <Link href="/plan">
          <div className="transform transition duration-200 ease-in-out hover:scale-110">
            <CircleArrowLeft size={56} />
          </div>
        </Link>
      </div>
      <div className="absolute top-0 left-0 items-center justify-center h-screen p-12">
        <div className="drop-shadow-bla w-[450px] pointer-events-auto">
          <div className="w-[450px] h-[48em] items-center flex flex-col">
            <div className="font-offbit border-or border-[6px] tracking-wide text-7xl mb-5 text-center rounded-full h-28 bg-wh w-max px-16 flex-col flex py-4 pt-5 text-bla">
              Day {index + 1}
            </div>
            <div className="border-or  flex-row p-8 bg-wh rounded-t-lg h-[400px] text-[gray] overflow-y-auto">
              <h2 className="text-2xl mb-4 text-bla text-center">
                Trip itinerary for {month[parseInt(data.itinerary[0].date.substring(5,7))]} {data.itinerary[0].date.substring(8,10)}, {data.itinerary[0].date.substr(0, 4)}
              </h2>
              <h3 className="font-bold my-2 text-lg">Overview</h3>
              <p className="text-justify">{data.itinerary[index].overview}</p>
              <h3 className="font-bold my-2 text-lg">Activities</h3>
              <ul className="text-justify">
                {data.itinerary[index].activities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </div>
            <div className="h-[25px] w-full bg-wh mt-0">
            </div>
            <div className="flex-shrink-0 w-full bg-or text-wh rounded-b-lg mt-0">
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
