import React from "react";
import { Link } from "gatsby";

import styles from "./SideDrawer.module.scss";

const SideDrawer = ({ show }) => {
  const { sideDrawerContainer } = styles;
  const open = show && styles.open;

  return (
    <nav className={`${sideDrawerContainer} ${open}`}>
      <ul>
        <li>
          <Link to="/">blog</Link>
        </li>
        <li>
          <Link to="/">work</Link>
        </li>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
