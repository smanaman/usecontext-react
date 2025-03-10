import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Api } from '../Api';
import About from './pages/About';
import Todo from './pages/Todo';
import { CurdProvider } from '../Crudprovider';
import Edit from './pages/Edit';

function App() {
  return (
    <BrowserRouter>
      <Api>
        <CurdProvider>
          <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/edititem' element={<Edit />} />

          </Routes>
        </CurdProvider>
      </Api>
    </BrowserRouter>
  );
}

export default App;
