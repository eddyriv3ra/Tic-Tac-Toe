import React from "react";
import PropTypes from "prop-types";
import styles from "./Squares.module.scss";

const Squares = ({ value, id, onClick }) => {
  const handleClick = () => {
    return !value ? onClick(id) : null;
  };
  return (
    <div className={styles.square} onClick={handleClick}>
      {value}
    </div>
  );
};

Squares.propTypes = {};

export default Squares;
