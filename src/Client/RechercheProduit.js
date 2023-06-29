import React, { useState } from 'react';

const RechercheProduit = () => {
  const [recherche, setRecherche] = useState('');
  const [resultats, setResultats] = useState([]);

  const handleRecherche = () => {
    fetch(`http://localhost:5000/api/recherche-produit?search=${recherche}`)
      .then((response) => response.json())
      .then((data) => {
        setResultats(data);
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

      {resultats.length > 0 && (
        <div>
          <h3>Résultats de la recherche :</h3>
          <ul>
            {resultats.map((produit) => (
              <li key={produit.id}>{produit.nom}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RechercheProduit;
