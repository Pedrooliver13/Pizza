import {
  ADD_DOUGH,
  ADD_FILLING,
  ADD_SIZE,
  ADD_PRICE,
  CLEAR_PIZZA,
  PIZZA_SELETED,
} from "../typeActions";

const initialState = {
  pizza: {
    dough: null,
    size: null,
    filling: null,
    price: 0,
  },
  selected: null
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case PIZZA_SELETED:
      return {...state, selected: action.data};
    case ADD_DOUGH:
      return {
        ...state,
        pizza: {
          ...state.pizza,
          dough: { ...state.pizza.dough, ...action.data },
        },
      };
    case ADD_FILLING:
      return {
        ...state,
        pizza: {
          ...state.pizza,
          filling: { ...state.pizza.filling, ...action.data },
        },
      };
    case ADD_SIZE:
      return {
        ...state,
        pizza: {
          ...state.pizza,
          size: { ...state.pizza.size, ...action.data },
        },
      };
    case ADD_PRICE:
      return {
        ...state,
        pizza: {
          ...state.pizza,
          price: state.pizza.price + action.data,
        },
      };
    case CLEAR_PIZZA:
      return initialState;
    default:
      return state;
  }
};
