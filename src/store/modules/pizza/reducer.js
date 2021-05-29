import { CHOOSE_PIZZA } from "../typeActions";

const initialState = {
  pizza: {
    dough: null,
    filling: null,
    size: null,
    price: 0,
  },
};

export const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_PIZZA:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
