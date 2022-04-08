import React from 'react';
import Hero from '../../assets/hero-icon.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gradient__right" />
    <div className="gradient__left" />
    <div className="gradient__top" />
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Find the best experience of transaction
      </h1>
      <p>
        We provide you with the easiest futuristic feature and provide you the
        best payment and money management experience. We provide you with the
        easiest futuristic feature.
      </p>
    </div>

    <div className="gpt3__header-image">
      <img src={Hero} />
    </div>
  </div>
);

export default Header;
