import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <Form className='container formulaire'>
                    <h2 className="text-center">Inscription</h2>
                    <FormGroup>
                    <Label for="exampleAddress">Nom</Label>
                    <Input type="name" name="name" id="exampleName" placeholder="Entrez votre nom" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Entrez votre adresse e-mail" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="examplePassword">Mot de passe</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Entrez votre mot de passe" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleConfirmPassword">Confirmer le mot de passe</Label>
                    <Input type="password" name="password" id="exampleConfirmPassword" placeholder="Entrez votre mot de passe" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleAddress">Adresse</Label>
                    <Input type="address" name="address" id="exampleAddress" placeholder="Entrez votre adresse" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="exampleTelephone">Téléphone</Label>
                    <Input type="telephone" name="telephone" id="exampleTelephone" placeholder="Entrez votre numéro de téléphone" />
                    </FormGroup>
                    <Button>Envoyer</Button>
                </Form>
            </div>
        );
    }
}

export default RegisterForm;
