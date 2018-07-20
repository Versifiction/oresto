import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Header from '../../containers/HeaderContainer';
import Footer from '../Footer';

class Cart extends Component {
    render() {
        console.log(this.props.cartCounter);

        return (
            <div className="panier container">
                <Header />
                <h2 className="text-center">Panier</h2>
                <Table className="table text-center" bordered hover striped responsive>
                    <thead className="panier-header">
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Quantité</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.menus.map(menu =>
                        <tr className="panier-list" key={menu.id}>
                            <td>{menu.name}</td>
                            <td>{menu.price}€</td>
                            <td><i className="fas fa-minus-square" onClick={this.props.removeQuantityHandle(menu)}></i> {menu.quantity} <i className="fas fa-plus-square" onClick={this.props.addQuantityHandle(menu)}></i></td>
                            <td><i className="fas fa-trash-alt" onClick={this.props.deleteMenuHandle(menu)}></i></td>
                        </tr>
                        )}
                    </tbody>
                </Table>
                <Footer />
            </div>
        );
    };
};

Cart.propTypes = {
    addQuantityHandle: PropTypes.func.isRequired,
    removeQuantityHandle: PropTypes.func.isRequired,
    deleteMenuHandle: PropTypes.func.isRequired,
};


export default Cart;