import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Panier = () => {
  const [panier, setPanier] = useState([]);
  const [prixTotal, setPrixTotal] = useState(0); // Ajout de l'état pour le prix total du panier

  useEffect(() => {
    // Calcul du prix total à partir du panier
    const calculerPrixTotal = () => {
      let total = 0;
      panier.forEach((produit) => {
        total += produit.prix * produit.quantite;
      });
      setPrixTotal(total);
    };

    calculerPrixTotal();
  }, [panier]);

  axios.defaults.headers.common['Authorization'] = sessionStorage.token;

  const handleConfirmerPanier = () => {
    // Envoi du panier au backend pour confirmation
    fetch('http://localhost:5000/api/confirmer-panier', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(panier),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Réponse du backend:', data);
        // Vider le panier après confirmation
        setPanier([]);
      })
      .catch((error) => {
        console.error('Erreur lors de la confirmation du panier:', error);
      });
  };

  const handleSupprimerProduit = (id) => {
    // Supprimer un produit du panier
    const nouveauPanier = panier.filter((produit) => produit.id !== id);
    setPanier(nouveauPanier);
  };

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {panier.map((produit) => (
          <li key={produit.id}>
            {produit.nom} - Quantité : {produit.quantite} - Prix : {produit.prix}
            <button onClick={() => handleSupprimerProduit(produit.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Prix total : {prixTotal}</p> {/* Affichage du prix total */}
      <button onClick={handleConfirmerPanier}>Confirmer le panier</button>
    </div>
  );
};

export default Panier;
