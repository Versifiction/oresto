import { connect } from 'react-redux';

import Cart from '../components/Cart';

const mapStateToProps = (state, ownProps) => ({
  cartCounter: state.cartCounter,
  menus: state.menus,
  total: state.menus.reduce(function(total, menu) {
    return total + menu.price * menu.quantity;
  }, 0),
  // currentTotal: state.menus.reduce(function(total1, menu){
  //   return total1 + action.menu.price * action.menu.quantity;
  // }, 0),
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
  emptyCartHandler: menus => (evt) => {
    evt.preventDefault();
    console.log(menus)
    dispatch({
      type: 'EMPTY_CART_HANDLER',
      menus,
    });
  }
});


const CartContainer = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(Cart);

export default CartContainer;