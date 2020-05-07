import styled from "styled-components";

export const StyledHeroSectionWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  background: white;
`;

export const StyledHeroSection = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  .hero-wrapper {
    width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
    justify-content: center;
    align-items: stretch;
  }

  .hero-wrapper .image-wrapper {
    width: ${(props) => (props.isDesktop ? "50%" : "100%")};
    padding: 20px;
    text-align: center;
  }

  .hero-wrapper .image-wrapper img {
    width: ${(props) => (props.isDesktop ? "80%" : "50%")};
    max-width: 450px;
    height: auto;
  }

  .hero-wrapper .text-wrapper {
    width: ${(props) => (props.isDesktop ? "50%" : "100%")};
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .hero-wrapper .text-wrapper > div {
    flex: 1;
    margin-bottom: 10px;
    padding-top: 10px;
    vertical-align: middle;
    text-align: ${(props) => (props.isDesktop ? "left" : "center")};
  }
`;
