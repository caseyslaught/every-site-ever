import React from "react";
import { Link } from "react-router-dom";

import { Button, Drawer, Menu } from "antd";
import {
  DollarOutlined,
  InfoCircleOutlined,
  MenuOutlined,
  SendOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import useWindowDimensions from "../../hooks/useWindowDimensions";
import { StyledHeader, StyledHeaderWrapper } from "./styles";
import Logo from "../../assets/images/logo.png";

const DesktopNavbar = ({
  menuItems,
  selectedKey,
  setSelectedKey,
  setContactVisible,
}) => {
  return (
    <div className="desktop-menu-wrapper">
      <Menu
        className="desktop-menu"
        mode="horizontal"
        selectedKeys={[selectedKey]}
        onClick={(e) => setSelectedKey(e.key)}
      >
        {menuItems.map((item) => (
          <Menu.Item className="desktop-menu-item" key={item.key}>
            <Link to={item.path}>{item.text}</Link>
          </Menu.Item>
        ))}
      </Menu>
      <Button shape="round" onClick={() => setContactVisible(true)}>
        Contact us
      </Button>
    </div>
  );
};

const MobileNavbar = ({
  menuItems,
  selectedKey,
  setSelectedKey,
  setContactVisible,
}) => {
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
          mode="vertical"
          selectedKeys={[selectedKey]}
          style={{ borderRight: "none" }}
          onClick={(e) => {
            setMenuOpen(false);
            setSelectedKey(e.key);
          }}
        >
          {menuItems.map((item) => (
            <Menu.Item icon={item.icon} key={item.key}>
              <Link to={item.path}>{item.text}</Link>
            </Menu.Item>
          ))}
          <Menu.Item
            icon={<SendOutlined />}
            key="contact"
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
  const [selectedKey, setSelectedKey] = React.useState();

  React.useEffect(() => {
    const onScroll = () => setIsSmall(window.pageYOffset > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    {
      icon: <InfoCircleOutlined />,
      key: "about",
      path: "/about",
      text: "About us",
    },
    {
      icon: <SettingOutlined />,
      key: "features",
      path: "/features",
      text: "Features",
    },
    {
      icon: <DollarOutlined />,
      key: "pricing",
      path: "/pricing",
      text: "Pricing",
    },
  ];

  return (
    <StyledHeaderWrapper
      className="header-wrapper"
      isDesktop={isDesktop}
      isSmall={isSmall}
    >
      <StyledHeader className="header" isDesktop={isDesktop} isSmall={isSmall}>
        <Link className="logo-wrapper" to="/">
          <img
            className="logo"
            src={Logo}
            alt="company logo"
            onClick={() => setSelectedKey(null)}
          />
        </Link>
        {isDesktop ? (
          <DesktopNavbar
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
            setContactVisible={setContactVisible}
            menuItems={menuItems}
          />
        ) : (
          <MobileNavbar
            selectedKey={selectedKey}
            setSelectedKey={setSelectedKey}
            setContactVisible={setContactVisible}
            menuItems={menuItems}
          />
        )}
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
