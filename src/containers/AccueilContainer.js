import { connect } from 'react-redux';

import Accueil from '../components/Accueil';

const mapStateToProps = (state, ownProps) => ({
  cartCounter: state.cartCounter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const AccueilContainer = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(Accueil);

export default AccueilContainer;