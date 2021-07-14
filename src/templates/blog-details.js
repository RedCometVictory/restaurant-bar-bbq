import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

export default function BlogDetails({ data }) {
  const { body } = data.mdx;
  const { title, date } = data.mdx.frontmatter;
  const featureImage = data.mdx.frontmatter.featureImage;
  const seoImage = data.mdx.frontmatter.featureImage.publicURL;
  // <Seo /> with no props simply relies on default values
  return (
    <Layout>
      <Seo
        title={data.mdx.frontmatter.title}
        image={seoImage}
        description={data.mdx.body}
      />
      <section className="blog">
        <div className="blog__header">
          <div className="blog__title">
            <h2>{title}</h2>
          </div>
          <div className="blog__date">
            <h3>{date}</h3>
          </div>
        </div>
        <div className="blog__image">
          <GatsbyImage image={getImage(featureImage)} alt={title} />
        </div>
        <div className="blog__details">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
    </Layout>
  )
}
      
export const query = graphql`
  query SingleBlogPost($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      body
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        featureImage {
          publicURL
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: {fit: COVER, cropFocus: CENTER}
              formats: [AUTO, WEBP]
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`; 
  // height: 240
  // width: 400