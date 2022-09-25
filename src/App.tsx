import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Products from './components/Products/Products'
import SortBar from './components/SortBar/SortBar'
import Footer from './components/Footer/Footer'
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='mainPage'>
        <SortBar />
          <Routes>
              <Route path="*" element={<Navigate to="/сategory/1/Post" replace />}/>
              <Route path={'/сategory/:id'} element={<Products />} />
              <Route path={'/сategory/:id/Post'} element={<Products />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
