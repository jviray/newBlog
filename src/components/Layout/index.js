import React from "react";

import Navbar from "./Navbar";
import styles from "./Layout.module.scss";

const Layout = props => {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <div style={{ marginTop: "7.2rem" }}>{props.children}</div>
    </div>
  );
};

export default Layout;
