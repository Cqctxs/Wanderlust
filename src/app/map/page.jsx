'use client'

import { useState, useEffect } from 'react';
import { MapWrapper } from '@/components/ui/map';
import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';
import data from '@/app/map/test.json';
import { Modal } from '@/components/ui/modal';

export default function MapPage() {
    const [travelData, setTravelData] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('travelData'));
        console.log("storedData");
        console.log(storedData);
        if (storedData) {
            setTravelData(storedData);
            // Optionally remove the item from localStorage if you no longer need it
            // localStorage.removeItem('travelData');
        }
    }, []);
    
    useEffect(() => {
        if (travelData) {
            console.log("travelData");
            console.log(travelData);
            console.log(typeof travelData);
            // setLocation(travelData.itinerary[0].cityCoordinates);
        }
    }, [travelData]);
      
    return (
        <>
        {travelData && (
            <>
                <MapWrapper data={travelData} location={location} />
                <Modal data={travelData} onLocationChange={setLocation} />
            </>
        )}

        </>

    );
}