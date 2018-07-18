import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
import logo from '../../images/oresto-blanc.png';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="fixed-top container-fluid">
        <Navbar className ="navbar container" expand="md">
          <img className="logo" href="/" alt="logo o'resto" src={ logo }/>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/" to="/"><NavLink href="/"><i className="fas fa-home"></i>Accueil</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link href="/menus" to="/menus"><NavLink href="/menus"><i className="fab fa-elementor"></i>Menus</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link href="/inscription" to="/inscription"><NavLink href="/inscription"><i className="fas fa-user-plus"></i>S'inscrire</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link href="/connexion" to="/connexion"><NavLink href="/connexion"><i className="fas fa-sign-in-alt"></i>Se connecter</NavLink></Link>
              </NavItem>
            </Nav>
            <Link href="/panier" to="/panier"><a href="/panier" className="cart"><i className="fas fa-shopping-cart"><div className="countPanier">{this.props.cartCounter}</div></i></a></Link>
          </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  cartCouter: PropTypes.number.isRequired,
};


export default Header;