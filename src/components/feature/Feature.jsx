import React from 'react';
import { Container, Title, Text } from './styled';

const Feature = ({ title, text, direction }) => (
  <Container direction={direction}>
    <Title>
      <div />
      <h1>{title}</h1>
    </Title>
    <Text direction={direction}>
      <p>{text}</p>
    </Text>
  </Container>
);

export default Feature;
