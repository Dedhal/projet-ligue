import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './Client/Header';
import Accueil from './Client/Accueil';
import Connexion from './Client/connexion';
import Inscription from './Client/Inscription';
import ListeProduits from './Client/listeproduits';
import ModificationInformations from './Client/ModificationInformations';
import Panier from './Client/Pannier';
import GestionsUsers from './Administrateur/GestionsUsers';
import GestionProduits from './Administrateur/GestionProduits';

const App = () => {
  const utilisateurConnecte = true; // Mettre à jour cette valeur en fonction de l'état de connexion de l'utilisateur
  return (
    
      <div className="App">

      <Header utilisateurConnecte={utilisateurConnecte} />

      <Routes>
        
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="/connexion" element={<Connexion />} />
        <Route exact path="/inscription" element={<Inscription />} />
        <Route exact path="/produits" element={<ListeProduits />} />
        <Route exact path="/modification-informations" element={<ModificationInformations />} />
        <Route exact path="/panier" element={<Panier />} />
        <Route exact path="/admin/users" element={<GestionsUsers />} />
        <Route exact path="/admin/produits" element={<GestionProduits />} />

    </Routes>

    </div>
  );
};

export default App;
