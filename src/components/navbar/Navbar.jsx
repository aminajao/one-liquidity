import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import Button from '../button/Button';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <h1 className="logo">One Liquidity</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Documentation</a>
          </p>
          <p>
            <a href="#wgpt3">Developers</a>
          </p>
          <p>
            <a href="#possibility">Pricing</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          {/* <p>
            <a href="#blog">Library</a>
          </p> */}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <Button>Sign up</Button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
