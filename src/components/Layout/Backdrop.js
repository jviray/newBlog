import React, { useEffect } from "react";

import styles from "./Backdrop.module.scss";

const Backdrop = ({ clickHandler }) => {
  const { backdrop } = styles;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return <div className={backdrop} onClick={clickHandler}></div>;
};

export default Backdrop;
