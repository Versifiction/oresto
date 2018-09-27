const defaultDeliveryAddress = {
  nameValue: '',
  telephoneValue: '',
  addressValue: '',
  addressComplementValue: '',
};

const defaultMenus = [];

const initialState = {
  menus: [],
  cartCounter: 0,
  total: 0,
  deliveryAddress: defaultDeliveryAddress,
};

export const ADD_CART_HANDLE = 'ADD_CART_HANDLE';
export const ADD_CART_MENUS = 'ADD_CART_MENUS';
export const ADD_QUANTITY_HANDLE = 'ADD_QUANTITY_HANDLE';
export const REMOVE_QUANTITY_HANDLE = 'REMOVE_QUANTITY_HANDLE';
export const DELETE_MENU_HANDLE = 'DELETE_MENU_HANDLE';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const ON_SUBMIT_DELIVERY = 'ON_SUBMIT_DELIVERY';
export const SEND_DELIVERY_ADDRESS = 'SEND_DELIVERY_ADDRESS';
export const EMPTY_CART_HANDLER = 'EMPTY_CART_HANDLER';

const reducer = (currentState = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CART_HANDLE:
      // console.log(currentState.cartCounter);
      // console.log(action.menu);
      // MIDDLEWARE A UTILISER POUR TRANSFORMER L'ACTION ADDCARTHANDLE EN UNE ACTION ADDQUANTITYHANDLE
      let cartCounterSum;
      const menusEdited = [ ...currentState.menus, action.menu ];

      return {
        ...currentState,
        menus: menusEdited,
      };

    case ADD_CART_MENUS:
      return {
        ...currentState,
        menus: action.value,
      };

    case ADD_QUANTITY_HANDLE:
      console.log("ajouté")
      const currentCart = currentState.menus.map((menu => {
        if(menu.id === action.menu.id){
          menu.quantity = menu.quantity + 1
          return menu
        };
        return menu
      }))
      return {
        ...currentState,
        menus: currentCart,
      };

    case REMOVE_QUANTITY_HANDLE:
      const currentCartRemove = currentState.menus.map((menu => {
        if(menu.id === action.menu.id){
          menu.quantity = menu.quantity - 1
          return menu
        };
        return menu
      }))
      return {
        ...currentState,
        menus: currentCartRemove,
      };

    case DELETE_MENU_HANDLE:
      // console.log(currentState.menus.length);
      // MIDDLEWARE A UTILISER POUR TRANSFORMER L'ACTION ADDCARTHANDLE EN UNE ACTION ADDQUANTITYHANDLE
      const currentCartDelete = currentState.menus.filter(menu => menu.id !== action.menu.id);
      return {
        ...currentState,
        menus: currentCartDelete,
      };

    case CHANGE_INPUT:
        // console.log(action.value);
        const deliveryAddressEdited = {
          ...currentState.deliveryAddress,
          [action.key + 'Value']: action.value,
        };
        return {
          ...currentState,
          deliveryAddress: deliveryAddressEdited,
        };

    // L'utilisateur vient d'envoyer le formulaire, on vide le formulaire.
    case SEND_DELIVERY_ADDRESS:
      return {
        ...currentState,
        deliveryAddress: defaultDeliveryAddress, // reset
      };

    case EMPTY_CART_HANDLER:
      return {
        ...currentState,
        menus: defaultMenus,
      };

    default: return currentState;
  }
};

export const addCartHandle = () => ({
  type: ADD_CART_HANDLE,
});

export const addQuantityHandle = (menu) => ({
  type: ADD_QUANTITY_HANDLE,
  menu,
});

export const removeQuantityHandle = () => ({
  type: REMOVE_QUANTITY_HANDLE,
});

export const deleteMenuHandle = (menu) => ({
  type: DELETE_MENU_HANDLE,
  menu,
});

export const changeInput = ({ key, value }) => ({
  type: 'CHANGE_INPUT',
  value,
  key,
});

export const sendDeliveryAddress = () => ({
  type: SEND_DELIVERY_ADDRESS,
});

export const emptyCartHandler = () => ({
  type: EMPTY_CART_HANDLER,
});


export default reducer;
