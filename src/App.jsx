import React from 'react'
import ReactDOM from "react-dom/client"
import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from './Characters';

function App() {


  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Characters/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
