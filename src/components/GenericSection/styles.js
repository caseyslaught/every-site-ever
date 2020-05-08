import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
`;

export const StyledSection = styled.div`
  max-width: 1100px;
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

    align-items: center;
  }

  .image-wrapper {
    text-align: center;
    display: flex;

    margin-left: ${(props) =>
      !props.isImageLeft && props.isDesktop ? "-130px" : "0px"};
    margin-right: ${(props) =>
      props.isImageLeft && props.isDesktop ? "-130px" : "0px"};
    margin-bottom: ${(props) => (props.isDesktop ? "0px" : "-60px")};
    z-index: 1;
  }
  .image-wrapper img {
    width: 300px;
    height: auto;
  }

  .text-wrapper {
    height: 100%;

    padding: ${(props) => {
      if (props.isDesktop) {
        return props.isImageLeft
          ? "60px 20px 60px 160px"
          : "60px 140px 60px 40px";
      } else {
        return "80px 40px 40px 40px";
      }
    }};

    display: flex;
    flex-direction: column;

    border-radius: 8px;
    border-color: #fff;

    background: white;
    border-radius: ${(props) => (props.isDesktop ? "15px" : "0px")};
  }

  .text-wrapper > div {
    margin-bottom: 20px;
    padding-top: 10px;
    vertical-align: middle;
    text-align: ${(props) => (props.isDesktop ? "left" : "center")};
  }
`;
