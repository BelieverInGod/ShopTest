import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Products from './components/Products/Products'
import SortBar from './components/SortBar/SortBar'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <SortBar />
      <Footer />
    </div>
  );
}

export default App;
