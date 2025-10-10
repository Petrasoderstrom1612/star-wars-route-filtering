import React from 'react'
import ReactDOM from "react-dom/client"
import './App.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from './Characters';
import IndividualCharacter from './IndividualCharacter';
import CharactersLayout from './CharactersLayout';

function App() {


  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CharactersLayout/>}>
        <Route index element={<Characters/>}/>
        <Route path=":id" element={<IndividualCharacter/>}/> {/* to avoid Outlet I chose not to nest it as a child (but outlet would give me chance to use context and avoid declaring char array twice. I would have Outlet like this in the parent import { Outlet } from "react-router-dom" <Outlet context={{ swCharacters }} />) */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
