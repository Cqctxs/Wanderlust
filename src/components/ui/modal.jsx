import Link from 'next/link';
import { ArrowBigLeft } from 'lucide-react';

export const Modal = () => {
    return (
        <div className="absolute w-full h-screen flex justify-between">
            <div className="top-0 left-0 p-4 text-wh drop-shadow-bla">
                <Link href="/">
                    <ArrowBigLeft size={64} />
                </Link>
            </div>
            <div className='right-12 top-0 rounded-3xl h- bg-wh w-[36em] flex-col flex justify-center p-10 text-bla'>
                <div className='text-5xl'>
                    Generate Trip
                </div>
                <div className='text-lg text-bla/50'>
                    Select a country below:
                </div>
            </div>
        </div>
    );
};