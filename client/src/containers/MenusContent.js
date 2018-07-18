import { connect } from 'react-redux';

import MenusContent from '../components/MenusContent';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  addCartHandle: (evt) => {
      evt.preventDefault();
    dispatch({
      type: 'ADD_CART_HANDLE'
    });
  }
});

const MenusContent = connect(
  mapStateToProps, // Props en lecture
  mapDispatchToProps, // Props en écriture
)(MenusContent);

export default MenusContent;