import { MapWrapper } from '@/components/ui/map';
import { ArrowBigLeft } from 'lucide-react';
import Link from 'next/link';

export default function MapPage() {
    return (
        <>
        <style>
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
            <div className="relative h-[100vh] w-[50vw]">
                <h1>Itinerary</h1>
                <p>put itinerary here</p>
            </div>
            <div className="relative h-[100vh] w-[50vw]">
                <MapWrapper />
                <div className="absolute top-0 left-0 p-4 text-wh drop-shadow-bla">
                    <Link href="/">
                        <ArrowBigLeft size={64} />
                    </Link>
                </div>
            </div>
        </div>
        </>

    );
}