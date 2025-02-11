import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[70vh] w-full">
      <Image
        src="/assets/banner/new-banner.png"
        alt="banner"
        layout="fill" 
        objectFit="cover"
      />
    </div>
  );
}

export default Banner;
