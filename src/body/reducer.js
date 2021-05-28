import { actionType } from "./actionType";

export const Reducer = (state, action) => {
  switch (action.type) {
    case actionType.FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case actionType.FETCH_ITEMS_ERROR:
      return {
        ...state,
        itemsError: action.payload
      };
    default:
      return state;
  }
};
