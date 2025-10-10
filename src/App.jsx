import React from 'react'
import ReactDOM from "react-dom/client"
import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from './Characters';
import IndividualCharacter from './IndividualCharacter';

function App() {


  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Characters/>}/>
      <Route path="/:id" element={<IndividualCharacter/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
