import React from "react";
import Navbar from "../../header/Navbar";
import Quote from "./Quote";

export default function IndexHeader() {
  return (
    <div className="w-full bg-blue-700 pb-10">
      <Navbar />
      <Quote />
    </div>
  );
}
