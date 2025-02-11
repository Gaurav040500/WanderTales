import Banner from "@/components/banner";
import CustomSwiper from "@/components/custom-swiper";
import Navbar from "@/components/navbar";
import SearchBox from "@/components/search-box";
import React from "react";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <SearchBox/>
      <CustomSwiper />
    </div>
  );
}

export default LandingPage;
