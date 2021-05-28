import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { Reducer } from "./reducer";
import { ContextDevTool } from "react-context-devtool";

export const initialState = {
  mainContext: { selectedNode: undefined },
  bodyContext: { items: undefined }
};

export const Context = createContext(initialState);

export const Store = ({ children }) => {
  const reducer = Reducer;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      <ContextDevTool
        context={Context}
        id="uniqContextId"
        displayName="Context Display Name"
      />
      {children}
    </Context.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.array
};
