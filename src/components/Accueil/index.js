import React, { Component } from 'react';
import Header from '../../containers/HeaderContainer';
import HeadBanner from '../HeadBanner';
import Presentation from '../Presentation';
import HomeDelivery from '../HomeDelivery';
import Footer from '../Footer';
import Avis from '../Avis';

class Accueil extends Component {
    render() {
        return (
            <div>
                <Header />
                <HeadBanner />
                <Presentation />
                <HomeDelivery />
                <Avis />
                <Footer />
            </div>
        );
    }
}


export default Accueil;
