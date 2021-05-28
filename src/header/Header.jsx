import React from "react";
import styled from "styled-components";

const StyledHeader = getStyledHeader();

export const Header = () => {
  return <StyledHeader>MY APP!</StyledHeader>;
};

function getStyledHeader() {
  return styled.div`
    border-bottom: 1px solid grey;
    width: 100%;
    min-height: 40px;
    padding-left: 10px;
    vertical-align: middle;
  `;
}

export default Header;
