import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  h1 {
    color: #fff;
  }

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

export const FeaturesContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Heading = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 990px) {
    margin: 1rem 0 2rem 0;
  }
`;
