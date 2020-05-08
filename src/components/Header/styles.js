import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  background: white;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;

  box-shadow: ${(props) =>
    props.isSmall ? "0 8px 15px -7px rgba(0, 0, 0, 0.2)" : "none"};

  padding: ${(props) => (props.isDesktop ? "5px 80px" : "5px 20px")};
  height: ${(props) => (props.isSmall ? "40px" : "64px")};
  border-bottom: ${(props) => (props.isSmall ? "1px solid #fafafa" : "none")};

  transition: all 250ms ease;
`;

export const StyledHeader = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    height: ${(props) => (props.isDesktop ? "80%" : "70%")};
    width: auto;
  }

  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .menu-item {
    margin-left: 20px;
    color: #555555;
    font-size: 1.2em;
  }

  .contact-button {
    border: solid #a333c8;
    border-width: ${(props) => (props.isSmall ? "0px" : "1px")};
    border-radius: 3px;
    background-color: transparent;
    color: #a333c8;
    padding: 5px 8px;
    font-size: 1.2em;
  }

  .dropdown {
    background: inherit !important;
  }

  .dropdown .icon {
    font-size: 1.5em;
    color: #757575;
  }
`;
