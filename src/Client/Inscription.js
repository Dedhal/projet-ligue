import React, { useState } from 'react';

const Inscription = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
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
                <input type='text' value={nom} onChange={(e) => setNom(e.target.value)}/>
              </label>
              <label>
                Prenom : 
                <input type='text' value={nom} onChange={(e) => setPrenom(e.target.value)}/>
              </label>
              <label>
                email
                <input type='email' value={nom} onChange={(e) => setEmail(e.target.value)}/>
              </label>
              <label>
                motdePasse
                <input type='password' value={nom} onChange={(e) => setMotdePasse(e.target.value)}/>
              </label>
              <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default Inscription;