import { graphql } from "gatsby";
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage } from "gatsby-plugin-image";
import Header from "@components/header/Header";
import ContentContainerLayout from "@components/layout/ContentContainerLayout";
import BodyLayout from "@components/layout/BodyLayout";
import Footer from "@components/footer/Footer";
import Breadcrumb from "@components/Breadcrumb";
import blogComponents from "@components/blog/blogComponents";
import Seo from "@components/SEO";
import { Disqus } from "gatsby-plugin-disqus";
import { siteUrl } from "../../../config/website";

function Thumbnail({ thumbnail, alt }) {
  return (
    <>
      {thumbnail ? (
        <div className="mb-7">
          <GatsbyImage image={thumbnail.childImageSharp.gatsbyImageData} className="w-full h-auto" alt={alt} />
          <div className="text-sm text-gray-500">{alt}</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function ContentBlog({ body }) {
  return (
    <div>
      <MDXProvider components={blogComponents}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </div>
  );
}

function Tags({ tags }) {
  return (
    <div className="mb-2 flex flex-wrap">
      {tags
        ? tags.map((tag, index) => (
            <div className="mr-2 mb-1 px-2 py-.5 bg-gray-700 text-white text-sm rounded-sm" key={index}>
              {tag}
            </div>
          ))
        : ""}
    </div>
  );
}

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.blog = this.props.data.mdx;
    this.frontmatter = this.blog.frontmatter;
    // for comment on blog
    this.disqusConfig = {
      url: `${siteUrl}/blog/${this.frontmatter.path}`,
      identifier: this.blog.id,
      title: this.frontmatter.title,
    };
  }
  render() {
    return (
      <>
        <Seo
          frontmatter={this.frontmatter}
          // postImage={this.frontmatter.thumbnail.fluid.src}
          isBlogPost
        />
        <BodyLayout>
          <Header />
          <Breadcrumb />
          <div className="mb-10 mt-7">
            <ContentContainerLayout>
              {/* title */}
              <h1 className="mb-5 font-semibold text-3xl text-center tracking-wider">{this.frontmatter.title}</h1>
              <div className="m-5 pt-4">
                {/* date */}
                <span className="mb-3 block text-sm text-gray-700">{this.frontmatter.date}</span>
                {/* thumbnail */}
                <Thumbnail thumbnail={this.frontmatter.thumbnail} alt={this.frontmatter.title} />
                {/* Body */}
                <ContentBlog body={this.blog.body} />
                {/* Tags */}
                <Tags tags={this.frontmatter.tags} />
              </div>
            </ContentContainerLayout>
            <div className="mt-20 mb-10 max-w-screen-md mx-auto ">
              <Disqus config={this.disqusConfig} />
            </div>
          </div>
          <Footer />
        </BodyLayout>
      </>
    );
  }
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "DD MMMM YYYY | HH:mm")
        title
        path
        description
        tags
        thumbnail {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
            fluid {
              src
            }
          }
        }
      }
      id
      body
    }
  }
`;
