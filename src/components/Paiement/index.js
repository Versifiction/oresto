import React, { Component } from 'react';

import Header from '../../containers/HeaderContainer';
import Footer from '../Footer';

class Paiement extends Component {
    render() {
        return (
            <div className="container panier">
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Paiement;