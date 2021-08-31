import React from "react";
import { graphql } from "gatsby";
import BodyLatestBlog from "../components/home/latestblog/BodyLatestBlog";
import IndexHeader from "../components/home/header/IndexHeader";
import Footer from "../components/footer/Footer";

export default function index() {
  return (
    <div className="h-full bg-gray-100 min-w-min min-h-screen">
      <IndexHeader />
      <BodyLatestBlog />
      <Footer />
    </div>
  );
}
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
