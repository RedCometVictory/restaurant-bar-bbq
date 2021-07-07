import React from "react";
import "../styles/styles.scss";
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

export default function Home({ data }) {
  const blogs = data.blogs.edges;
  const weeklys = data.weekly.edges;
  // example of graphql, be sure to import graphql from gatsby, extract info from query via data prop
  // this is a dynamic "page" query (located at the bottom of the page), also known as page components, that can make use of query variables unike "useStaticQuery", a static query is much more limited in how it works and cannot make use of query variables and another thing is that static queries are prone to errors (seemingly random). More stable if used in components that have Capitalized names. Finally a static query can only be used once inside of a component.

  return (
    <>
      <NavBar />
      <main className="landing" >
        <section className="hero">
          <div className="hero__container">
            <div className="hero__contact">
              <a href="https://toasttakeout.com/">
                <div className="hero__btn">
                  Mobile App
                </div>
              </a>
              <a href="https://www.toasttab.com/thedenbrews">
                <div className="hero__btn">
                  Order Online!
                </div>
              </a>
              <a href="tel:+15597553412">
                <div className="hero__btn">
                  (559) 755-3412
                </div>
              </a>
            </div>
            <div className="hero_info"></div>
          {/* alt value still appears */}
            {/* <img className="hero__container-img" src="/img/pexels-dima-valkov-3864681" alt="landing" /> */}
          </div>
        </section>
        <section className="landing__content">
          <div className="landing__section">
            <h2>Weekly Specials</h2>
            <div className="landing__container">
              {weeklys.map(weekly => (
                <div className="landing__card" key={weekly.node.id}>
                  <h3 className="landing__card-title">
                    {weekly.node.frontmatter.title}
                  </h3>
                  <div className="landing__card-image">
                    <GatsbyImage className="image" image={getImage(weekly.node.frontmatter.featureImage)} alt={weekly.node.frontmatter.title} objectFit='cover' />
                  </div>
                  <div className="landing__card-description">
                    <MDXRenderer>{weekly.node.body}</MDXRenderer>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="landing__section sec-two">
            <h2>Blogs & News</h2>
            <div className="landing__container-blogs">
              {blogs.map(blog => (
                <div className="landing__card" key={blog.node.id}>
                  <div className="landing__card-wide">
                    <Link to={"/blogs/" + blog.node.frontmatter.slug}>
                      <GatsbyImage className="image" image={getImage(blog.node.frontmatter.featureImage)} alt={blog.node.frontmatter.title} objectFit='cover' />
                    </Link>
                    <div className="info">
                      <h3 className="title">{blog.node.frontmatter.title}</h3>
                      <div className="description">
                        <p>
                          {blog.node.frontmatter.intro}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="landing__blogs"></div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
export const query = graphql`
  query FeaturedBlogs {
    blogs: allMdx(limit: 4, sort: {order: DESC, fields: frontmatter___date}, filter: {fileAbsolutePath: {regex: "/src/posts/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            intro
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
          }
        }
      }
    }
    weekly: allMdx(filter: {fileAbsolutePath: {regex: "/src/weeklyspecials/"}}) {
      edges {
        node {
          id
          body
          frontmatter {
            title
            slug
            featureImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  transformOptions: {fit: COVER, cropFocus: CENTER}
                  height: 360
                  formats: [AUTO, WEBP]
                  layout: CONSTRAINED
                  width: 400
                )
              }
            }
          }
        }
      }
    }
  }
`;