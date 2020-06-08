import React from "react";

import Navbar from "./Navbar";
import styles from "./Layout.module.scss";

const Layout = props => {
  const { contentWrap } = styles;

  return (
    <div className="wrap">
      <Navbar />
      <div className={contentWrap}>{props.children}</div>
    </div>
  );
};

export default Layout;
