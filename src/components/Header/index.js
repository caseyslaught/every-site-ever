import React from "react";

import { Dropdown } from "semantic-ui-react";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { StyledHeader, StyledHeaderWrapper } from "./styles";
import Logo from "../../assets/images/logo.png";

const DesktopNavbar = () => {
  return (
    <div className="menu">
      <div className="menu-item">About us</div>
      <div className="menu-item">Features</div>
      <div className="menu-item">Pricing</div>
      <button className="menu-item contact-button">Contact us</button>
    </div>
  );
};

const MobileNavbar = () => {
  return (
    <Dropdown
      icon="bars"
      as="button"
      button
      direction="left"
      className="icon dropdown"
    >
      <Dropdown.Menu>
        <Dropdown.Item text="About us" />
        <Dropdown.Item text="Features" />
        <Dropdown.Item text="Pricing" />
        <Dropdown.Item text="Contact us" />
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Header = () => {
  const { isDesktop } = useWindowDimensions();
  const [isSmall, setIsSmall] = React.useState(false);

  console.log(isDesktop);

  React.useEffect(() => {
    const onScroll = () => setIsSmall(window.pageYOffset > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <StyledHeaderWrapper
      className="header-wrapper"
      isDesktop={isDesktop}
      isSmall={isSmall}
    >
      <StyledHeader className="header" isDesktop={isDesktop} isSmall={isSmall}>
        <img className="logo" src={Logo} alt="company logo" />
        {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
