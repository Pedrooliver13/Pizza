import { ADD_POINT, CLEAR_POINT } from "../typeActions";

export const addPoint = (data) => ({
  type: ADD_POINT,
  data,
});

export const clearPoint = () => ({
  type: CLEAR_POINT,
});
