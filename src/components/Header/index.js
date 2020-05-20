import React from "react";

import { Button, Drawer, Menu } from "antd";
import {
  InfoCircleOutlined,
  HomeOutlined,
  MenuOutlined,
  SendOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { StyledHeader, StyledHeaderWrapper } from "./styles";
import Logo from "../../assets/images/logo.png";

const DesktopNavbar = ({ setContactVisible }) => {
  return (
    <div className="desktop-menu-wrapper">
      <Menu
        className="desktop-menu"
        mode="horizontal"
        onClick={(e) => console.log(e.key)}
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
      <Button shape="round" onClick={() => setContactVisible(true)}>
        Contact us
      </Button>
    </div>
  );
};

const MobileNavbar = ({ selectedTab, setSelectedTab, setContactVisible }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="mobile-menu-wrapper">
      <Button
        className="mobile-menu-button"
        icon={<MenuOutlined />}
        onClick={() => setMenuOpen((menuOpen) => setMenuOpen(!menuOpen))}
      />

      <Drawer
        title="Acme Inc."
        placement="left"
        closable={true}
        onClose={() => setMenuOpen(false)}
        visible={menuOpen}
        getContainer={false}
        style={{ position: "fixed" }}
      >
        <Menu
          selectedKeys={[selectedTab]}
          mode="vertical"
          style={{ borderRight: "none" }}
          onClick={(e) => {
            console.log(e.key);
            setMenuOpen(false);
          }}
        >
          <Menu.Item icon={<InfoCircleOutlined />} key="about">
            About us
          </Menu.Item>
          <Menu.Item icon={<SettingOutlined />} key="features">
            Features
          </Menu.Item>
          <Menu.Item icon={<HomeOutlined />} key="company">
            Company
          </Menu.Item>
          <Menu.Item
            icon={<SendOutlined />}
            key="company"
            onClick={() => setContactVisible(true)}
          >
            Contact us
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

const Header = ({ setContactVisible }) => {
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
        {isDesktop ? (
          <DesktopNavbar setContactVisible={setContactVisible} />
        ) : (
          <MobileNavbar setContactVisible={setContactVisible} />
        )}
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
