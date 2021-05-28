import { actionType } from "./actionType";

export const Reducer = (state, action) => {
  switch (action.type) {
    case actionType.SELECTED_NODE:
      return {
        ...state,
        selectedNode: action.payload
      };
    default:
      return state;
  }
};
