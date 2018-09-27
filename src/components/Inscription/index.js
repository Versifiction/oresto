import React, { Component } from 'react';
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


export default Inscription;