import React from "react";
import Header from "@components/header/Header";
import ContentContainerLayout from "@components/layout/ContentContainerLayout";
import BodyLayout from "@components/layout/BodyLayout";
import Footer from "@components/footer/Footer";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Breadcrumb from "@components/Breadcrumb";
import SEO from "@components/SEO";

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

export default function BlogsList({ data }) {
  const blogs = data.allMdx.nodes;
  return (
    <>
      <SEO />
      <BodyLayout>
        <Header />
        <div className="my-10">
          <Breadcrumb />
          <ContentContainerLayout>
            <div className="flex justify-between align-baseline mb-5">
              <AniLink paintDrip to="/blog" className="font-semibold text-2xl tracking-wider">
                Blog
              </AniLink>
              <AniLink paintDrip to="/blog/tugas" className="text-md text-gray-700 hover:underline">
                Blog Tugas
              </AniLink>
            </div>
            {blogs.map((blog, index) => (
              <BlogCard title={blog.frontmatter.title} link={blog.frontmatter.path} thumbnail={blog.frontmatter.thumbnail} excerpt={blog.excerpt} key={index} date={blog.frontmatter.date} />
            ))}
          </ContentContainerLayout>
        </div>
        <Footer />
      </BodyLayout>
    </>
  );
}
