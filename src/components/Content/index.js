import React from "react";

import { StyledContent } from "./styles";

import GenericSection from "../GenericSection";
import HeroSection from "../HeroSection";
import PartnersSection from "../PartnersSection";

const Content = () => {
  return (
    <StyledContent>
      <HeroSection />
      <GenericSection isImageLeft={false} />
      <PartnersSection />
      <GenericSection isImageLeft={true} />
      <GenericSection isImageLeft={false} />
    </StyledContent>
  );
};

export default Content;
