import React from "react";
import { Link } from "gatsby";
import Header from "../../components/header/Header";
import ContentContainerLayout from "../../components/layout/ContentContainerLayout";
import BodyLayout from "../../components/layout/BodyLayout";
import Footer from "../../components/footer/Footer";

export default function blog() {
  const dummyBlogs = [
    {
      title: "Hello World",
      excert: " debitis quia amet, dolore eos doloribus minima?",
      path: "/",
    },
    {
      title: "Hello World",
      excert: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus dicta accusamus provident ipsum excepturi est nobis, debitis quia amet, dolore eos doloribus minima?",
      path: "/",
    },
    {
      title: "Hello World",
      excert: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus dicta accusamus provident ipsum excepturi est nobis, debitis quia amet, dolore eos doloribus minima?",
      path: "/",
    },
    {
      title: "Hello World",
      excert: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus dicta accusamus provident ipsum excepturi est nobis, debitis quia amet, dolore eos doloribus minima?",
      path: "/",
    },
    {
      title: "Hello World",
      excert: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus dicta accusamus provident ipsum excepturi est nobis, debitis quia amet, dolore eos doloribus minima?",
      path: "/",
    },
    {
      title: "Hello World",
      excert: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus dicta accusamus provident ipsum excepturi est nobis, debitis quia amet, dolore eos doloribus minima?",
      path: "/",
    },
  ];
  return (
    <BodyLayout>
      <Header />
      <div className="my-10">
        <ContentContainerLayout title="Blog">
          {dummyBlogs.map((blog, index) => (
            <Link to={blog.path} key={index}>
              <div className="my-10 border rounded overflow-hidden transform hover:-translate-y-0.5 hover:shadow-md">
                <div className="max-h-32 bg-gray-600 overflow-hidden">
                  {index !== 1 ? <img className="object-center object-cover h-auto w-full " src="/assets/screenshot-271-.png" alt="test" /> : ""}
                </div>
                <div className="mx-2 p-3">
                  <div to={blog.path} className="font-semibold text-lg hover:underline mb-1">
                    {blog.title}
                  </div>
                  <div to={blog.path}>
                    <div>{blog.excert}</div>
                  </div>
                  <div to={blog.path} className="text-blue-600 hover:underline">
                    more . . .
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </ContentContainerLayout>
      </div>
      <Footer />
    </BodyLayout>
  );
}
