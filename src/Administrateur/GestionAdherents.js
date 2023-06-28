import React, { useEffect, useState } from 'react';

const GestionAdherents = () => {
  const [adherents, setAdherents] = useState([]);

  useEffect(() => {
    const fetchAdherents = async () => {
      try {
        const response = await fetch('/api/adherents');
        const data = await response.json();
        setAdherents(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des adhérents:', error);
      }
    };
  
    fetchAdherents();
  }, []);
  

  return (
    <div>
      <h2>Gestion des adhérents</h2>
      <ul>
        {adherents.map((adherent) => (
          <li key={adherent.id}>{adherent.nom} {adherent.prenom}</li>
        ))}
      </ul>
    </div>
  );
};

export default GestionAdherents;
