import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Api } from '../Api'; 
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Api> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>}/>

        </Routes>
      </Api>
    </BrowserRouter>
  );
}

export default App;
