import React from "react";

export default function BodyLayout({ children }) {
  return (
    <div className="overflow-auto">
      <div className="h-full bg-gray-100 min-h-screen">{children}</div>
    </div>
  );
}
