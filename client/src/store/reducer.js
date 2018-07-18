const initialState = {
  menus: [],
  cartCounter: 0,
  menu: [],
};

const ADD_CART_HANDLE = 'ADD_CART_HANDLE';
const ADD_CART_MENUS = 'ADD_CART_MENUS';
const ADD_QUANTITY_HANDLE = 'ADD_QUANTITY_HANDLE';
const REMOVE_QUANTITY_HANDLE = 'REMOVE_QUANTITY_HANDLE';
const DELETE_MENU_HANDLE = 'DELETE_MENU_HANDLE';

const reducer = (currentState = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CART_HANDLE:
    // console.log(currentState.cartCounter);
    // console.log(action.menu);
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
    console.log(currentState.menu);
    return {
      ...currentState,
    };

    // case REMOVE_QUANTITY_HANDLE:
    //   return {

    //   };

    // case DELETE_MENU_HANDLE:
    //   return {
        
    //   };

    default: return currentState;
  }
};

export const addCartHandle = () => ({
  type: ADD_CART_HANDLE,
});

export const addQuantityHandle = () => ({
  type: ADD_QUANTITY_HANDLE,
});

export const removeQuantityHandle = () => ({
  type: REMOVE_QUANTITY_HANDLE,
});

export const deleteMenuHandle = () => ({
  type: DELETE_MENU_HANDLE,
});

export default reducer;
