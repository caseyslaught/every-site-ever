import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  background: ${(props) => (props.isImageLeft ? "#ffffff" : "#f5f5f5")};
`;

export const StyledSection = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  .section-wrapper {
    width: 100%;
    display: flex;

    flex-direction: ${(props) => {
      if (props.isDesktop) {
        return props.isImageLeft ? "row" : "row-reverse";
      } else {
        return "column";
      }
    }};

    justify-content: center;
    align-items: stretch;
  }

  .section-wrapper .image-wrapper {
    width: ${(props) => (props.isDesktop ? "40%" : "100%")};
    padding: 20px;
    text-align: center;
  }
  .section-wrapper .image-wrapper img {
    width: ${(props) => (props.isDesktop ? "80%" : "50%")};
    max-width: 300px;
    height: auto;
  }

  .section-wrapper .text-wrapper {
    width: ${(props) => (props.isDesktop ? "60%" : "100%")};
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .section-wrapper .text-wrapper > div {
    margin-bottom: 20px;
    padding-top: 10px;
    vertical-align: middle;
    text-align: ${(props) => {
      if (props.isDesktop) {
        return props.isImageLeft ? "left" : "right";
      } else {
        return "center";
      }
    }};
  }
`;
