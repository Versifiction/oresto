import { ADD_CART_HANDLE, addQuantityHandle } from '../reducer';
import { REMOVE_QUANTITY_HANDLE, deleteMenuHandle } from '../reducer';

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
      if (menusRemove.find((menu => menu.quantity <= 1))) {
        store.dispatch(deleteMenuHandle(action.menu));
      }
      else {
        next(action);
      }
      break
    default: next(action);
  }
};

export default preventDuplicates;
