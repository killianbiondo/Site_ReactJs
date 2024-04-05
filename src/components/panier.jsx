import React, { useState } from 'react';

function Panier() {
  const [panier, setPanier] = useState([
    { id: 1, nom: 'Maillot de football', prix: 50, quantite: 1 },
    { id: 2, nom: 'Ballon de football', prix: 20, quantite: 2 }
    // Vous pouvez initialiser le panier avec des articles déjà ajoutés
  ]);

  const calculerTotal = () => {
    return panier.reduce((total, article) => total + (article.prix * article.quantite), 0);
  };

  const supprimerDuPanier = (id) => {
    const nouveauPanier = panier.filter(article => article.id !== id);
    setPanier(nouveauPanier);
  };

  return (
    <div>
      <h2>Panier</h2>
      <ul>
        {panier.map((article) => (
          <li key={article.id}>
            <img src={article.image} alt={article.nom} style={{ width: '50px', height: '50px' }} />
            {article.nom} - Prix: {article.prix} $ - Quantité: {article.quantite}
            <button onClick={() => supprimerDuPanier(article.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <p>Total: {calculerTotal()} $</p>
      <button>Passer la commande</button>
    </div>
  );
}

export default Panier;