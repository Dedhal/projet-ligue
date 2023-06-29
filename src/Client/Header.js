import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ utilisateurConnecte }) => {
  const [recherche, setRecherche] = useState('');

  const handleRecherche = (e) => {
    setRecherche(e.target.value);
  };

  return (
    <header>
      <h1>Ligue Sportive</h1>
      <input type="text" placeholder="Rechercher un produit" value={recherche} onChange={handleRecherche} />
      <Link to="/">Accueil</Link>
      <Link to="/connexion">Connexion</Link>
      <Link to="/inscription">Inscription</Link>
      {utilisateurConnecte && <Link to="/modification-informations">Modifier mes informations</Link>}
      <Link to="/panier">Panier</Link>
    </header>
  );
};

export default Header;
