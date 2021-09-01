import React from "react";

export default function ContentContainerLayout({ children }) {
  return <div className="bg-white mx-auto max-w-screen-md rounded-lg px-10 py-7 shadow-md">{children}</div>;
}
