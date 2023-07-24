import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home/Home'
import Unidades from './Pages/Unidades/Unidades';
import Cadastro from './Pages/Cadastro/Cadastro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/unidades' element={<Unidades/>}/>
      <Route path='/sejaHYPER' element={<Cadastro/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

