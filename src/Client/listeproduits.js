import React, { useEffect, useState } from 'react';

import axios from 'axios';

import RechercheProduits from './RechercheProduit';

const ListeProduits = () => {
  const [produits, setProduits] = useState([]);

  axios.defaults.headers.common['Authorization'] = sessionStorage.token;

  useEffect(() => {
      axios.get('http://localhost:5000/api/produits')
        .then(function (response) {
            setProduits(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);




  return (
    <div>
      <div>
        <RechercheProduit />
      </div>
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
