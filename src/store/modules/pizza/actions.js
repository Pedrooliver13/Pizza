import {
  ADD_DOUGH,
  ADD_PRICE,
  ADD_SIZE,
  ADD_FILLING,
  CLEAR_PIZZA,
  PIZZA_SELETED,
} from "../typeActions";

export const pizzaSelected = (data) => ({
  type: PIZZA_SELETED,
  data
})

export const addDough = (data) => ({
  type: ADD_DOUGH,
  data,
});

export const addPrice = (data) => ({
  type: ADD_PRICE,
  data,
});

export const addSize = (data) => ({
  type: ADD_SIZE,
  data,
});

export const addFilling = (data) => ({
  type: ADD_FILLING,
  data,
});

export const clearPizza = () => ({
  type: CLEAR_PIZZA,
});
