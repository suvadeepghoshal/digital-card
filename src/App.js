import React from 'react';
import './App.css';
import { Banner } from './components/Banner/Banner';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-slate-100 p-8 dark:bg-slate-800">
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
