import { BodyReducer, actionType as bodyActionTypes } from "./body";

export const Reducer = (state, action) => {
  const nextState = ApplicationReducer(state, action);

  console.log("nextState", nextState);

  return {
    ...nextState,
    bodyContext: BodyReducer(nextState.bodyContext, action)
  };

  function ApplicationReducer(state, action) {
    console.log("state", state);
    switch (action.type) {
      case bodyActionTypes.FETCH_ITEMS:
        return {
          ...state,
          bodyContext: state.bodyContext
        };
      case bodyActionTypes.FETCH_ITEMS_ERROR:
        return {
          ...state,
          bodyContext: state.bodyContext
        };
      case "SELECTED_NODE":
        return {
          ...state,
          mainContext: { selectedNode: action.payload }
        };
      default:
        return state;
    }
  }
};
