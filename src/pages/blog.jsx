import React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/header/Header";
import ContentContainerLayout from "../components/layout/ContentContainerLayout";
import BodyLayout from "../components/layout/BodyLayout";
import Footer from "../components/footer/Footer";
import { GatsbyImage } from "gatsby-plugin-image";

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

function BlogCard({ title, link, thumbnail, excerpt, date }) {
  return (
    <Link to={"/blog/" + link}>
      <div className="my-10 border rounded overflow-hidden transform hover:-translate-y-0.5 hover:shadow-md">
        <div className="max-h-32 bg-gray-600 overflow-hidden">
          {thumbnail ? <GatsbyImage image={thumbnail.childImageSharp.gatsbyImageData} alt={title} className="object-center object-cover h-auto w-full" /> : ""}
          {/* <img className="object-center object-cover h-auto w-full " src="/assets/screenshot-271-.png" alt="test" /> */}
        </div>
        <div className="mx-2 p-3">
          <div className="font-semibold text-lg hover:underline mb-1">{title}</div>
          <div className="font-sm text-gray-500 mb-1">{date}</div>
          <div>{excerpt}</div>
          <div className="text-blue-600 hover:underline">more . . .</div>
        </div>
      </div>
    </Link>
  );
}

export default function blog({ data }) {
  console.log(data);
  const blogs = data.allMdx.nodes;
  return (
    <BodyLayout>
      <Header />
      <div className="my-10">
        <ContentContainerLayout>
          <Link to="/blog" className="mb-5 font-semibold text-2xl tracking-wider">
            Blog
          </Link>
          {blogs.map((blog, index) => (
            <BlogCard title={blog.frontmatter.title} link={blog.slug} thumbnail={blog.frontmatter.thumbnail} excerpt={blog.excerpt} key={index} date={blog.frontmatter.date} />
          ))}
        </ContentContainerLayout>
      </div>
      <Footer />
    </BodyLayout>
  );
}

export const query = graphql`
  query BlogsQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 15) {
      nodes {
        excerpt(pruneLength: 17)
        frontmatter {
          title
          path
          date(formatString: "DD MMMM YYYY")
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
      }
    }
  }
`;
