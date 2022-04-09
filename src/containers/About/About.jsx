import React from 'react';
import Feature from '../../components/feature/Feature';
import {
  Container,
  MainContent,
  StyledCurlLeft,
  StyledCurlRight,
  LargeHeading,
  Heading,
  ContentContainer,
} from './styled';
import CurlRight from '../../assets/right.svg';
import CurlLeft from '../../assets/curl-left.svg';

const data = [
  {
    title: 'Liquidity',
    text: 'We provide liquidity, KYC/AML checks, digital asset trading/swapping, and more',
  },
  {
    title: 'KYC/AML checks',
    text: 'We provide liquidity, KYC/AML checks, digital asset trading/swapping, and more',
  },
  {
    title: 'Digital asset trading/swapping',
    text: 'We provide liquidity, KYC/AML checks, digital asset trading/swapping, and more',
  },
];
const about = {
  title: 'About One Liquidity',
  text: 'OneLiquidity is a fiat and crypto liquidity, and trading platform as a service. We work with companies ranging from crypto-native institutions and fintech firms to remove the complexity of building financial platforms from scratch, thereby reducing their time to market.',
};

const About = () => (
  <Container>
    <StyledCurlRight>
      <img src={CurlRight} alt="vector icon" />
    </StyledCurlRight>
    <StyledCurlLeft>
      <img src={CurlLeft} alt="vector icon" />
    </StyledCurlLeft>
    <MainContent id="wgpt3">
      <Heading>
        <Feature direction="row" title={about.title} text={about.text} />
      </Heading>
      <LargeHeading>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore API Docs</p>
      </LargeHeading>
      <ContentContainer>
        {data?.map(({ title, text }) => (
          <Feature title={title} text={text} />
        ))}
      </ContentContainer>
    </MainContent>
  </Container>
);

export default About;
