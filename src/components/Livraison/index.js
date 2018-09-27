import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import Header from '../../containers/HeaderContainer';
import Footer from '../Footer';


class Livraison extends Component {
    handleChange = (evt) => {
        // Modifier le state de <App />
        const { name, value } = evt.target;
        this.props.onChange(name, value);
      }

    render() {
        const {
            nameValue,
            telephoneValue,
            addressValue,
            addressComplementValue,
        } = this.props;
        return (
            <div className="container panier">
                <Header />
                <Form className="formulaire">
                    <h2 className="text-center">Vos coordonnées de livraison</h2>
                    <FormGroup>
                    <Label for="exampleAddress">Nom</Label>
                    <Input type="name" name="name" id="exampleName" placeholder="Entrez votre nom" onChange={this.handleChange} value={nameValue} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleTelephone">Téléphone</Label>
                    <Input type="telephone" name="telephone" id="exampleTelephone" placeholder="Entrez votre numéro de téléphone" onChange={this.handleChange} value={telephoneValue} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleAddress">Adresse</Label>
                    <Input type="address" name="address" id="exampleAddress" placeholder="Entrez votre adresse" onChange={this.handleChange} value={addressValue} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleAddress">Complément d'adresse</Label>
                    <Input type="textarea" name="addressComplement" id="exampleAddressComplement" placeholder="Entrez un complément d'adresse" onChange={this.handleChange} value={addressComplementValue} />
                    </FormGroup>
                    <Link href="/paiement" to="/paiement"><Button type="submit" onClick={this.props.sendDeliveryAddress}>Envoyer</Button></Link>
                </Form>
                <Footer />
            </div>
        );
    }
}

export default Livraison;