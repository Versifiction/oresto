import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../containers/HeaderContainer';
import RegisterForm from '../Forms/RegisterForm';
import Footer from '../Footer';


class Inscription extends Component {
    render() {
        return (
            <div>
                <Header />
                <RegisterForm />
                <Footer />
            </div>
        );
    }
}


Inscription.propTypes = {};


export default Inscription;