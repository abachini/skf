import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ItemsList from "./itemsList/ItemsList";

const StyledSidebar = getStyledSidebar();

export const Sidebar = ({ items = [] }) => {
  return (
    <StyledSidebar>
      <ItemsList items={{ items }} />
    </StyledSidebar>
  );
};

function getStyledSidebar() {
  return styled.div`
    padding: 20px 15px 20px 20px;
    min-width: 200px;
    min-height: 600px;
  `;
}

Sidebar.propTypes = {
  items: PropTypes.array.isRequired
};

export default Sidebar;
