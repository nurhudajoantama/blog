import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Footer from "../components/footer/Footer";
import BodyLayout from "../components/layout/BodyLayout";
import ContentContainerLayout from "../components/layout/ContentContainerLayout";
import Navbar from "../components/header/Navbar";

// for quote header
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

// for lates blog
function BlogCardIndex({ link, title, excerpt }) {
  return (
    <div className="my-6">
      <Link to={"/blog/" + link}>
        <div to={link} className="font-semibold text-lg hover:underline">
          {title}
        </div>
        <div to={link}>
          <div>{excerpt}</div>
        </div>
        <div className="text-blue-600 hover:underline">more . . .</div>
      </Link>
    </div>
  );
}

function BodyLatestBlog() {
  const data = useStaticQuery(graphql`
    query LatestBlogsQuery {
      allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 4) {
        nodes {
          excerpt(pruneLength: 170)
          frontmatter {
            title
          }
          slug
        }
      }
    }
  `);
  const latestBlogs = data.allMdx.nodes;
  return (
    <div className="relative -top-10 ">
      <ContentContainerLayout>
        <Link to="/blog" className="mb-5 font-semibold text-2xl tracking-wider">
          Latest Blog
        </Link>
        <div>
          {latestBlogs.map((blog, index) => (
            <BlogCardIndex title={blog.frontmatter.title} excerpt={blog.excerpt} link={blog.slug} key={index} />
          ))}
        </div>
      </ContentContainerLayout>
    </div>
  );
}

export default function index() {
  return (
    <BodyLayout>
      {/* header */}
      <div className="w-full bg-blue-700 pb-10">
        <Navbar />
        <Quote />
      </div>
      <BodyLatestBlog />
      <Footer />
    </BodyLayout>
  );
}
