import React from "react";

import { Button, Menu } from "antd";

import { Dropdown } from "semantic-ui-react";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { StyledHeader, StyledHeaderWrapper } from "./styles";
import Logo from "../../assets/images/logo.png";

const DesktopNavbar = () => {
  const selectedTab = null;
  return (
    <div className="desktop-menu-wrapper">
      <Menu
        className="desktop-menu"
        mode="horizontal"
        onClick={(e) => console.log("setSelectedTab(e.key)")}
      >
        <Menu.Item className="desktop-menu-item" key="about">
          About us
        </Menu.Item>
        <Menu.Item className="desktop-menu-item" key="features">
          Features
        </Menu.Item>
        <Menu.Item className="desktop-menu-item" key="company">
          Company
        </Menu.Item>
      </Menu>
      <Button shape="round">Contact us</Button>
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
      className="icon dropdown header-menu"
    >
      <Dropdown.Menu className="dropdown-menu">
        <Dropdown.Item className="dropdown-item" text="About us" />
        <Dropdown.Divider />
        <Dropdown.Item className="dropdown-item" text="Features" />
        <Dropdown.Divider />
        <Dropdown.Item className="dropdown-item" text="Contact us" />
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Header = () => {
  const { isDesktop } = useWindowDimensions();
  const [isSmall, setIsSmall] = React.useState(false);

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
