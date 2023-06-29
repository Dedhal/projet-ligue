import React, { useState } from 'react';

import axios from 'axios';

const Panier = () => {
  const [panier, setPanier] = useState([]);

  axios.defaults.headers.common['Authorization'] = sessionStorage.token;

  const handleConfirmerPanier = () => {
    // Vous pouvez utiliser la méthode POST pour envoyer la demande avec les données du panier

    fetch('/api/confirmer-panier', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(panier),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Réponse du backend:', data);
      })
      .catch((error) => {
        console.error('Erreur lors de la confirmation du panier:', error);
      });
  };

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {panier.map((produit) => (
          <li key={produit.id}>{produit.nom}</li>
        ))}
      </ul>
      <button onClick={handleConfirmerPanier}>Confirmer le panier</button>
    </div>
  );
};

export default Panier;