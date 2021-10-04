import React, { Component } from "react";
import { graphql } from "gatsby";
import Header from "@components/header/Header";
import ContentContainerLayout from "@components/layout/ContentContainerLayout";
import BodyLayout from "@components/layout/BodyLayout";
import Footer from "@components/footer/Footer";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Breadcrumb from "@components/Breadcrumb";
import Seo from "@components/SEO";
import { Index } from "elasticlunr";

function BlogCard({ title, link, thumbnail, excerpt, date, tags }) {
  return (
    <AniLink paintDrip to={"/blog/" + link}>
      <div className="my-10 border rounded overflow-hidden transform hover:-translate-y-0.5 hover:shadow-md group">
        <div className="max-h-32 overflow-hidden flex items-center">
          {thumbnail ? <GatsbyImage image={thumbnail.childImageSharp.gatsbyImageData} alt={title} className="object-center object-cover h-auto w-full" /> : ""}
          {/* <img className="object-center object-cover h-auto w-full " src="/assets/screenshot-271-.png" alt="test" /> */}
        </div>
        <div className="mx-2 p-3">
          <div className="font-semibold text-lg mb-2 group-hover:text-blue-500">{title}</div>
          <div className="mb-2 flex flex-wrap">
            {tags
              ? tags.map((tag, index) => (
                  <div className="mr-2 mb-1 px-2 py-.5 bg-gray-700 text-white text-sm rounded-sm" key={index}>
                    {tag}
                  </div>
                ))
              : ""}
          </div>
          <div className="text-sm text-gray-500 mb-1">{date}</div>
          <div>{excerpt}</div>
          <div className="text-blue-600 hover:underline">more . . .</div>
        </div>
      </div>
    </AniLink>
  );
}

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.blogs = props.data.allMdx.nodes;

    this.state = {
      query: ``,
      results: [],
      displayBlogs: [],
    };

    this.getOrCreateIndex = this.getOrCreateIndex.bind(this);
    this.search = this.search.bind(this);
  }

  getOrCreateIndex() {
    return this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.data.siteSearchIndex.index);
  }

  search(event) {
    const query = event.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref).path),
      // this.index.documentStore.getDoc(ref).title , etc
      //   create new component
    });
  }

  render() {
    const displayBlogs = this.state.query !== "" ? this.blogs.filter((item) => this.state.results.includes(item.frontmatter.path)) : this.blogs;
    return (
      <>
        <Seo />
        <BodyLayout>
          <Header />
          <div className="my-10">
            <Breadcrumb />
            {/* <Search searchIndex={data.siteSearchIndex.index} /> */}
            <div className="max-w-screen-md mx-auto px-3 mb-10">
              <label htmlFor="blog-search">Search</label>
              <input id="blog-search" type="text" className="w-full p-2 outline-none" value={this.state.query} onChange={this.search} placeholder="Search . . ." autoComplete="search" />
              <div className="flex justify-between align-baseline mb-5 mx-2">
                <span className="block text-sm text-gray-400">Search title and tags. Ex. tugas</span>
                <span className=" block text-sm text-gray-400">Elasticlunr</span>
              </div>
            </div>
            <ContentContainerLayout>
              <AniLink paintDrip to="/blog" className="mb-5 font-semibold text-2xl tracking-wider">
                Blog
              </AniLink>

              {displayBlogs.map((blog, index) => (
                <BlogCard
                  title={blog.frontmatter.title}
                  link={blog.frontmatter.path}
                  thumbnail={blog.frontmatter.thumbnail}
                  excerpt={blog.excerpt}
                  key={index}
                  date={blog.frontmatter.date}
                  tags={blog.frontmatter.tags}
                />
              ))}
            </ContentContainerLayout>
          </div>
          <Footer />
        </BodyLayout>
      </>
    );
  }
}

export const query = graphql`
  query BlogsQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        excerpt(pruneLength: 150)
        frontmatter {
          title
          path
          tags
          date(formatString: "DD MMMM YYYY")
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    siteSearchIndex {
      index
    }
  }
`;
