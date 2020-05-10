import React from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import Two from "../../assets/images/two.png";
import Three from "../../assets/images/three.png";

import { StyledSection, StyledSectionWrapper } from "./styles";

const leftTitle = "At vero eos et accusamus et iusto odio dignissimos";
const leftText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const rightTitle = "Nam libero tempore, cum soluta nobis est eligendi";
const rightText =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const GenericSection = ({ isImageLeft }) => {
  const { isDesktop } = useWindowDimensions();

  const image = isImageLeft ? Two : Three;
  const title = isImageLeft ? leftTitle : rightTitle;
  const text = isImageLeft ? leftText : rightText;

  return (
    <StyledSectionWrapper isImageLeft={isImageLeft} className="section-wrapper">
      <StyledSection
        isDesktop={isDesktop}
        isImageLeft={isImageLeft}
        className="section"
      >
        <div className="image-wrapper">
          <img src={image} alt="section" />
        </div>

        <div className="text-wrapper">
          <div className="subheader-text">{title}</div>
          <div className="info-text">{text}</div>
        </div>
      </StyledSection>
    </StyledSectionWrapper>
  );
};

export default GenericSection;
