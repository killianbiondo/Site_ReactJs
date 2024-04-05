import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/articles';

function Catalogue() {
  return (
    <div>
      <h2>Catalogue</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <img src={article.image} alt={article.nom} style={{ width: '100px', height: '100px' }} />
            <Link to={`/produit/${article.id}`}>{article.nom}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogue;