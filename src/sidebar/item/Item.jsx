import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useWinstonLogger } from "winston-react";
import { Context } from "../../store";

const StyledItem = getStyledItem();

const Item = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [, dispatchAction] = useContext(Context);
  const logger = useWinstonLogger();
  const handleOnClick = () => {
    setIsOpen(!isOpen);
    logger.info(`[Item] Name: ${name}`);
    if (name) {
      dispatchAction({ type: "SELECTED_NODE", payload: { name } });
    }
  };

  return (
    <>
      <StyledItem onClick={handleOnClick} isOpen={isOpen}>
        {name}
      </StyledItem>
      {isOpen &&
        children &&
        children.map(({ name, children }, i) => (
          <Item key={`${name}-${i}`} name={name}>
            {children}
          </Item>
        ))}
    </>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.array
};

function getStyledItem() {
  return styled.div`
    :hover {
      font-weight: bold;
      cursor: pointer;
    }
    ${props => (props.isOpen ? "font-weight: bold" : "font-weight: none;")}
  `;
}

export default Item;
