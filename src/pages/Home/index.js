import React from "react";

import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

import { StyledHome } from "./styles";

const Home = () => {
  return (
    <StyledHome>
      <Header />
      <Content id="content" />
      <Footer id="footer" />
    </StyledHome>
  );
};

export default Home;
