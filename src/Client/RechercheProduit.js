import React, { useState } from 'react';

const RechercheProduit = () => {
  const [recherche, setRecherche] = useState('');

  const handleRecherche = () => {
    fetch(`/api/recherche-produit?search=${recherche}`)
      .then((response) => response.json())
      .then((data) => {
        // Traitement des résultats de la recherche 
        console.log('Résultats de la recherche:', data);
      })
      .catch((error) => {
        console.error('Erreur lors de la recherche de produits:', error);
      });
  };

  return (
    <div>
      <h2>Recherche de produits</h2>
      <input type="text" value={recherche} onChange={(e) => setRecherche(e.target.value)} />
      <button onClick={handleRecherche}>Rechercher</button>
      {/* Affichez les résultats de la recherche ici */}
    </div>
  );
};

export default RechercheProduit;
