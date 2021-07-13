import React, { useContext } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../context/ThemeContext';

export default function Layout({ children }) {
  return (
    <>
    <ThemeProvider>
    <HelmetProvider>
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