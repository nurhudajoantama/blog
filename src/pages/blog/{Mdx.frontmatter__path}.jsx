import { graphql } from "gatsby";
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.blog = this.props.data.mdx;
    this.frontmatter = this.blog.frontmatter;
  }
  render() {
    return (
      <div>
        <h1>{this.frontmatter.title}</h1>
        <div>{this.frontmatter.path}</div>
        <div>{this.frontmatter.date}</div>
        <MDXProvider>
          <MDXRenderer>{this.blog.body}</MDXRenderer>
        </MDXProvider>
      </div>
    );
  }
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date
        path
        title
      }
      body
      rawBody
    }
  }
`;
