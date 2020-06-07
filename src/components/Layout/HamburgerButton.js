import React from "react";

import styles from "./HamburgerButton.module.scss";

const HamburgerButton = ({ clickHandler, clicked }) => {
  const { btnContainer, hamburgerLine } = styles;
  const triggered = clicked && styles.triggered;

  return (
    <button className={`${btnContainer} ${triggered}`} onClick={clickHandler}>
      <div className={hamburgerLine}></div>
      <div className={hamburgerLine}></div>
      <div className={hamburgerLine}></div>
    </button>
  );
};

export default HamburgerButton;
