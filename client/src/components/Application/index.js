import React from 'react';
import PropTypes from 'prop-types';

import Accueil from '../Accueil';
import Menus from '../Menus';
import Inscription from '../Inscription';
import Connexion from '../Connexion';
import Cart from '../../containers/CartContainer';
import { Route } from 'react-router-dom';



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

App.propTypes = {
};

App.defaultProps = {
};

export default App;
