import React from "react";

import GenericSection from "./components/GenericSection";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";

import { StyledHome } from "./styles";

const Home = () => {
  return (
    <StyledHome>
      <HeroSection />
      <GenericSection isImageLeft={false} />
      <PartnersSection />
      <GenericSection isImageLeft={true} />
      <GenericSection isImageLeft={false} />
    </StyledHome>
  );
};

export default Home;
