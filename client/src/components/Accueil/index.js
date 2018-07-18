import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../containers/HeaderContainer';
import HeadBanner from '../HeadBanner';
import Presentation from '../Presentation';
import HomeDelivery from '../HomeDelivery';
import Footer from '../Footer';


class Accueil extends Component {
    render() {
        return (
            <div>
                <Header />
                <HeadBanner />
                <Presentation />
                <HomeDelivery />
                <Footer />
            </div>
        );
    }
}


Accueil.propTypes = {};


export default Accueil;
