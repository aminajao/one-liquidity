import React from 'react';
import {
  Container,
  FooterLinks,
  Copyright,
  FooterLinksDiv,
  FooterLinksLogo,
} from './styled';

const Footer = () => (
  <Container className="section__padding">
    <FooterLinks className="">
      <FooterLinksLogo>
        <h3 className="logo">One Liquidity</h3>
        <p>
          <br /> All Rights Reserved
        </p>
      </FooterLinksLogo>
      <FooterLinksDiv>
        <h4>About</h4>
        <p>Developers</p>
        <p>Social media</p>
        <p>Case studies</p>
      </FooterLinksDiv>
      <FooterLinksDiv>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Careers</p>
        <p>Contacts</p>
      </FooterLinksDiv>
      <FooterLinksDiv>
        <h4>Get in touch</h4>
        <p>One Liquidity Dubai, UAE</p>
        <p>+2348125306468</p>
        <p>info@oneliquidity.com</p>
      </FooterLinksDiv>
    </FooterLinks>

    <Copyright>
      <p>@2021 One Liquidity. All rights reserved.</p>
    </Copyright>
  </Container>
);

export default Footer;
