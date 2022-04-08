import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h3 className="logo">One Liquidity</h3>
        <p>
          <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>About</h4>
        <p>Developers</p>
        <p>Social media</p>
        <p>Case studies</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Careers</p>
        <p>Contacts</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>One Liquidity Dubai, UAE</p>
        <p>+2348125306468</p>
        <p>info@oneliquidity.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 One Liquidity. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
