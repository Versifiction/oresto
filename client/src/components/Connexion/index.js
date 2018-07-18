import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../containers/HeaderContainer';
import LoginForm from '../Forms/LoginForm';
import Footer from '../Footer';


class Connexion extends Component {
    render() {
        return (
            <div>
                <Header />
                <LoginForm />
                <Footer />
            </div>
        );
    }
}


Connexion.propTypes = {};


export default Connexion;