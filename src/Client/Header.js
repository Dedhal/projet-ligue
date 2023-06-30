import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import decodeToken from '../Helpers/decodeToken';

const Header = () => {

  return (
    <header>
      <h1>Ligue Sportive</h1>

      <Link to="/">Accueil</Link>
      <Link to="/produits">Boutique</Link>
      {
          decodeToken().role ? <Link to="/connexion">Connexion</Link> : <span />
          }
      <Link to="/inscription">Inscription</Link>
      {
          decodeToken().role === 1 && 
          <Link to="/admin/users">Gestion des utilisateurs</Link>
      }
      {
          decodeToken().role === 1 && 
          <Link to="/admin/produits">Gestion des produits</Link>
      }
      {
          decodeToken().role >= 0 && 
          <Link to="/modification-informations">Modifier mes informations</Link>
      }
      <Link to="/panier">Panier</Link>
    </header>
  );
};

export default Header;
