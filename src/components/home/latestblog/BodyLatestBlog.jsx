import { Link } from "gatsby";
import React from "react";

export default function BodyLatestBlog() {
  const dummyBlogs = [
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
    <div className="bg-white mx-auto max-w-screen-md rounded-lg p-10 relative -top-10">
      <div className="mb-5 font-semibold text-2xl tracking-wider">Latest Blog</div>
      <div>
        {dummyBlogs.map((blog, index) => (
          <div className="my-6" key={index}>
            <Link to={blog.path} className="font-semibold text-lg hover:underline">
              {blog.title}
            </Link>
            <Link to={blog.path}>
              <div>{blog.excert}</div>
            </Link>
            <Link to={blog.path} className="text-blue-600">
              more . . .
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
