import React from "react";
import BodyLatestBlog from "../components/home/LatestBlog";
import IndexHeader from "../components/home/header/IndexHeader";
import Footer from "../components/footer/Footer";
import BodyLayout from "../components/layout/BodyLayout";

export default function index() {
  return (
    <BodyLayout>
      <IndexHeader />
      <BodyLatestBlog />
      <Footer />
    </BodyLayout>
  );
}
