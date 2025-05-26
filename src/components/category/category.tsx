import Image from "next/image";
import React from "react";
import mobile from "../../../public/mobile.png";
import headphone from "../../../public/headphone.png";
import headphone3 from "../../../public/headphone3.png";
import vr from "../../../public/vr.png";
import watch2 from "../../../public/watch2.png";
import watch from "../../../public/watch.png";
const Category = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4 mb-11 text-center font-semibold">
      <div>
        <Image src={mobile} alt="mobile" width={135} height={135} />
        <p className="mt-4">Mobile</p>
      </div>
      <div>
        <Image src={headphone} alt="watch2" width={135} height={135} />
        <p className="mt-4">Headphone</p>
      </div>
      <div>
        <Image src={headphone3} alt="vr" width={135} height={135} />
        <p className="mt-4">Headphone</p>
      </div>
      <div>
        <Image src={vr} alt="headphone2" width={135} height={135} />
        <p className="mt-4">VR</p>
      </div>
      <div>
        <Image src={watch2} alt="watch" width={135} height={135} />
        <p className="mt-4">Watch</p>
      </div>
      <div>
        <Image src={watch} alt="headphone3" width={135} height={135} />
        <p className="mt-4">Watch</p>
      </div>
    </div>
  );
};

export default Category;
