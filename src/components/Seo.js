import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { StaticQuery, graphql } from "gatsby";
// import { siteMetadata } from "../../gatsby-config";

// render data from query used, render allows for the rendering of a component from within staticquery
// constants hold data from passed in form the props or refer to fallbacks directly from the query itself
// if no keywords exist return empty array
const Seo = ({title, description, keywords, copyright, url, author}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description;
        const metaTitle = title || data.site.siteMetadata.title;
        const metaCopyRight = copyright || data.site.siteMetadata.copyright;
        const metaAuthor = author || data.site.siteMetadata.author;
        const metaUrl = url || data.site.siteMetadata.url;
        const metaKeywords = keywords || ["Kerman", "BBQ", "Bar-b-q", "Beer", "Burgers", "Burger", "Restaurant", "Brewery", "Smokehouse", "Ribs", "Brisket"];
        return (
          <HelmetProvider>
            <Helmet
              title={title}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:title`,
                  content: metaTitle,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  property: `og:url`,
                  content: metaUrl,
                },
                {
                  name: `twitter:card`,
                  content: `summary_large_image`,
                },
                {
                  name: `twitter:creator`,
                  content: metaAuthor,
                },
                {
                  name: `twitter:title`,
                  content: metaTitle,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
              ].concat(
                metaKeywords && metaKeywords.length > 0 ? {
                  name: `keywords`,
                  content: metaKeywords.join(`, `),
                } : []
              )
              }
            />
          </HelmetProvider>
        )
      }}
    />
  )
};

const detailsQuery = graphql `
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        copyright
      }
    }
  }
`;
export default Seo;