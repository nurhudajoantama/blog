import { graphql } from "gatsby";
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage } from "gatsby-plugin-image";
import Header from "../../components/header/Header";
import ContentContainerLayout from "../../components/layout/ContentContainerLayout";
import BodyLayout from "../../components/layout/BodyLayout";
import Footer from "../../components/footer/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import blogComponents from "../../components/blog/blogComponents";

function Thumbnail({ thumbnail, alt }) {
  return (
    <>
      {thumbnail ? (
        <div className="mb-10">
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

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.blog = this.props.data.mdx;
    this.frontmatter = this.blog.frontmatter;
  }
  render() {
    return (
      <div>
        <BodyLayout>
          <Header />
          <Breadcrumb slug={this.blog.slug} />
          <div className="mb-10 mt-7">
            <ContentContainerLayout>
              {/* title */}
              <div className="mb-5 font-semibold text-3xl text-center tracking-wider">{this.frontmatter.title}</div>
              <div className="m-5 pt-4">
                {/* date */}
                <div className="mb-3 text-sm text-gray-700">{this.frontmatter.date}</div>
                {/* thumbnail */}
                <Thumbnail thumbnail={this.frontmatter.thumbnail} alt={this.frontmatter.title} />
                {/* Body */}
                <ContentBlog body={this.blog.body} />
              </div>
            </ContentContainerLayout>
          </div>
          <Footer />
        </BodyLayout>
      </div>
    );
  }
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "DD MMMM YYYY | HH:mm")
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      slug
      body
    }
  }
`;
