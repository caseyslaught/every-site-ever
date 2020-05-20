import styled from "styled-components";

export const StyledPartnersSectionWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const StyledPartnersSection = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .partners-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .image-wrapper {
    margin: 20px;
    height: ${(props) => (props.isDesktop ? "100px" : "80px")};
  }

  .image-wrapper img {
    width: auto;
    height: 100%;
    filter: brightness(120%);
  }

  .bottom-text {
    width: 80%;
    max-width: 500px;
  }

  h4 {
    color: #555555;
    overflow: hidden;
    text-align: center;
  }

  h4:before,
  h4:after {
    background-color: #555555;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  h4:before {
    right: 0.5em;
    margin-left: -50%;
  }

  h4:after {
    left: 0.5em;
    margin-right: -50%;
  }
`;
