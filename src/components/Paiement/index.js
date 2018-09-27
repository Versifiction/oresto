import React, { Component } from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

import Header from '../../containers/HeaderContainer';
import Footer from '../Footer';

class Paiement extends Component {
    onToken = (token) => {
        axios.post('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        });
      }
    
      // ...
    
      render() {
        return (
            <div className="container panier text-center">
                <Header/>
                <h2>Paiement</h2>
                <StripeCheckout
                    token={this.onToken}
                    stripeKey="pk_test_mr1DwR1GzaG2lHxoBckiFAdU"
                />
                <Footer/>
            </div>
        )
      }
}

export default Paiement;
