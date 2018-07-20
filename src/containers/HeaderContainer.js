import { connect } from 'react-redux';

import Header from '../components/Header';

const mapStateToProps = (state, ownProps) => ({
  cartCounter: state.cartCounter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const HeaderContainer = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(Header);

export default HeaderContainer;