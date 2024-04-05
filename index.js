import React from 'react';
import { Link } from 'react-router-dom';

function Accueil() {
  return (
    <div>
       <h2>Bienvenue sur notre site de vente d'articles de football</h2>
        <p>Découvrez notre sélection de produits de qualité.</p>
        
      <Link to="/catalogue">Voir les produits</Link>
    </div>
  );
}




export default Accueil;