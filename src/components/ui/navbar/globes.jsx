import { useState, useEffect } from "react";
import Image from "next/image";

const globes = ["/assets/globe_1.svg", "/assets/globe_2.svg", "/assets/globe_3.svg", "/assets/globe_4.svg"];

export const Globes = ({ start = 0 }) => {
    const [currentGlobeIndex, setCurrentGlobeIndex] = useState(start);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGlobeIndex((prevIndex) => (prevIndex + 1) % globes.length);
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="z-10 relative w-16 h-16 drop-shadow-or">
            <Image src={globes[currentGlobeIndex]} alt={`Globe ${currentGlobeIndex + 1}`} fill={true} />
        </div>
    );
};