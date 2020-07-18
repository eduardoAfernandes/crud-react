import React from 'react';
import Navbar from './components/navbar';
import Rotas from './rotas';
export default function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar/>
        <Rotas />
      </div>
    </>
  );
}
