import React from "react";
import { message } from "antd";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Content from "./components/Content";
import ContactModal from "./components/ContactModal";

import { StyledHome } from "./styles";

const Home = () => {
  const [contactVisible, setContactVisible] = React.useState(false);

  const onContactSubmit = () => {
    message.success("Thanks! We'll be in touch soon.");
  };

  return (
    <>
      <ContactModal
        visible={contactVisible}
        setVisible={setContactVisible}
        onContactSubmit={onContactSubmit}
      />
      <StyledHome>
        <Header setContactVisible={setContactVisible} />
        <Content id="content" />
        <Footer id="footer" />
      </StyledHome>
    </>
  );
};

export default Home;
