import { ADD_POINT, CLEAR_POINT } from "../typeActions";

const initialState = {
  points: 0,
};

export const pointsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINT:
      return { ...state, points: state.points + action.data };
    case CLEAR_POINT:
      return initialState;
    default:
      return state;
  }
};
