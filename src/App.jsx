import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from './components/Characters/Characters';
import { Route, Routes } from "react-router-dom";
import Character from './components/Character/Character';
import Header from './components/Header/Header';


function App() {


  return (
  <>
    <div className="Aplicacion">
      <Header />
      <Routes>
        <Route path="/" element={ <Characters/> } />
        <Route path="characters/:id" element={ <Character /> } />
      </Routes>
    </div>
  </>
   
  )

  
}

export default App
