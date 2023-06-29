import React from 'react';
import ListeProduits from './Client/listeproduits';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> Ligue sportive </h1>
       <ListeProduits />
       </header>
    </div>
  );
}

export default App;
