import Image from "next/image";
import topRight from "@/assets/top_right.svg";
import topLeft from "@/assets/top_left.svg";
import bottomRight from "@/assets/bottom_right.svg";
import bottomLeft from "@/assets/bottom_left.svg";

export const Frame = () => {
  return (
    <div className="drop-shadow-or fixed inset-0">
      <div className="absolute h-full w-6 bg-wh" />
      <div className="absolute right-0 h-full w-6 bg-wh" />
      <div className="absolute h-6 w-full bg-wh" />
      <div className="absolute bottom-0 h-6 w-full bg-wh" />
      <div className="absolute top-6 left-6 bg-[url('../assets/top_left.svg')] bg-no-repeat h-20 w-80" />
      <div className="absolute top-6 right-6 bg-[url('../assets/top_right.svg')] bg-no-repeat h-20 w-80" />
      <div className="absolute bottom-6 left-6 bg-[url('../assets/bottom_left.svg')] bg-no-repeat h-20 w-80" />
      <div className="absolute bottom-6 right-6 bg-[url('../assets/bottom_right.svg')] bg-no-repeat h-20 w-80" />
    </div>
  );
};