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
            placeholder,
            nameValue,
            telephoneValue,
            addressValue,
            addressComplementValue,
            type,
        } = this.props;
        return (
            <div className="container panier">
                <Header />
                <Form onSubmit={this.props.sendDeliveryAddress}>
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
                    <Link href="/paiement" to="/paiement"><Button>Envoyer</Button></Link>
                </Form>
                <Footer />
            </div>
        );
    }
}

export default Livraison;