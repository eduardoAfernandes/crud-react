import React from 'react';
import Navbar from './components/navbar';
import Rotas from './rotas';
import { BrowserRouter,  } from 'react-router-dom';

export default function App() {
  return (
    <>
        <BrowserRouter>      
        <div className="container-fluid">
            <Navbar/>
            <Rotas />
          </div>
        </BrowserRouter>
  
    </>
  );
}
