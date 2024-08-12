"use client";

import Link from 'next/link';
import { ArrowBigLeft } from 'lucide-react';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import React, { useState } from 'react';

import data from '@/app/map/test.json';

export const Modal = () => {
    const [index, setIndex] = useState(0);
    const maxIndex = data.itinerary.length - 1;

    const handlePreviousClick = () => {
        setIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    const handleNextClick = () => {
        setIndex(prevIndex => Math.min(prevIndex + 1, maxIndex));
    };

    return (
        <div className="absolute w-full h-screen flex justify-between pointer-events-none">
            <div className="top-0 left-0 p-4 text-wh drop-shadow-bla pointer-events-auto">
                <Link href="/">
                    <ArrowBigLeft size={64} />
                </Link>
            </div>
            <div className='flex items-center justify-center h-screen relative p-12'>
                <div className='drop-shadow-bla pointer-events-auto'>
                    <div className='rounded-2xl h-28 bg-wh w-[36em] flex-col flex justify-center p-5 pt-8 text-bla'>
                        <div className='text-5xl font-offbit'>
                            Day {index + 1}
                        </div>
                        <div className='text-lg text-bla/50'>
                            Day {index + 1} Trip Itinerary
                        </div>
                    </div>
                    <div className='w-[36em] h-[48em] flex flex-col rounded-2xl bg-wh p-6'>
                        <div className='flex-grow p-5 bg-wh rounded-2xl overflow-auto drop-shadow-bla'>
                            <h2 className='flex text-2xl justify-center'>
                                {/* #TODO Make calender icon */}<ArrowBigLeft size={36} />
                                {data.itinerary[index].date}
                            </h2>
                            <hr className='my-3'/>
                            <p className='text-center text-bla/80 text-xl'>{data.itinerary[index].overview}</p>
                            <hr className='my-3'/>
                            <h3 className='text-2xl'>Activities</h3>
                            <ul>
                                {data.itinerary[index].activities.map((activity, i) => (
                                    <li key={i} className='text-lg text-bla/80 list-decimal ml-6 my-2'>{activity}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex-shrink-0 mt-6'>
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