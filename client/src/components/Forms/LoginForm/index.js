import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <Form className="container formulaire">
                    <h2 className='text-center'>Connexion</h2>
                    <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Entrez votre adresse e-mail" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="examplePassword">Mot de passe</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Entrez votre mot de passe" />
                    </FormGroup>
                    <Button>Envoyer</Button>
                </Form>
            </div>
        );
    }
}

export default LoginForm;