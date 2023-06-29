import React, { useState } from 'react';
import axios from 'axios';

const Connexion = () => {
    const [email, setEmail] = useState('');
    const [motdePasse, setMotdePasse] = useState('');


    const handleConnexion = () => {
        axios.get('http://localhost:5000/api/users/', { params : { 'email' : email, 'password' : motdePasse} })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
    }

    return (
        <div>
            <h1> Connexion </h1>
            <form onSubmit={handleConnexion}>
              <label>
                Email
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </label>
              <label>
                Mot de passe
                <input type='password' value={motdePasse} onChange={(e) => setMotdePasse(e.target.value)}/>
              </label>
              <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Connexion;