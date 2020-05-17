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

  padding: 5px;

  display: flex;
  justify-content: space-between;

  .logo {
    height: 100%;
    width: auto;
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

  .mobile-menu-wrapper {
    height: 100%;
  }

  .mobile-menu-button {
    height: 100%;
    border: none;
  }

  .mobile-menu-button span {
    font-size: ${(props) => (props.isShrunk ? "1.4em" : "1.5em")};
  }
`;
