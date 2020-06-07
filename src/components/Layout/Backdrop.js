import React from "react";

import styles from "./Backdrop.module.scss";

const Backdrop = ({ clickHandler }) => {
  const { backdrop } = styles;
  return <div className={backdrop} onClick={clickHandler}></div>;
};

export default Backdrop;
