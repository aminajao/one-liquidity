import React from 'react';
import { Container, Title, Text } from './styled';

export interface FeatureProps {
  title?: string;
  text?: string;
  direction?: string | null;
}

const Feature = ({ title, text, direction }: FeatureProps) => (
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
