import React from "react";

import styles from "./HamburgerButton.module.scss";

const HamburgerButton = ({ clickHandler, isClicked }) => {
  const { btnContainer, hamburgerLine } = styles;
  const triggered = isClicked && styles.triggered;

  return (
    <button className={`${btnContainer} ${triggered}`} onClick={clickHandler}>
      <div className={hamburgerLine}></div>
    </button>
  );
};

export default HamburgerButton;
