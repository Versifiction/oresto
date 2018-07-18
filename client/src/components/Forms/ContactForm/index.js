import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ContactForm extends Component {
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Nom</Label>
                        <Input type="lastname" name="lastname" id="exampleLastName" placeholder="Entrez votre nom" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Prénom</Label>
                        <Input type="firstname" name="firstname" id="exampleFirstName" placeholder="Entrez votre prénom" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Entrez votre adresse e-mail" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Téléphone</Label>
                        <Input type="telephone" name="telephone" id="exampleTelephone" placeholder="Entrez votre téléphone" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleMessage">Message</Label>
                        <Input type="textarea" name="message" id="exampleMessage" placeholder="Entrez votre message" />
                    </FormGroup>
                    <Button>Envoyer</Button>
                </Form>
            </div>
        );
    }
}


ContactForm.propTypes = propTypes;


export default ContactForm;