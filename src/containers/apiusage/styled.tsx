import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem 6rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 680px) {
    padding: 4rem;
  }
  @media screen and (max-width: 550px) {
    padding: 4rem 2rem;
  }
`;
export const Heading = styled.div`
  border-radius: 32px;
  padding: 3rem 4rem;
  background: -moz-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );
  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );
  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );
  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );
  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0rem 0 0rem;

  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0rem;
    padding: 5rem 3rem;

    p {
      margin-top: 1rem;
    }
  }
  @media screen and (max-width: 650px) {
    h1 {
      font-size: 28px;
      line-height: 40px;
    }
  }
  @media screen and (max-width: 650px) {
    padding: 4rem 2rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    font-family: var(--font-family);
    max-width: 510px;
    margin-bottom: 1rem;
  }

  p {
    font-family: var(--font-family);
    color: #81afdd;
    line-height: 30px;
    margin-bottom: 1rem;
  }
`;

export const ImageContainer = styled.div`
  width: 550px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    height: 100%;
    margin-top: 2rem;
  }
`;
