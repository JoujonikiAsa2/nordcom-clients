import Image from "next/image";
import React from "react";
import headphone from "../../../public/headphone.png";
const Banner = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="w-full mb-11 rounded-xl bg-[#FAB758] min-h-[290px] lg:flex  items-center justify-between  text-white text-center lg:px-20 hidden">
      <div className="text-left w-[45%]">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-sm md:text-base mt-2">{description}</p>
      </div>
      <div>
        <Image src={headphone} width={270} height={270} alt="headphone" />
      </div>
    </div>
  );
};

export default Banner;
