import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//impotaciones pata paginas de rutas son para cargar las vistas 
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Inicio from './pages/inicio/Inicio';
import Iniciarsesion from './pages/iniciarsesion/Iniciarsesion';
import Nuevoregistro from './pages/nuevoregistro/Nuevoregistro';
import Dashboard from './pages/dashboard/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Inicio />}/>
                  <Route path='/Iniciarsesion' element={<Iniciarsesion/>}/>
                  <Route path='/Nuevoregistro' element={<Nuevoregistro/>}/>
                  <Route path='/Dashboard' element={<Dashboard/>}/>
              </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
