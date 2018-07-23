import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Header from '../../containers/HeaderContainer';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
      
    render() {
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
                        <tr className="panier-list" key={menu.picture}>
                            <td>{menu.name}</td>
                            <td>{menu.price}€</td>
                            <td><i className="fas fa-minus-square" onClick={this.props.removeQuantityHandle(menu)}></i> {menu.quantity} <i className="fas fa-plus-square" onClick={this.props.addQuantityHandle(menu)}></i></td>
                            <td><i className="fas fa-trash-alt" onClick={this.props.deleteMenuHandle(menu)}></i></td>
                        </tr>
                        )}
                    </tbody>
                </Table>
                <div className="panier-total text-right">
                    <p>Total : {this.props.total.toFixed(2)}€</p>
                </div>
                <div>
                    <Button color="primary" onClick={this.toggle}>
                        Valider votre commande
                    </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Récapitulatif commande</ModalHeader>
                        <ModalBody>
                           {this.props.menus.map(menu =>
                            <p key={menu.picture}>
                                <span className="name-recapitulatif">{menu.name} - </span>
                                <span className="price-recapitulatif">{menu.price}€ - </span>
                                <span className="quantite-recapitulatif">x{menu.quantity} = </span> 
                                <span className="pricequantity-recapitulatif">{(menu.price * menu.quantity).toFixed(2)}€</span> 
                                <br />
                            </p>
                           )}
                           <span className="total-recapitulatif">Total : {this.props.total.toFixed(2)}€</span>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.toggle}>Annuler</Button>
                            <Link href="/livraison" to="/livraison"><Button onClick={this.toggle}>Valider</Button>{' '}</Link>
                        </ModalFooter>
                    </Modal>
                </div>
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