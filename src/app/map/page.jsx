"use client";

import { useState, useEffect } from 'react';
import { MapWrapper } from '@/components/ui/map';
import { Modal } from '@/components/ui/modal';
import data from '@/app/map/test.json';

export default function MapPage() {
    const [travelData, setTravelData] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('travelData'));
        if (storedData) {
            setTravelData(storedData);
            // Set initial location
            if (storedData.itinerary && storedData.itinerary.length > 0) {
                setLocation(storedData.itinerary[0].cityCoordinates);
            }
        }
    }, []);

    useEffect(() => {
        if (travelData) {
            console.log("travelData", travelData);
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