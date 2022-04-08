import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import CurlRight from '../../assets/right.svg';
import CurlLeft from '../../assets/curl-left.svg';

const WhatGPT3 = () => (
  <div className="container">
    <div className="curl__right">
      <img src={CurlRight} alt="" />
    </div>
    <div className="curl__left">
      <img src={CurlLeft} alt="" />
    </div>
    <div className="gpt3__whatgpt3 " id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="About One Liquidity"
          text="OneLiquidity is a fiat and crypto liquidity, and trading platform as a service. We work with companies ranging from crypto-native institutions and fintech firms to remove the complexity of building financial platforms from scratch, thereby reducing their time to market."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore API Docs</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Liquidity"
          text="We provide liquidity, KYC/AML checks, digital asset trading/swapping, and more"
        />
        <Feature
          title="KYC/AML checks"
          text="We provide liquidity, KYC/AML checks, digital asset trading/swapping, and more"
        />
        <Feature
          title="Digital asset trading/swapping"
          text="We provide liquidity, KYC/AML checks, digital asset trading/swapping, and more"
        />
      </div>
    </div>
  </div>
);

export default WhatGPT3;
