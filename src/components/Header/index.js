import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavItem,
  Container,
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
      <Container fluid className="fixed-top">
        <Navbar className="container" expand="md">
          <img className="logo" href="/" alt="logo o'resto" src={ logo }/>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/" to="/"><i className="fas fa-home"></i>Accueil</Link>
              </NavItem>
              <NavItem>
                <Link href="/menus" to="/menus"><i className="fab fa-elementor"></i>Menus</Link>
              </NavItem>
              <NavItem>
                <Link href="/inscription" to="/inscription"><i className="fas fa-user-plus"></i>S'inscrire</Link>
              </NavItem>
              <NavItem>
                <Link href="/connexion" to="/connexion"><i className="fas fa-sign-in-alt"></i>Se connecter</Link>
              </NavItem>
            </Nav>
            <Link href="/panier" to="/panier"><i className="fas fa-shopping-cart"><div className="countPanier">{this.props.cartCounter}</div></i></Link>
        </Navbar>
      </Container>
    );
  }
}

// Header.propTypes = {
//   cartCounter: PropTypes.number.isRequired,
// };


export default Header;