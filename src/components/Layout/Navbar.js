import React, { useState } from "react";
import { Link } from "gatsby";

import HamburgerButton from "./HamburgerButton";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const { navContainer, hamburger, brandLink } = styles;

  const onHamburgerClick = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const onBackdropClick = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div>
      <header>
        <nav className={navContainer}>
          <div className={hamburger}>
            <HamburgerButton
              clickHandler={onHamburgerClick}
              clicked={sideDrawerOpen}
            />
          </div>
          <SideDrawer show={sideDrawerOpen} />
          {sideDrawerOpen && <Backdrop clickHandler={onBackdropClick} />}
          <Link className={brandLink} to="/">
            <h1>jonathan viray</h1>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
