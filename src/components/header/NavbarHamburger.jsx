import React from "react";
import "./NavbarHamburger.css";

export default function NavbarHamburger({ isNavbarOpen, navbarClick }) {
  return (
    <div id="nav-icon1" role="button" tabIndex={0} onClick={navbarClick} className={isNavbarOpen ? "open" : ""}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
