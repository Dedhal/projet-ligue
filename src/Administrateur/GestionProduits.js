import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GestionProduits = () => {
  const [produits, setProduits] = useState([]);
  const [nouveauProduit, setNouveauProduit] = useState({
    nom: '',
    description: '',
    prix: 0,
  });
  const [produitsSelectionnes, setProduitsSelectionnes] = useState([]);
  const [produitModifie, setProduitModifie] = useState(null);

  useEffect(() => {
    fetchProduits();
  }, []);

  const fetchProduits = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/produits');
      setProduits(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des produits:', error);
    }
  };

  const ajouterProduit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/produits', nouveauProduit);
      console.log('Nouveau produit ajouté:', response.data);
      fetchProduits();
      setNouveauProduit({
        nom: '',
        description: '',
        prix: 0,
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout du produit:', error);
    }
  };

  const modifierProduit = async (produitId, updatedProduit) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/produits/${produitId}`, updatedProduit);
      console.log('Produit modifié:', response.data);
      fetchProduits();
    } catch (error) {
      console.error('Erreur lors de la modification du produit:', error);
    }
  };

  const supprimerProduit = async (produitId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/produits/${produitId}`);
      console.log('Produit supprimé:', response.data);
      fetchProduits();
    } catch (error) {
      console.error('Erreur lors de la suppression du produit:', error);
    }
  };

  const toggleSelectionProduit = (produitId) => {
    if (produitsSelectionnes.includes(produitId)) {
      setProduitsSelectionnes(produitsSelectionnes.filter((_id) => _id !== produitId));
    } else {
      setProduitsSelectionnes([...produitsSelectionnes, produitId]);
    }
  };

  const supprimerProduitsSelectionnes = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/api/produits', {
        data: produitsSelectionnes,
      });
      console.log('Produits supprimés:', response.data);
      fetchProduits();
      setProduitsSelectionnes([]);
    } catch (error) {
      console.error('Erreur lors de la suppression des produits:', error);
    }
  };
  
  const modifierProduitMode = (produit) => {
    setProduitModifie(produit);
  };

  const annulerModification = () => {
    setProduitModifie(null);
  };

  const enregistrerModification = async (produitId, updatedProduit) => {
    try {
      await modifierProduit(produitId, updatedProduit);
      setProduitModifie(null);
    } catch (error) {
      console.error('Erreur lors de la modification du produit:', error);
    }
  };

  return (
    <div>
      <h2>Gestion des produits</h2>
      <ul>
        {produits.map((produit) => (
          <li key={produit._id}>
           {produitModifie && produitModifie._id === produit._id ? (
      <div>
        <input
          type="text"
          value={produitModifie.nom}
          onChange={(e) => setProduitModifie({ ...produitModifie, nom: e.target.value })}
        />
        <input
          type="text"
          value={produitModifie.description}
          onChange={(e) => setProduitModifie({ ...produitModifie, description: e.target.value })}
        />
        <input
          type="number"
          value={produitModifie.prix}
          onChange={(e) => setProduitModifie({ ...produitModifie, prix: e.target.value })}
        />
        <button onClick={() => enregistrerModification(produit._id, produitModifie)}>Enregistrer</button>
        <button onClick={annulerModification}>Annuler</button>
      </div>
    ) : (
      <div>
        <input
          type="checkbox"
          checked={produitsSelectionnes.includes(produit._id)}
          onChange={() => toggleSelectionProduit(produit._id)}
        />
        {produit.nom} - {produit.description} - {produit.prix}
        <button onClick={() => supprimerProduit(produit._id)}>Supprimer</button>
        <button onClick={() => modifierProduitMode(produit)}>Modifier</button>
      </div>
    )}
          </li>
        ))}
      </ul>

      {produits.length > 0 && (
        <div>
          <button onClick={supprimerProduitsSelectionnes}>Supprimer les produits sélectionnés</button>
        </div>
      )}
      <h3>Ajouter un produit</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        ajouterProduit();
      }}>
        <input
          type="text"
          placeholder="Nom"
          value={nouveauProduit.nom}
          onChange={(e) => setNouveauProduit({ ...nouveauProduit, nom: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={nouveauProduit.description}
          onChange={(e) => setNouveauProduit({ ...nouveauProduit, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Prix"
          value={nouveauProduit.prix}
          onChange={(e) => setNouveauProduit({ ...nouveauProduit, prix: Number(e.target.value) })}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default GestionProduits;
