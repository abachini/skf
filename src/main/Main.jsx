import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../store";

const StyledMain = getStyledMain();

export const Main = () => {
  const [state] = useContext(Context);
  const [itemName, setItemName] = useState("");
  const { mainContext } = state;
  const { selectedNode } = { mainContext };

  useEffect(() => {
    if (selectedNode) {
      setItemName(selectedNode.name);
    }
  }, [selectedNode, setItemName]);

  return <StyledMain> {`${itemName || "Nothing selected"}`} </StyledMain>;
};

function getStyledMain() {
  return styled.div`
    display: inline-block;
    margin: auto;
    text-align: center;
    width: 100%;
  `;
}

export default Main;
