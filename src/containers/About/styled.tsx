import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 4rem 6rem;

  @media screen and (max-width: 768px) {
    padding: 2rem 4rem;
  }
  @media screen and (max-width: 550px) {
    padding: 2rem 2rem;
  }
`;
export const MainContent = styled.div`
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  background: var(--color-footer);
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

  @media screen and (max-width: 550px) {
    padding: 4rem 1.5rem;
  }
`;

export const Heading = styled.div`
  display: flex;
`;
export const LargeHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0 2rem;

  h1 {
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    font-family: var(--font-family);
    max-width: 510px;
    margin-top: 0rem;
  }
  p {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: var(--color-subtext);
    cursor: pointer;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: flex-start;
    h1 {
      font-size: 28px;
    }
    p {
      width: 100%;
      margin-top: 1rem;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 2rem;
`;

export const StyledCurlRight = styled.div`
  width: 220px;
  height: 400px;
  z-index: 2;
  bottom: 0;
  position: absolute;
  right: 0;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 550px) {
    width: 150px;
    height: 300px;
  }
  @media screen and (max-width: 380px) {
    width: 100px;
  }
`;
export const StyledCurlLeft = styled.div`
  width: 220px;
  height: 400px;
  z-index: 2;
  bottom: 0;
  position: absolute;
  left: 0;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 550px) {
    width: 150px;
    height: 300px;
  }
  @media screen and (max-width: 380px) {
    width: 100px;
  }
`;
