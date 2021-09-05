import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import BodyLayout from "../components/layout/BodyLayout";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function NotFoundPage() {
  const pathName = window.location.pathname;
  return (
    <BodyLayout>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow container mt-9 flex">
          <h1 className="text-9xl">404</h1>
          <div className="ml-10">
            <h1 className="text-3xl font-bold my-5">Page Not Found</h1>
            <p className="text-xl my-5">We can't seem to find the page you're looking for.</p>
            <div className="my-5">{pathName}</div>

            <AniLink paintDrip to="/" className="text-blue-700 hover:underline">
              Back to home &gt; &gt;
            </AniLink>
          </div>
        </div>
        <Footer />
      </div>
    </BodyLayout>
  );
}
