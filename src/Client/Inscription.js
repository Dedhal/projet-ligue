import React, { useState } from 'react';
import axios from 'axios';

const Inscription = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [motdePasse, setMotdePasse] = useState('');

  const handleInscription = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    axios
      .post('http://localhost:5000/api/users/', {
        login: login,
        email: email,
        password: motdePasse,
        role: 0,
      })
      .then(function (response) {
        console.log(response);
        // Gérer l'inscription réussie ici
      })
      .catch(function (error) {
        console.log(error);
        // Gérer l'erreur d'inscription ici
      });
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleInscription}>
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
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default Inscription;
