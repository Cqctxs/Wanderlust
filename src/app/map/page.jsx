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
            <MapWrapper />
            <div className="absolute top-0 left-0 p-4 text-wh drop-shadow-bla">
                <Link href="/">
                    <ArrowBigLeft size={64} />
                </Link>
            </div>
        </>

    );
}