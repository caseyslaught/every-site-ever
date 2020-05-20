import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { message } from "antd";

import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";
import Header from "./components/Header";

import About from "./pages/About";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

function App() {
  const [contactVisible, setContactVisible] = React.useState(false);
  const onContactSubmit = () => {
    message.success("Thanks! We'll be in touch soon.");
  };

  return (
    <div className="app">
      <Router>
        <ContactModal
          visible={contactVisible}
          setVisible={setContactVisible}
          onContactSubmit={onContactSubmit}
        />
        <Header setContactVisible={setContactVisible} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer id="footer" />
      </Router>
    </div>
  );
}

export default App;
