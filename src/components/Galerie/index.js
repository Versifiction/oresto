import React, { Component } from 'react';

import Header from '../../containers/HeaderContainer';
import Footer from '../Footer';


class Galerie extends Component {
    render() {
        return (
            <div className="container panier">
                <Header />
                <h2 className="text-center">Galerie</h2>
                <p className="text-center">Disponible bientôt !</p>
                <Footer />
            </div>
        );
    }
}

export default Galerie;