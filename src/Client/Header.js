import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ utilisateurConnecte }) => {
  return (
    <header>
      <h1>Ligue Sportive</h1>

      <Link to="/">Accueil</Link>
      <Link to="/produits">Boutique</Link>
      <Link to="/connexion">Connexion</Link>
      <Link to="/inscription">Inscription</Link>
      <Link to="/admin/users">Gestion des utilisateurs</Link>
      <Link to="/admin/produits">Gestion des produits</Link>
      {utilisateurConnecte && <Link to="/modification-informations">Modifier mes informations</Link>}
      <Link to="/panier">Panier</Link>
    </header>
  );
};

export default Header;
