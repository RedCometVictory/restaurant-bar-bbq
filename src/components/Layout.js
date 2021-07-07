import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main className="container">
        {/* import other components and page here as a children prop */}
        { children }
      </main>
      <Footer />
    </div>
  )
}
