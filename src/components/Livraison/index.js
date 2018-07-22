import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Header from '../../containers/HeaderContainer';
import Footer from '../Footer';


class Livraison extends Component {
    render() {
        return (
            <div className="container panier">
                <Header />
                <Form>
                    <FormGroup>
                    <Label for="exampleAddress">Nom</Label>
                    <Input type="name" name="name" id="exampleName" placeholder="Entrez votre nom" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleTelephone">Téléphone</Label>
                    <Input type="telephone" name="telephone" id="exampleTelephone" placeholder="Entrez votre numéro de téléphone" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleAddress">Adresse</Label>
                    <Input type="address" name="address" id="exampleAddress" placeholder="Entrez votre adresse" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleAddress">Complément d'adresse</Label>
                    <Input type="textarea" name="address" id="exampleComplementAddress" placeholder="Entrez un complément d'adresse" />
                    </FormGroup>
                    <Button>Envoyer</Button>
                </Form>
                <Footer />
            </div>
        );
    }
}

export default Livraison;