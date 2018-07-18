import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Header from '../../containers/HeaderContainer';
import MenusContent from '../../containers/MenusContentContainer';
import Footer from '../Footer';



class Menus extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <MenusContent />
                <Footer />
            </div>
        );
    }
}

export default Menus;