import React, { useEffect, useState } from 'react';
import axios from 'axios'

const GestionUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userModifie, setUserModifie] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
    }
  };

  const supprimerUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedUsers),
      });
      const data = await response.json();
      console.log('Utilisateurs supprimés:', data);
      fetchUsers();
      setSelectedUsers([]);
    } catch (error) {
      console.error('Erreur lors de la suppression des utilisateurs:', error);
    }
  };

  const gererDroits = async (userId, droits) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ droits }),
      });
      const data = await response.json();
      console.log('Droits d\'utilisateur mis à jour:', data);
      fetchUsers();
    } catch (error) {
      console.error('Erreur lors de la mise à jour des droits de l\'utilisateur:', error);
    }
  };

  const modifierUser = (userId) => {
    const userAModifier = users.find((user) => user._id === userId);
    setUserModifie(userAModifier);
  };

  const annulerModification = () => {
    setUserModifie(null);
  };

  const enregistrerModification = async (userId, nomModifie, prenomModifie) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom: nomModifie, prenom: prenomModifie }),
      });
      const data = await response.json();
      console.log('Utilisateur modifié:', data);
      fetchUsers();
      setUserModifie(null);
    } catch (error) {
      console.error('Erreur lors de la modification de l\'utilisateur:', error);
    }
  };

  const toggleUserSelection = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  return (
    <div>
      <h2>Gestion des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {userModifie && userModifie._id === user._id ? (
              <div>
                <input type="text" value={userModifie.nom} onChange={(e) => setUserModifie({ ...userModifie, nom: e.target.value })} />
                <input type="text" value={userModifie.prenom} onChange={(e) => setUserModifie({ ...userModifie, prenom: e.target.value })} />
                <button onClick={() => enregistrerModification(user.id, userModifie.nom, userModifie.prenom)}>Enregistrer</button>
                <button onClick={annulerModification}>Annuler</button>
              </div>
            ) : (
              <div>
                <input type="checkbox" checked={selectedUsers.includes(user._id)} onChange={() => toggleUserSelection(user._id)} />
                {user.nom} {user.prenom} - Droits : {user.droits}
                <button onClick={() => gererDroits(user._id, 'administrateur')}>Donner droits administrateur</button>
                <button onClick={() => gererDroits(user._id, 'utilisateur')}>Donner droits utilisateur</button>
                <button onClick={() => modifierUser(user._id)}>Modifier</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      {selectedUsers.length > 0 && (
        <button onClick={supprimerUsers}>Supprimer les utilisateurs sélectionnés</button>
      )}
    </div>
  );
};

export default GestionUsers;
