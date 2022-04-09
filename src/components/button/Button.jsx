import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;

const StyledButton = styled.button`
  background: #ae67fa;
  border-radius: 5px;
  padding: 12px 24px;
  border: 0px;
  color: #fff;
  font-size: 16px;
  cursor: pointer !important;
  font-family: inherit;
  font-family: var(--font-family);
  font-weight: 500;
`;
