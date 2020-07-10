import React from "react";
import PropTypes from "prop-types";
import styles from "./Squares.module.scss";

const Squares = ({ value, id, onClick }) => {
  const handleClick = () => {
    return !value ? onClick(id) : null;
  };

  const styleValue = value === "X" ? styles.xStyles : styles.oStyles;

  return (
    <div className={`${styles.square} ${styleValue}`} onClick={handleClick}>
      {value}
    </div>
  );
};

Squares.propTypes = {
  value: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
};

export default Squares;
