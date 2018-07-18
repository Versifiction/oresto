import { connect } from 'react-redux';

import Cart from '../components/Cart';
import Header from '../components/Header';

const mapStateToProps = (state, ownProps) => ({
  cartCounter: state.cartCounter,
  menus: state.menus,
});

const mapDispatchToProps = (dispatch, getState, ownProps) => ({
  addQuantityHandle: menu => (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'ADD_QUANTITY_HANDLE',
      menu,
    });
  },
  removeQuantityHandle: menu => (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'REMOVE_QUANTITY_HANDLE',
      menu,
    });
  },
  deleteMenuHandle: menu => (evt) => {
    evt.preventDefault();
    dispatch({
      type: 'DELETE_MENU_HANDLE',
      menu,
    });
  },
});


const CartContainer = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(Cart);

export default CartContainer;