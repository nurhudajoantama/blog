import { Link } from "gatsby";
import React from "react";
import ContentContainerLayout from "../layout/ContentContainerLayout";

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

function BlogCard({ link, title, excert }) {
  return (
    <div className="my-6">
      <Link to={link}>
        <div to={link} className="font-semibold text-lg hover:underline">
          {title}
        </div>
        <div to={link}>
          <div>{excert}</div>
        </div>
        <div to={link} className="text-blue-600 hover:underline">
          more . . .
        </div>
      </Link>
    </div>
  );
}

export default function BodyLatestBlog() {
  return (
    <div className="relative -top-10 ">
      <ContentContainerLayout title="Latest Blog">
        <div>
          {dummyBlogs.map((blog, index) => (
            <BlogCard title={blog.title} excert={blog.excert} link={blog.path} key={index} />
          ))}
        </div>
      </ContentContainerLayout>
    </div>
  );
}
