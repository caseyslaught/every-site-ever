import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  background: white;
  position: fixed;
  top: 0px;
  width: 100%;
  min-width: 336px;
  z-index: 2;

  box-shadow: ${(props) =>
    props.isSmall ? "0 8px 15px -7px rgba(0, 0, 0, 0.2)" : "none"};

  padding: ${(props) => (props.isDesktop ? "5px 80px" : "5px 20px")};
  height: ${(props) => (props.isSmall ? "50px" : "64px")};
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
  justify-content: space-between;

  .logo {
    height: 100%;
    width: auto;
    padding: 3px;
    float: left;
  }

  .header-menu {
    height: 100%;
    float: right;
    margin: 2px 0px 0px 0px !important;
    padding: 0px !important;
  }

  .desktop-menu-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .desktop-menu {
    margin-bottom: 3px;
    border-bottom: none;
    margin-right: 20px;
  }

  .desktop-menu-item {
    height: 100%;
    line-height: ${(props) => (props.isSmall ? "50px" : "64px")};
  }

  .dropdown {
    background: inherit !important;
  }

  .dropdown .icon {
    font-size: 1.5em;
    color: #757575;
  }

  .dropdown-menu {
    padding: 10px 5px !important;
  }

  .dropdown-item {
    padding: 3px;
    color: #555555 !important;
    font-size: 1em !important;
    text-align: right !important;
  }
`;
