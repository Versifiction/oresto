import { connect } from 'react-redux';

import MenusContent from '../components/MenusContent';

const mapStateToProps = (state, ownProps) => ({
  cartCounter: state.cartCounter,
  menus: state.menus,
});

const mapDispatchToProps = (dispatch, getState, ownProps) => ({
  addCartHandle: menu => (evt) => {
    evt.preventDefault();    
    dispatch({
      type: 'ADD_CART_HANDLE',
      menu,
    });
  },
  // addCartMenus: (evt) => {
  //   evt.preventDefault();
  //   console.log(evt.target.getState());
  //   const { value } = evt.target;
  //   dispatch({
  //     type: 'ADD_CART_MENUS',
  //     value,
  //   });
  // }
});

const MenusContentContainer = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(MenusContent);

export default MenusContentContainer;