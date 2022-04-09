import React from 'react';
import Hero from '../../assets/hero-icon.png';
import {
  Container,
  Content,
  ImageContainer,
  GradientRight,
  GradientLeft,
  GradientTop,
} from './styled';

const Header = () => (
  <Container className="section__padding" id="home">
    <GradientRight />
    <GradientLeft />
    <GradientTop />
    <Content>
      <h1 className="gradient__text">
        Find the best experience of transaction
      </h1>
      <p>
        We provide you with the easiest futuristic feature and provide you the
        best payment and money management experience. We provide you with the
        easiest futuristic feature.
      </p>
    </Content>

    <ImageContainer>
      <img src={Hero} />
    </ImageContainer>
  </Container>
);

export default Header;
