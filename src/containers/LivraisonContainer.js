import { connect } from 'react-redux';

import Livraison from 'src/components/Livraison';
import { changeInput } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  nameValue: state[ownProps.nameValue],
  telephoneValue: state[ownProps.telephoneValue],
  addressValue: state[ownProps.addressValue],
  addressComplementValue: state[ownProps.addressComplementValue],
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (name, value) => {
    const { nameValue, addressValue, addressComplementValue, telephoneValue } = ownProps;
    dispatch(changeInput({ keyName: name, value }));
  },
});

const LivraisonContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Livraison);

export default LivraisonContainer;