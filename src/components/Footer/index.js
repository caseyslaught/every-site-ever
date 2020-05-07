import React from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { StyledFooter, StyledFooterWrapper } from "./styles";

const Footer = () => {
  const { isDesktop } = useWindowDimensions();

  return (
    <StyledFooterWrapper isDesktop={isDesktop}>
      <StyledFooter isDesktop={isDesktop}>
        <div className="links-wrapper">
          <div class="footer-group">
            <div class="footer-title">Product</div>
            <a href="/" class="footer-link">
              Cool thing
            </a>
            <a href="/" class="footer-link">
              Amazing stuff
            </a>
            <a href="/" class="footer-link">
              Rad gadget
            </a>
          </div>

          <div class="footer-group">
            <div class="footer-title">Company</div>
            <a href="/" class="footer-link">
              About us
            </a>
            <a href="/" class="footer-link">
              Careers
            </a>
            <a href="/" class="footer-link">
              Pricing
            </a>
          </div>

          <div class="footer-group">
            <div class="footer-title">Support</div>
            <a href="/" class="footer-link">
              Contact us
            </a>
            <a href="/" class="footer-link">
              FAQs
            </a>
            <a href="/" class="footer-link">
              Request a demo
            </a>
          </div>

          <div class="footer-group">
            <div class="footer-title">Legal</div>
            <a href="/" class="footer-link">
              Privacy Policy
            </a>
            <a href="/" class="footer-link">
              Terms of Use
            </a>
          </div>

          <div class="footer-group">
            <div class="footer-title">Social</div>
            <a href="/" class="footer-link">
              <i aria-hidden="true" class="facebook f icon" />
              Facebook
            </a>
            <a href="/" class="footer-link">
              <i aria-hidden="true" class="github icon" />
              Github
            </a>
            <a href="/" class="footer-link">
              <i aria-hidden="true" class="instagram  icon" />
              Instagram
            </a>
            <a href="/" class="footer-link">
              <i aria-hidden="true" class="linkedin icon" />
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
