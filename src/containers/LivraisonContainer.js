import { connect } from 'react-redux';

import Livraison from '../components/Livraison';
import { changeInput, sendDeliveryAddress } from '../store/reducer';

const mapStateToProps = (state, ownProps) => ({
  nameValue: state[ownProps.nameValue],
  telephoneValue: state[ownProps.telephoneValue],
  addressValue: state[ownProps.addressValue],
  addressComplementValue: state[ownProps.addressComplementValue],
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (name, value) => {
    console.log(name, value);
    dispatch(changeInput({ key: name, value }));
  },
  sendDeliveryAddress: () => {
    console.log("DISPTACHED")
    dispatch(sendDeliveryAddress());
  }
});

const LivraisonContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Livraison);

export default LivraisonContainer;