import React from 'react';
import {
  ImageContainer,
  Heading,
  Container,
  LeftContainer,
} from './styled';
import CodeSnippet from '../../assets/codesnippet.png';
import { Button } from '../../components';

const ApiUsage = () => (
  <Container>
    <div className="gpt3__whatgpt3">
      <Heading>
        <LeftContainer>
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments{' '}
          </p>
          <Button>Get started</Button>
        </LeftContainer>
        <ImageContainer>
          <img src={CodeSnippet} />
        </ImageContainer>
      </Heading>
    </div>
  </Container>
);

export default ApiUsage;
