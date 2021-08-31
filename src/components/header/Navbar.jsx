import React, { useState } from "react";
import { Link } from "gatsby";
import NavbarHamburger from "./NavbarHamburger";

const navbarLinks = [
  {
    name: "Blog",
    to: "/blog",
  },
  {
    name: "Portfolio",
    to: "#",
  },
  {
    name: "About",
    to: "#",
  },
  {
    name: "Contact",
    to: "#",
  },
];

function ResponsiveNavbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  function navbarClick() {
    setIsNavbarOpen((prevIsNavbarOpen) => !prevIsNavbarOpen);
  }

  return (
    <>
      <NavbarHamburger isNavbarOpen={isNavbarOpen} navbarClick={navbarClick} />
      <div
        className={
          "flex flex-col fixed h-full min-w-min w-2/3 md:w-1/2 left-0 top-0 bg-white shadow-md py-5 pr-7 pl-2 z-50 transition duration-150 ease-out transform " +
          (isNavbarOpen ? "" : "-translate-x-full")
        }
      >
        {navbarLinks.map((navbarLink, index) => (
          <Link
            key={index}
            to={navbarLink.to}
            className="text-blue:500 text-lg tracking-wide mx-1 py-3 px-3 border-l-8 border-blue-800 border-opacity-0 hover:border-opacity-100 hover:bg-gray-300 active:bg-gray-300 transition duration-150 ease-out"
          >
            {navbarLink.name}
          </Link>
        ))}
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <div className="container">
      <div className="flex items-center justify-between p-5">
        <div>
          <Link to="/" className="text-white text-2xl">
            Nurhuda Joantama
          </Link>
        </div>
        {/* for desktop */}
        <div className="hidden lg:flex">
          {navbarLinks.map((navbarLink, index) => (
            <Link key={index} to={navbarLink.to} className="text-white text-lg tracking-wide mx-1 py-1 px-3 rounded hover:bg-blue-800 transition duration-150 ease-in-out">
              {navbarLink.name}
            </Link>
          ))}
        </div>
        {/* for phone */}
        <div className="block lg:hidden">
          <ResponsiveNavbar />
        </div>
      </div>
    </div>
  );
}
