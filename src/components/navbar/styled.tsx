import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;

  @media screen and (max-width: 700px) {
    padding: 2rem 4rem;
  }
  @media screen and (max-width: 550px) {
    padding: 2rem;
  }
`;
export const NavbarLinks = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const NavbarLogo = styled.div`
  margin-right: 2rem;

  h1 {
    color: #fff;
    font-family: var(--font-family);
    font-size: 22px;
    font-weight: 600;
  }
`;

export const NavbarLinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  p {
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }
}

`;
export const SignIn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    text-transform: capitalize;
    margin: 0 1rem;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`;
export const NavbarMenu = styled.div`
  margin-left: 1rem;
  display: none;
  position: relative;
  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 1050px) {
    display: flex;
  }
}
`;
