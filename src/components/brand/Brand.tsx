import React from 'react';
import styled from 'styled-components';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => (
  <BrandContainer className=" section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </BrandContainer>
);

export default Brand;

const BrandContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 0px;
  justify-content: center;
  align-items: center;

  div {
    flex: 1;
    max-width: 150px;
    min-width: 120px;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
