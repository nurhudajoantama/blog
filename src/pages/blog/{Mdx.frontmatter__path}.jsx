import { graphql } from "gatsby";
import React from "react";

export default function Component({ data, params }) {
  console.log(data, params);
  return <div></div>;
}

export const query = graphql`
  query queryPerPage($path: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
