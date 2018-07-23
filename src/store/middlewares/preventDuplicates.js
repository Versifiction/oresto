import { ADD_CART_HANDLE, addQuantityHandle } from '../reducer';
import { REMOVE_QUANTITY_HANDLE, deleteMenuHandle } from '../reducer';
import { SEND_DELIVERY_ADDRESS, deliveryAddress } from '../reducer';

/**
 * Ce middleware permet d'éviter de générer deux fois de suite la même valeur.
 */



const preventDuplicates = store => next => (action) => {
  switch (action.type) {
    case ADD_CART_HANDLE:
      const menus = store.getState().menus;
      if (menus.find((menu => menu.id === action.menu.id))) {
        store.dispatch(addQuantityHandle(action.menu));
      }
      else {
        next(action);
      }
      break

    case REMOVE_QUANTITY_HANDLE:
      const menusRemove = store.getState().menus;
      if (menusRemove.find((menu => action.menu.quantity <= 1))) {
        store.dispatch(deleteMenuHandle(action.menu));
      }
      else {
        next(action);
      }
      break

    case SEND_DELIVERY_ADDRESS:
      // dans le mw qui traite l'action SEND_DELIVERY_ADDRESS
      axios.post('/deliveryData', store.getState().deliveryAddress);
      next(action); // dans le reducer, je vide les champs de deliveryAddress

    default: next(action);
  }
};

export default preventDuplicates;
