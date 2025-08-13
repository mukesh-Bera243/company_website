import React, { useEffect, useState } from "react";
import HeroSection from "./hero-section";
import HomeServices from "./home-services";
import HomeWhyChooseUs from "./home-whychooseus";
import HomeIndustryList from "./home-industrylist";

function Home() {
  return (
    <>
      <HeroSection />
      <HomeServices />
      <HomeWhyChooseUs />
      <HomeIndustryList />
    </>
  );
}

export default Home;
