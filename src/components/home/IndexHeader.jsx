import React from "react";
import Navbar from "../header/Navbar";

function Quote() {
  return (
    <div className="bg-gray-50 mt-5 border-l-8 border-blue-300 p-5 mx-auto max-w-screen-sm mb-7">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="mt-2 mb-1">
        Jangan cuma diem tapi terus bergerak <br />
        Yang penting terus berusaha.
      </p>
      <div>- Unknown</div>
    </div>
  );
}

export default function IndexHeader() {
  return (
    <div className="w-full bg-blue-700 pb-10">
      <Navbar />
      <Quote />
    </div>
  );
}
