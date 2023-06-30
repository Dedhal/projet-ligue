import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Panier = () => {
  const [panier, setPanier] = useState([]);
  const [prixTotal, setPrixTotal] = useState(0); // Ajout de l'état pour le prix total du panier




  useEffect(() => {
    var tmp = [];

    axios.get('http://localhost:5000/api/produits')
    .then(function(response) { 
        console.log(response.data) 
        response.data.map((produit) => {
            if(localStorage.getItem(produit._id)){
                tmp = [...tmp, {id: produit._id, nom: produit.nom, prix: produit.prix, quantite: localStorage.getItem(produit._id)}]
                return true;
            }
            return false;
        })

        setPanier(tmp)
    }).catch();
  }, [])


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
    localStorage.clear();
  };

  const handleSupprimerProduit = (id) => {
    // Supprimer un produit du panier
    localStorage.removeItem(id);
    const nouveauPanier = panier.filter((produit) => produit.id !== id);
    setPanier(nouveauPanier);
  };

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {
          panier.map((produit) => (
          <li key={produit.id}>
            {produit.nom} - Quantité : {produit.quantite} - Prix : {produit.prix}
            <button type="button" id="delete" onClick={() => handleSupprimerProduit(produit.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Prix total : {prixTotal}</p> {/* Affichage du prix total */}
      <button onClick={handleConfirmerPanier}>Confirmer le panier</button>
    </div>
  );
};

export default Panier;
