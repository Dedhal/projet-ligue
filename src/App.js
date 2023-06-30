import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './Client/Header';
import Accueil from './Client/Accueil';
import Connexion from './Client/connexion';
import Inscription from './Client/Inscription';
import ListeProduits from './Client/listeproduits';
import ModificationInformations from './Client/ModificationInformations';
import Panier from './Client/Pannier';

const App = () => {
  const utilisateurConnecte = true; // Mettre à jour cette valeur en fonction de l'état de connexion de l'utilisateur
  return (
    <Router>
      <div className="App">
        <Header utilisateurConnecte={utilisateurConnecte} />
        <Route exact path="/" component={Accueil} />
        <Route exact path="/connexion" component={Connexion} />
        <Route exact path="/inscription" component={Inscription} />
        <Route exact path="/produits" component={ListeProduits} />
        <Route exact path="/modification-informations" component={ModificationInformations} />
        <Route exact path="/panier" component={Panier} />
      </div>
    </Router>
  );
};

export default App;
