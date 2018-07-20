import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import image from '../../images/motorcycle.jpg';

class MenusContent extends Component {
    state = {
        menus: [],
    }

    componentDidMount() {
        fetch("/menus")
            .then(res => res.json())
            .then(menus => this.setState({ menus }));
    }

    
    
    render() {        
        return (
            <div className="cartes">
                <h2 className="text-center">Menus</h2>
                {this.state.menus.map(menu =>
                    <Card key={menu.id}  >
                        <CardImg top width="100%" src={ image } alt="Card image cap" />
                        <CardBody >
                        <CardTitle>{menu.name} <span className="price">{menu.price}€</span></CardTitle>
                        <CardText>{menu.description}</CardText>
                        <Button onClick={this.props.addCartHandle(menu)}>Ajouter au panier</Button>
                        </CardBody>
                    </Card>
                )}
            </div>
        );
    }

}

MenusContent.propTypes = {
    addCartHandle: PropTypes.func.isRequired,
    // addCartMenus: PropTypes.func.isRequired,
}

MenusContent.propTypes = {
    addCartHandle: PropTypes.func.isRequired,
}

export default MenusContent;