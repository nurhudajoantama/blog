import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import SchemaOrg from "./SchemaOrg";

export default function SEO({ postData, frontmatter = {}, postImage, isBlogPost }) {
  const {
    site: { siteMetadata: seo },
  } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
          }
          canonicalUrl
          description
          image
          keywords
          siteUrl
          title
        }
      }
    }
  `);

  // slugnya kudu ditambah blog. descriptionnya. image, datePublish
  const postMeta = frontmatter || postData.childMarkdownRemark.frontmatter || {};

  const title = postMeta.title || seo.title;
  const description = postMeta.description || seo.description;
  const image = postImage ? `${seo.siteUrl}${postImage}` : seo.image;
  const url = postMeta.slug ? `${seo.siteUrl}/${postMeta.slug}/` : seo.siteUrl;
  const date = isBlogPost ? postMeta.date : false;
  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.social.twitter} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        date={date}
        siteUrl={seo.siteUrl}
        author={seo.author}
        organization={seo.organization}
        defaultTitle={seo.title}
      />
    </>
  );
}

SEO.propTypes = {
  isBlogPost: PropTypes.bool,
  postData: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      frontmatter: PropTypes.any,
      excerpt: PropTypes.any,
    }),
  }),
  postImage: PropTypes.string,
};

SEO.defaultProps = {
  isBlogPost: false,
  postData: { childMarkdownRemark: {} },
  postImage: null,
};
