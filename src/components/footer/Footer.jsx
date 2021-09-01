import React from "react";
import SocialMediaFooter from "./SocialMediaFooter";

export default function Footer() {
  return (
    <div className="bg-blue-700 min-h-1/3 py-10 mt-7">
      <div className="container">
        <SocialMediaFooter />
        <div className="my-10 py-7">
          <p className="text-white">&copy; 2021 Nurhuda Joantama Putra. All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}
