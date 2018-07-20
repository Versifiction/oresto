import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = (state, ownProps) => ({
  cartCounter: state.menus.reduce(function(total, menu) {
    return total + menu.quantity;
  }, 0),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const HeaderContainer = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(Header);

export default HeaderContainer;