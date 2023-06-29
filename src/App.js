import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './Client/Header';

import ListeProduits from "./Client/listeproduits";
import Connexion from "./Client/connexion";
import Inscription from "./Client/Inscription";
 


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header />

       <Routes>
           <Route exact path="/" element={<ListeProduits />} />
           <Route path="/connexion" element={<Connexion />} />
           <Route path="/inscription" element={<Inscription />} />
       </Routes>
       </header>

    </div>
  );
}

export default App;
