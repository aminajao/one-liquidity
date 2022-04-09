import React from 'react';
import Feature from '../../components/feature/Feature';
import { Container, Heading, FeaturesContainer } from './styled';
import Illustration from '../../assets/illustration.svg';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <Container className="section__padding" id="features">
    {/* <h1>Features</h1> */}
    <FeaturesContainer>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </FeaturesContainer>
    <Heading>
      <img src={Illustration} />
    </Heading>
  </Container>
);

export default Features;
