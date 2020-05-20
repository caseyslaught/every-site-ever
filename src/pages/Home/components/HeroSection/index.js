import React from "react";
import { Button } from "semantic-ui-react";

import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import One from "../../../../assets/images/one.png";

import { StyledHeroSection, StyledHeroSectionWrapper } from "./styles";

const HeroSection = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledHeroSectionWrapper className="hero-wrapper">
      <StyledHeroSection isDesktop={isDesktop}>
        <div className="image-wrapper">
          <img src={One} alt="hero" />
        </div>
        <div className="text-wrapper">
          <div className="header-text">
            Creating things for people is what we do
          </div>
          <div className="info-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </div>
          <div>
            <Button
              basic
              color="blue"
              style={{ height: 50, fontSize: "1.3em" }}
            >
              Request demo
            </Button>
          </div>
        </div>
      </StyledHeroSection>
    </StyledHeroSectionWrapper>
  );
};

export default HeroSection;
