import React, { Component } from 'react';

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

export default Connexion;