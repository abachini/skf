import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Item from "../item/Item";

const StyledItemList = getStyledItemList();

const ItemsList = ({ items }) => {
  const renderItems = items?.items?.items?.items;
  return (
    <StyledItemList>
      {renderItems &&
        renderItems.length > 0 &&
        renderItems.map(({ name, children }, i) => (
          <Item key={`${name}-${i}`} name={name}>
            {children}
          </Item>
        ))}
    </StyledItemList>
  );
};

function getStyledItemList() {
  return styled.div`
    border-right: 1px solid lightgray;
    height: 100%;
  `;
}

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemsList;
