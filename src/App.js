import React from 'react';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className="app">
      <Banner />
      <Content />
    </div>
  );
}

export default App;
