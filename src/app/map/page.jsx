'use client'

import { useState } from 'react';
import { MapWrapper } from '@/components/ui/map';
import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';
import data from '@/app/map/test.json';
import { Modal } from '@/components/ui/modal';

export default function MapPage() {
    const [location, setLocation] = useState(data.itinerary[0].cityCoordinates);
    return (
        <>
        {/* <style>
        {`
        ::-webkit-scrollbar {
        display: none;
        }

        body {
        -ms-overflow-style: none;
        scrollbar-width: none;
        }
        `}
        </style>
        <div className="flex">
            <div className="relative h-[100vh] w-[40vw] overflow-y-scroll">
                <h1>Itinerary</h1>
                {data.itinerary.map((day, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                    <h2>Day {index + 1}: {day.date}</h2>
                    <h3>Overview</h3>
                    <p>{day.overview}</p>
                    <h3>Activities</h3>
                    <ul>
                        {day.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                        ))}
                    </ul>
                    </div>
                ))}
            </div>
            <div className="relative h-[100vh] w-[60vw]">
                <MapWrapper />
                <div className="absolute top-0 left-0 p-4 text-wh drop-shadow-bla">
                    <Link href="/plan">
                        <ArrowBigLeft size={64} />
                    </Link>
                </div>
            </div>
        </div> */}
        <MapWrapper location={location}/>
        <Modal onLocationChange={setLocation}/>

        </>

    );
}