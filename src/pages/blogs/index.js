import React from 'react';
// import { StaticQuery, graphql, Link } from 'gatsby';
import { graphql, Link } from 'gatsby';
// import { StaticImage, GatsbyImage } from 'gatsby-plugin-image';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import Layout from '../../components/Layout';

export default function BlogsAll({ data }) {
  const posts = data.posts.edges;
  
  return (
    <Layout>
      <section className="product">
        <div className="product__info">
          <div className="product__downloadables">
            {/* Download a paper menu <a>HERE</a> | Check out catering info <a>HERE</a> */}
          </div>
          <div className="blog-item__container">
            <h2>Blog & News</h2>
            <div className="blog-item__content">
              {posts.map(post => (
                <div className="blog-item" key={post.node.id}>
                  <div className="blog-item__title">
                    <h3>{post.node.frontmatter.title}</h3>
                  </div>
                  <div className="blog-item__container-indiv">
                    <div className="blog-item__container-inner">
                      <div className="blog-item__image">
                        <Link to={"/blogs/" + post.node.frontmatter.slug}>
                          <GatsbyImage image={getImage(post.node.frontmatter.featureImage)} alt={post.node.frontmatter.title} objectFit='cover' />
                        </Link>
                      </div>
                      <div className="blog-item__description">
                        {post.node.frontmatter.intro}
                        <div className="blog-item__link">
                          <br />
                          <Link to={"/blogs/" + post.node.frontmatter.slug}>Read More...</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="blog-item__date"> */}
              {/* {post.node.frontmatter.date} */}
            {/* </div> */}
            {/* <div className="blog-item__content">
              {blogData.blogs.map((blog, index) => {
                return <BlogItem key={`menu-item-${index}`} blog={blog} />
              })}
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query AllBlogsPage {
    posts: allMdx(sort: {order: DESC, fields: frontmatter___date}, filter: {fileAbsolutePath: {regex: "/src/posts/"}}) {
      edges {
        node {
          frontmatter {
            title
            slug
            featureImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  transformOptions: {fit: COVER, cropFocus: CENTER}
                  height: 240
                  formats: [AUTO, WEBP]
                  layout: CONSTRAINED
                  width: 400
                )
              }
            }
            intro
          }
          id
        }
      }
    }
  }
`;