import {
  ADD_DOUGH,
  ADD_FILLING,
  ADD_SIZE,
  ADD_PRICE,
  CLEAR_PIZZA,
} from "../typeActions";

const initialState = {
  pizza: {
    dough: { step: 1 },
    size: { step: 2 },
    filling: { step: 3 },
    price: 0,
  },
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
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
