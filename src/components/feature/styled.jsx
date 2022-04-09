import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin: 1rem;
  flex: 1;
  margin: 1rem;
  min-width: 210px;
  flex-direction: ${(props) => (props.direction === 'row' ? 'row' : 'column')};

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;
export const Title = styled.div`
  flex: 1;
  max-width: 180px;
  margin-right: 2rem;

  h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.04em;
    color: #fff;
    width: max-content;
  }
  div {
    width: 38px;
    height: 3px;
    background: var(--gradient-bar);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 0.25rem;
  }
`;

export const Text = styled.div`
  flex: 2;
  max-width: 700px;
  display: flex;

  p {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-text);
    margin-top: ${(props) => (props.direction === 'row' ? '0rem' : '1rem')};

    @media screen and (max-width: 850px) {
      margin-top: 1rem;
    }
  }
`;
