import React from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { StyledFooter, StyledFooterWrapper } from "./styles";

const Footer = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledFooterWrapper isDesktop={isDesktop}>
      <StyledFooter isDesktop={isDesktop}>
        <div className="links-wrapper">
          <div className="footer-group">
            <div className="footer-title">Product</div>
            <a href="/" className="footer-link">
              Cool thing
            </a>
            <a href="/" className="footer-link">
              Amazing stuff
            </a>
            <a href="/" className="footer-link">
              Rad gadget
            </a>
          </div>

          <div className="footer-group">
            <div className="footer-title">Company</div>
            <a href="/" className="footer-link">
              About us
            </a>
            <a href="/" className="footer-link">
              Careers
            </a>
            <a href="/" className="footer-link">
              Pricing
            </a>
          </div>

          <div className="footer-group">
            <div className="footer-title">Support</div>
            <a href="/" className="footer-link">
              Contact us
            </a>
            <a href="/" className="footer-link">
              FAQs
            </a>
            <a href="/" className="footer-link">
              Request a demo
            </a>
          </div>

          <div className="footer-group">
            <div className="footer-title">Legal</div>
            <a href="/" className="footer-link">
              Privacy Policy
            </a>
            <a href="/" className="footer-link">
              Terms of Use
            </a>
          </div>

          <div className="footer-group">
            <div className="footer-title">Social</div>
            <a href="/" className="footer-link">
              <i aria-hidden="true" className="facebook f icon" />
              Facebook
            </a>
            <a href="/" className="footer-link">
              <i aria-hidden="true" className="github icon" />
              Github
            </a>
            <a href="/" className="footer-link">
              <i aria-hidden="true" className="instagram  icon" />
              Instagram
            </a>
            <a href="/" className="footer-link">
              <i aria-hidden="true" className="linkedin icon" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="copyright">
          © 2020 Acme Enterprises, Inc. All Rights Reserved.
        </div>
      </StyledFooter>
    </StyledFooterWrapper>
  );
};

export default Footer;
