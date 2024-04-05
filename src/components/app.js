import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accueil from '.index';
import Catalogue from './components/catalogue';
import DetailsProduit from './components/Dproduit';
import Panier from './components/panier';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/catalogue" component={Catalogue} />
          <Route path="/produit/:id" component={DetailsProduit} />
          <Route path="/panier" component={Panier} />
          <Route path="/article/:id" component={Article} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;