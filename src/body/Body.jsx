import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Main from "../main";
import Sidebar from "../sidebar";

const StyledContainer = getStyledContainer();

export const Body = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();

  useEffect(() => {
    fetch("https://run.mocky.io/v3/c12045db-63a5-4560-8d14-01d230d828ad")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <StyledContainer>
        <Sidebar items={{ items }} />
        <Main />
      </StyledContainer>
    );
  }
};

function getStyledContainer() {
  return styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  `;
}

export default Body;
