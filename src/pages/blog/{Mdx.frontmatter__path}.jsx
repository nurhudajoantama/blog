import { graphql, Link } from "gatsby";
import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage } from "gatsby-plugin-image";
import Header from "../../components/header/Header";
import ContentContainerLayout from "../../components/layout/ContentContainerLayout";
import BodyLayout from "../../components/layout/BodyLayout";
import Footer from "../../components/footer/Footer";

function Breadcrumb({ slug }) {
  return (
    <div className="mx-auto max-w-screen-md text-gray-500 mt-8 text-sm">
      <Link to="/" className="hover:text-blue-500">
        Nurhuda Joantama
      </Link>{" "}
      /{" "}
      <Link to="/blog" className="hover:text-blue-500">
        blog
      </Link>{" "}
      /{" "}
      <Link to={"/blog/" + slug} className="hover:text-blue-500">
        {slug}
      </Link>
    </div>
  );
}

function Thumbnail({ thumbnail, alt }) {
  return (
    <>
      {thumbnail ? (
        <div className="mb-10">
          <GatsbyImage image={thumbnail.childImageSharp.gatsbyImageData} placeholder="blurred" width="full" className="w-full h-auto" alt={alt} />
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
      <MDXProvider
        components={{
          p: (props) => (
            <p className="text-lg leading-relaxed tracking-wide my-7" {...props}>
              {props.children}
            </p>
          ),
          img: (props) => <img className="w-full h-auto my-7" alt={props.alt} {...props} />,
          code: (props) => (
            <code className="py-1 px-2 rounded bg-gray-200 font-mono" {...props}>
              {props.children}
            </code>
          ),
          pre: (props) => (
            <pre className="bg-gray-200 py-3 pl-5 pr-3 shadow-sm rounded font-mono" {...props}>
              {props.children}
            </pre>
          ),
        }}
      >
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
          <div className="mb-10 mt-5">
            <ContentContainerLayout>
              {/* title */}
              <div className="mb-5 font-semibold text-3xl text-center tracking-wider">{this.frontmatter.title}</div>
              {/* date */}
              <div className="m-5 pt-4">
                <div className="mb-3">{this.frontmatter.date}</div>
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
        date(formatString: "DD MMMM YYYY")
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
