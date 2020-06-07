import React from "react";

import Navbar from "./Navbar";

const Layout = props => {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <div style={{ marginTop: "7.2rem" }}>{props.children}</div>
    </div>
  );
};

export default Layout;
