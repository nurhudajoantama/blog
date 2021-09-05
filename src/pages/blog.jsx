import React from "react";
import { graphql } from "gatsby";
import Header from "../components/header/Header";
import ContentContainerLayout from "../components/layout/ContentContainerLayout";
import BodyLayout from "../components/layout/BodyLayout";
import Footer from "../components/footer/Footer";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Breadcrumb from "../components/Breadcrumb";

function BlogCard({ title, link, thumbnail, excerpt, date }) {
  return (
    <AniLink paintDrip to={"/blog/" + link}>
      <div className="my-10 border rounded overflow-hidden transform hover:-translate-y-0.5 hover:shadow-md group">
        <div className="max-h-32 overflow-hidden flex items-center">
          {thumbnail ? <GatsbyImage image={thumbnail.childImageSharp.gatsbyImageData} alt={title} className="object-center object-cover h-auto w-full" /> : ""}
          {/* <img className="object-center object-cover h-auto w-full " src="/assets/screenshot-271-.png" alt="test" /> */}
        </div>
        <div className="mx-2 p-3">
          <div className="font-semibold text-lg mb-1 group-hover:underline">{title}</div>
          <div className="text-sm text-gray-500 mb-1">{date}</div>
          <div>{excerpt}</div>
          <div className="text-blue-600 hover:underline">more . . .</div>
        </div>
      </div>
    </AniLink>
  );
}

export default function blog({ data }) {
  const blogs = data.allMdx.nodes;
  return (
    <BodyLayout>
      <Header />
      <div className="my-10">
        <Breadcrumb />
        <ContentContainerLayout>
          <AniLink paintDrip to="/blog" className="mb-5 font-semibold text-2xl tracking-wider">
            Blog
          </AniLink>
          {blogs.map((blog, index) => (
            <BlogCard title={blog.frontmatter.title} link={blog.slug} thumbnail={blog.frontmatter.thumbnail} excerpt={blog.excerpt} key={index} date={blog.frontmatter.date} />
          ))}
          <hr />
          <AniLink paintDrip to="/all-blog">
            <div className="text-center text-lg text-blue-500 py-3 bg-gray-200 hover:underline">all blog . . .</div>
          </AniLink>
        </ContentContainerLayout>
      </div>
      <Footer />
    </BodyLayout>
  );
}

export const query = graphql`
  query BlogsQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        excerpt(pruneLength: 150)
        frontmatter {
          title
          path
          date(fromNow: true)
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        slug
      }
    }
  }
`;
