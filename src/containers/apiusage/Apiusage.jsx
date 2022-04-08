import React from 'react';
import './apiusage.css';
import CodeSnippet from '../../assets/codesnippet.png';
import { Button } from '../../components';

const ApiUsage = () => (
  <div className="container">
    <div className="gpt3__whatgpt3">
      <div className="gpt3__whatgpt3-heading">
        <div className="left__container">
          <h1 className="gradient__text ">
            The possibilities are beyond your imagination
          </h1>
          <p>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments{' '}
          </p>
          <Button>Get started</Button>
        </div>
        <div className="image__container">
          <img src={CodeSnippet} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default ApiUsage;
