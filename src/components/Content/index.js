import React from "react";

import { StyledContent } from "./styles";

import GenericSection from "../GenericSection";
import HeroSection from "../HeroSection";

const Content = () => {
  return (
    <StyledContent>
      <HeroSection />
      <GenericSection isImageLeft={false} />
      <GenericSection isImageLeft={true} />
      <GenericSection isImageLeft={false} />
    </StyledContent>
  );
};

export default Content;
