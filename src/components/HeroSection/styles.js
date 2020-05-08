import styled from "styled-components";

export const StyledHeroSectionWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  background: white;
`;

export const StyledHeroSection = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  .hero-wrapper {
    width: 100%;
    display: flex;
    flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
    justify-content: center;
    align-items: stretch;
  }

  .image-wrapper {
    width: ${(props) => (props.isDesktop ? "50%" : "100%")};
    padding: 10px;
    text-align: center;
  }

  .image-wrapper img {
    width: ${(props) => (props.isDesktop ? "70%" : "60%")};
    max-width: 450px;
    height: auto;
  }

  .text-wrapper {
    width: ${(props) => (props.isDesktop ? "50%" : "100%")};
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .text-wrapper .header-text {
    font-size: ${(props) => (props.isDesktop ? "3em" : "2em")};
    line-height: normal;
    font-weight: lighter;
  }

  .text-wrapper > div {
    flex: 1;
    margin-bottom: 10px;
    padding-top: 10px;
    vertical-align: middle;
    text-align: ${(props) => (props.isDesktop ? "left" : "center")};
  }
`;
