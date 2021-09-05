import React, { useState } from "react";
import NavbarHamburger from "./NavbarHamburger";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
      <div className={"flex-col fixed h-full min-w-min w-2/3 md:w-1/2 left-0 top-0 bg-white shadow-md py-10 pr-7 pl-2 z-50 overflow-auto" + (isNavbarOpen ? " flex" : " hidden")}>
        {navbarLinks.map((navbarLink, index) => (
          <AniLink
            paintDrip
            key={index}
            to={navbarLink.to}
            className="text-blue:500 text-lg tracking-wid mx-2 py-4 px-3 border-l-8 border-blue-800 border-opacity-0 hover:border-opacity-100 hover:bg-gray-300 active:bg-gray-300 transition duration-150 ease-out"
            activeClassName="bg-gray-200 border-opacity-80"
          >
            {navbarLink.name}
          </AniLink>
        ))}
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <div className="container">
      <div className="flex items-center justify-between py-7">
        <div>
          <AniLink paintDrip to="/" className="text-white text-2xl">
            Nurhuda Joantama
          </AniLink>
        </div>
        {/* for desktop */}
        <div className="hidden lg:flex">
          {navbarLinks.map((navbarLink, index) => (
            <AniLink
              paintDrip
              key={index}
              to={navbarLink.to}
              className="text-white text-lg tracking-wide mx-1 py-1 px-3 rounded hover:bg-blue-900 transition duration-150 ease-in-out"
              activeClassName="bg-blue-800"
            >
              {navbarLink.name}
            </AniLink>
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
