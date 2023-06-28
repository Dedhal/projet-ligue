import React, { useState } from 'react';

const Inscription = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [motdePasse, setMotdePasse] = useState('');

    const handleIoninscription = () => {
        //vers le backend
    }

    return (
        <div>
            <h1> Inscrition</h1>
            <form onSubmit={handleIoninscription}>
              <label>
                Nom : 
                <input type='text' value={login} onChange={(e) => setLogin(e.target.value)}/>
              </label>
              <label>
                email
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </label>
              <label>
                motdePasse
                <input type='password' value={motdePasse} onChange={(e) => setMotdePasse(e.target.value)}/>
              </label>
              <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default Inscription;