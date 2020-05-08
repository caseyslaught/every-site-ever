import React from "react";

import { StyledPartnersSection, StyledPartnersSectionWrapper } from "./styles";

import One from "../../assets/images/partner_one.png";
import Two from "../../assets/images/partner_two.png";
import Three from "../../assets/images/partner_three.png";
import Four from "../../assets/images/partner_four.png";
import Five from "../../assets/images/partner_five.png";

const PartnerTile = ({ imageUrl, companyHref }) => {
  const style = {
    wrapper: {
      margin: 20,
      height: 100,
    },
    image: {
      width: "auto",
      height: "100%",
      filter: "grayscale(100%)",
    },
  };

  return (
    <div style={style.wrapper}>
      <img src={imageUrl} style={style.image} />
    </div>
  );
};

const PartnersSection = () => {
  return (
    <StyledPartnersSectionWrapper>
      <StyledPartnersSection>
        <div className="subheader-text">Trusted by</div>
        <div className="partners-wrapper">
          <PartnerTile imageUrl={One} />
          <PartnerTile imageUrl={Two} />
          <PartnerTile imageUrl={Three} />
          <PartnerTile imageUrl={Four} />
          <PartnerTile imageUrl={Five} />
        </div>
        <div className="bottom-text">
          <h4>
            <span>and 100+ other companies</span>
          </h4>
        </div>
      </StyledPartnersSection>
    </StyledPartnersSectionWrapper>
  );
};

export default PartnersSection;
