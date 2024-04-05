import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../data/articles';

function DetailsProduit() {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      <h2>{article.nom}</h2>
      <p>Prix: {article.prix} $</p>
      <p>Description: {article.description}</p>
      <button>Ajouter au panier</button>
    </div>
  );
}

export default DetailsProduit;