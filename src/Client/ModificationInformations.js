import React, { useState } from 'react';
import axios from 'axios';

const ModificationInformations = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [motdePasse, setMotdePasse] = useState('');

  const handleModificationInformations = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    axios
      .put('http://localhost:5000/api/users/', {
        login: login,
        email: email,
        password: motdePasse,
      })
      .then(function (response) {
        console.log(response);
        // Gérer la modification réussie ici
      })
      .catch(function (error) {
        console.log(error);
        // Gérer l'erreur de modification ici
      });
  };

  return (
    <div>
      <h1>Modification des informations personnelles</h1>
      <form onSubmit={handleModificationInformations}>
        <label>
          Nom :
          <input type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} />
        </label>
        <label>
          Email
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Mot de passe
          <input
            type="password"
            name="password"
            value={motdePasse}
            onChange={(e) => setMotdePasse(e.target.value)}
          />
        </label>
        <button type="submit">Modifier mes informations</button>
      </form>
    </div>
  );
};

export default ModificationInformations;
