import React from 'react';

import { Footer, Features, About, Header, ApiUsage } from './containers';
import { Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <Brand />
    </div>
    <div className="what__is">
      <About />
    </div>
    <Features />
    <ApiUsage />
    <Footer />
  </div>
);

export default App;
