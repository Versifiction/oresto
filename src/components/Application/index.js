import React from 'react';
import Accueil from '../Accueil';
import Menus from '../Menus';
import Inscription from '../Inscription';
import Connexion from '../Connexion';
import Cart from '../../containers/CartContainer';
import { Route } from 'react-router-dom';
// eslint-disable-next-line
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';



import './app.css';

const App = () => (
  <div>
    <Route path='/' exact component={ Accueil } />
    <Route path='/menus' exact component={ Menus } />
    <Route path='/inscription' exact component={ Inscription } />
    <Route path='/connexion' exact component={ Connexion } />
    <Route path='/panier' exact component={ Cart } />
  </div>
);

export default App;
