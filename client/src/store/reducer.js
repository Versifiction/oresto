const initialState = {
  menus: [],
  cartCounter: 0,
};

export const ADD_CART_HANDLE = 'ADD_CART_HANDLE';
export const ADD_CART_MENUS = 'ADD_CART_MENUS';
export const ADD_QUANTITY_HANDLE = 'ADD_QUANTITY_HANDLE';
export const REMOVE_QUANTITY_HANDLE = 'REMOVE_QUANTITY_HANDLE';
export const DELETE_MENU_HANDLE = 'DELETE_MENU_HANDLE';

const reducer = (currentState = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CART_HANDLE:
    // console.log(currentState.cartCounter);
    // console.log(action.menu);
    // MIDDLEWARE A UTILISER POUR TRANSFORMER L'ACTION ADDCARTHANDLE EN UNE ACTION ADDQUANTITYHANDLE
      return {
        ...currentState, 
        cartCounter: currentState.menus.length + 1,
        menus: [
          ...currentState.menus, action.menu,
        ],
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
          console.log(menu.quantity)
          return menu
        };
        return menu
      }))
      return {
        ...currentState,
        menus: currentCart,
      }
    case REMOVE_QUANTITY_HANDLE:
      const currentCartRemove = currentState.menus.map((menu => {
        if(menu.id === action.menu.id){
          menu.quantity = menu.quantity - 1
          console.log(menu.quantity)
          return menu
        };
        return menu
      }))
      return {
        ...currentState,
        menus: currentCartRemove,
      }

    case DELETE_MENU_HANDLE:
      console.log(currentState.menus.length);
      // MIDDLEWARE A UTILISER POUR TRANSFORMER L'ACTION ADDCARTHANDLE EN UNE ACTION ADDQUANTITYHANDLE
      const currentCartDelete = currentState.menus.filter(menu => menu.id !== action.menu.id);
      return {
        ...currentState,
        menus: currentCartDelete,
        cartCounter: currentCartDelete.length,
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

export const deleteMenuHandle = () => ({
  type: DELETE_MENU_HANDLE,
});

export default reducer;
