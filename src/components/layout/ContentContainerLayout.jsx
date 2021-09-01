import React from "react";

export default function ContentContainerLayout({ children, title }) {
  return (
    <div className="bg-white mx-auto max-w-screen-md rounded-lg px-10 py-7 shadow-md">
      {title ? <div className="mb-5 font-semibold text-2xl tracking-wider">{title}</div> : ""}
      {children}
    </div>
  );
}
