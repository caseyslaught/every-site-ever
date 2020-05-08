import styled from "styled-components";

export const StyledFooterWrapper = styled.div`
  background: white;
  min-height: 200px;
  width: 100%;
`;

export const StyledFooter = styled.div`
  height: 100%;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  padding: ${(props) => (props.isDesktop ? "20px 40px 60px 40px" : "20px")};

  .links-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .copyright {
    text-align: center;
    color: #999999;
    font-size: 1em;
  }

  .footer-group {
    padding: ${(props) => (props.isDesktop ? "30px" : "20px")};
  }

  .footer-link {
    display: block;
    color: #999999;
    margin-bottom: 5px;
  }

  .footer-title {
    font-size: 1.2em;
    line-height: normal;
    font-weight: lighter;
    margin-bottom: 10px;
  }
`;
