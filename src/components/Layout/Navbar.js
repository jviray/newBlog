import React, { useState } from "react";
import { Link } from "gatsby";

import HamburgerButton from "./HamburgerButton";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const { navContainer, hamburgerWrap, brandLink } = styles;

  const onHamburgerClick = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const onBackdropClick = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div>
      <header>
        <div className="wrap">
          <nav className={navContainer}>
            <div className={hamburgerWrap}>
              <HamburgerButton
                clickHandler={onHamburgerClick}
                isClicked={sideDrawerOpen}
              />
            </div>
            {/* Insert non mobile side menu and backdrop */}
            <Link className={brandLink} to="/">
              <h1>jonathan viray</h1>
            </Link>
          </nav>
        </div>
      </header>
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && <Backdrop clickHandler={onBackdropClick} />}
    </div>
  );
};

export default Navbar;
