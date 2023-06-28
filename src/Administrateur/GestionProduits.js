import React, { useEffect, useState } from 'react';

const GestionProduits = () => {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await fetch('/api/produits');
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
      <h2>Gestion des produits</h2>
      <ul>
        {produits.map((produit) => (
          <li key={produit.id}>{produit.nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default GestionProduits;
