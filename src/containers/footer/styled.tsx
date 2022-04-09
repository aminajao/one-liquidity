import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  background: var(--color-footer);
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
  text-align: left;

  div {
    width: 250px;
    margin: 1rem;

    @media screen and (max-width: 550px) {
      margin: 1rem 0;
    }
  }
`;

export const FooterLinksLogo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: var(--font-family);
    font-size: 12px;
    line-height: 15px;
    color: #fff;
  }
`;

export const FooterLinksDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  h4 {
    font-size: 14px;
    line-height: 17px;
    font-family: var(--font-family);
    color: #fff;
    margin-bottom: 0.9rem;
  }
  p {
    font-size: 12px;
    line-height: 15px;
    font-family: var(--font-family);
    color: #fff;
    margin: 0.5rem 0;
    cursor: pointer;
  }
`;

export const Copyright = styled.div`
  margin-top: 2rem;
  text-align: center;
  width: 100%;

  p {
    font-size: 12px;
    font-family: var(--font-family);
    line-height: 15px;
    color: #fff;
  }
`;
