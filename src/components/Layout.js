import React, { useContext } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import ThemeContext from '../context/ModeProvider';
import { ThemeProvider } from '../context/ThemeContext';

export default function Layout({ children }) {
  // const { light, dark } = useContext(ThemeContext);
  return (
    <>
    <ThemeProvider>
    <HelmetProvider>
      {/* <Helmet>
        <html className={mode} />
      </Helmet> */}
          {/* <Helmet bodyAttributes={{ class: className}}> */}
        {/* <title>driesstandaert.com</title> */}
      {/* </Helmet> */}
      {/* <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A recipe blog' },
            { name: 'keywords', content: 'gatsby, react, cookbook, recipes' },
          ]}
        >
          <html lang="en" />
        </Helmet> */}
        {/* <Helmet bodyAttributes={{ class: className}}> */}
        {/* <title>Gatsby Site</title> */}
      {/* </Helmet> */}
      <NavBar />
      <main className="container">
        {/* import other components and page here as a children prop */}
        { children }
      </main>
      <Footer />
      </HelmetProvider>
    </ThemeProvider>
    </>
  )
}
