import React, { useEffect, useState } from 'react';

const ListeProduits = () => {
  const [produits, setProduits] = useState([]);

    useEffect(() => {
  const fetchProduits = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/produits');
      const data = await response.json();
      setProduits(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des produits:', error);
    }
  };
  fetchProduits();
}, []);

  return (
    <div>
      <div>
        {produits.map((produit) => (
          <div key={produit._id}>
            <h3>{produit.nom}</h3>
            <p>Prix : {produit.prix}</p>
            <p>Description : {produit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeProduits;
