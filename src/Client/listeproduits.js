import React, { useEffect, useState } from 'react';

import axios from 'axios';

import RechercheProduit from './RechercheProduit';

const ListeProduits = () => {
  const [produits, setProduits] = useState([]);
  const [quantite, setQuantite] = useState([]);
  const [panier, setPanier] = useState({});

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

    const handleChange = (id, e) => {
        console.log(id);
        console.log(e);
        if(quantite.length > 0){
            quantite.map((q) => {
                if(q.id === id){
                    q.quantite = e.target.value;
                    return null;
                }
            })

            setQuantite([...quantite, {id: e.target.value}])
            
            
        }
        else {
            setQuantite([...quantite, {id: id, quantite: e.target.value}])
        }
        

        }

    const getQuantite = (id) => {
        quantite.map((q) => {
            if(q.id === id){
                return q.quantite;
            }
        })
    }

    const handleAjouterProduit = (produitId, e) => {
        console.log(produitId);
        console.log(e.target.quantite.value);

        if(localStorage.getItem(produitId)){
            localStorage.setItem(produitId, parseInt(localStorage.getItem(produitId)) + parseInt(e.target.quantite.value));
        }
        else {
        localStorage.setItem(produitId, e.target.quantite.value);
        }
   }


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

            <form onSubmit={(e) => handleAjouterProduit(produit._id, e)}>
                <input 
                    name="quantite"
                    type="number"
                    placeholder="Quantité"
                    value={getQuantite(produit._id)}
                    onChange={(e) => handleChange( produit._id, e )}
                />
                <button type="submit">Ajouter</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListeProduits;
