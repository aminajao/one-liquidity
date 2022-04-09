import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {
  Navbar as NavBar,
  NavbarLinks,
  NavbarLinksContainer,
  NavbarLogo,
  NavbarMenu,
  SignIn,
} from './styled';
import Button from '../button/Button';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <NavBar>
      <NavbarLinks>
        <NavbarLogo>
          <h1>One Liquidity</h1>
        </NavbarLogo>
        <NavbarLinksContainer>
          <p>
            <a href="/">Documentation</a>
          </p>
          <p>
            <a href="/">Developers</a>
          </p>
          <p>
            <a href="/">Pricing</a>
          </p>
          <p>
            <a href="/">Case Studies </a>
          </p>
        </NavbarLinksContainer>
      </NavbarLinks>
      <SignIn>
        <p>Sign in</p>
        <Button>Sign up</Button>
      </SignIn>
      <NavbarMenu>
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
      </NavbarMenu>
    </NavBar>
  );
};

export default Navbar;
