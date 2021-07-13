import React, { useEffect, useState } from "react";
import "../styles/styles.scss";
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
// import { convertToBgImage } from 'gbimage-bridge';
import { BgImage } from 'gbimage-bridge';
// import BackgroundImage from "gatsby-background-image";
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import { ThemeProvider } from '../context/ThemeContext';

export default function Home({ data }) {
  const blogs = data.blogs.edges;
  const weeklys = data.weekly.edges;
  const slides = data.slide.edges;
  // example of graphql, be sure to import graphql from gatsby, extract info from query via data prop
  // this is a dynamic "page" query (located at the bottom of the page), also known as page components, that can make use of query variables unike "useStaticQuery", a static query is much more limited in how it works and cannot make use of query variables and another thing is that static queries are prone to errors (seemingly random). More stable if used in components that have Capitalized names. Finally a static query can only be used once inside of a component.
  const [hasMounted, setHasMounted] = React.useState(false);
  

  const [index, setIndex] = useState(0);

  const duration = 10000; // in ms ~ 10 secs
  useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) { // total number of images - 1
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, duration);
    return () => clearInterval(timer); // cleanup
  }, [index])
useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  // for use with <BackgroundImage>
  // let image = getImage(slides[index].node.frontmatter.featureImage);
  // let bgImage = convertToBgImage(image);

  // for use with <BgImage>
  // let pluginImage = getImage(slides[index].node.frontmatter.featureImage);
  // let bgImage = convertToBgImage(image);

  return (
    <>
    <ThemeProvider>

    
      <NavBar />
      <main className="landing" >
        <section className="hero">
          <div className="hero__container">
            <BgImage image={getImage(slides[index].node.frontmatter.featureImage)} alt={slides[index].node.frontmatter.title} className="slide-image" />
            <address>
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
            </address>
            <div className="hero__info">
              <div className="hero__title">
                <h2>
                  {slides[index].node.frontmatter.title}
                </h2>
              </div>
              <div className="hero__description">
                <MDXRenderer>
                  {slides[index].node.body}
                </MDXRenderer>
              </div>
            </div>
            <div className="hero__slide-container">
              
              {/* <BackgroundImage
                Tag="section"
                {...bgImage}
                preserveStackingContent
              >
                Carousel
              </BackgroundImage> */}
              {/* <GatsbyImage className="slide-image" image={getImage(slides[index].node.frontmatter.featureImage)} alt={slides[index].node.frontmatter.title} /> */}
              
            </div>
          </div>
          {/* alt value still appears */}
            {/* <img className="hero__container-img" src="/img/pexels-dima-valkov-3864681" alt="landing" /> */}
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
      </ThemeProvider>
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
    weekly: allMdx(filter: {fileAbsolutePath: {regex: "/src/weeklyspecials/"}}, sort: { fields: frontmatter___slug}) {
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
    slide: allMdx(filter: {fileAbsolutePath: {regex: "/src/slideshow/"}}, sort: {order: ASC, fields: id}) {
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
                  placeholder: TRACED_SVG
                  transformOptions: {fit: COVER, cropFocus: CENTER}
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`;
// , cropFocus: CENTER
// layout: FULL_WIDTH
/*
export const pageQuery = graphql`
  query {
    slideShow: allFile(
      filter: {relativeDirectory: {eq: "puerto-rico"}}
      sort: {fields: base, order: ASC}
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(
              height: 600
              width: 900
              placeholder: BLURRED
              quality: 70
              blurredOptions: {width: 100}
              transformOptions: {cropFocus: CENTER, fit: COVER}
            )
          }
        }
      }
    }
  }
`
*/