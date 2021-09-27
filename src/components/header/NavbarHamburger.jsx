import React from "react";
import "./NavbarHamburger.css";

export default function NavbarHamburger({ isNavbarOpen, navbarClick }) {
  return (
    <button id="nav-icon1" tabIndex={0} onClick={navbarClick} className={isNavbarOpen ? "open" : ""}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
