import Image from "next/image";
import { Frame } from "@/components/ui/navbar/frame";
import { CityParallax } from "@/components/ui/city_parallax";

export default function Home() {
  return (
    <div>
      <Frame />
      {/* Parallax background */}
      <div className="-z-50" style={{overflow: 'auto'}}>
        <CityParallax
          sky_0={"/assets/citybg_sunset_0.png"} 
          sky_1={"/assets/citybg_sunset_1.png"} 
          sky_2={"/assets/citybg_sunset_2.png"}
          city_0={"/assets/citybg_orange_0.png"} 
          city_1={"/assets/citybg_orange_1.png"} 
          city_2={"/assets/citybg_orange_2.png"} 
          city_3={"/assets/citybg_orange_3.png"}

          everything_after={
            <div className="text-wh bg-bla">
              jojothewarrior
            </div>
          }
        />
      </div>
    </div>
  );
}
