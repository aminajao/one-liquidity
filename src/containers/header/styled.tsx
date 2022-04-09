import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;
export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 5rem;

  h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 62px;
    line-height: 75px;
    letter-spacing: -0.04em;
    color: #fff !important;
  }
  p {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #fff;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 1050px) {
    margin: 0 0 3rem;
  }

  @media screen and (max-width: 650px) {
    h1 {
      font-size: 48px;
      line-height: 60px;
    }
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 490px) {
    h1 {
      font-size: 36px;
      line-height: 48px;
    }
    p {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const GradientRight = styled.div`
  position: absolute;
  background: #c376ce;
  filter: blur(1000px);
  width: 400px;
  height: 35%;
  right: 0;
  z-index: -1;
`;
export const GradientLeft = styled.div`
  position: absolute;
  max-width: 500px;
  height: 35%;
  left: 0;
  background: #b26af3;
  filter: blur(1000px);
  z-index: -2;
`;
export const GradientTop = styled.div`
  position: absolute;
  width: 500px;
  height: 10%;
  background: #002853;
  filter: blur(564px);
  top: 0;
  z-index: -2;
  right: 40%;
`;
