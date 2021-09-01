import React from "react";

export default function BodyLayout({ children }) {
  return <div className="h-full bg-gray-100 min-w-min min-h-screen">{children}</div>;
}
