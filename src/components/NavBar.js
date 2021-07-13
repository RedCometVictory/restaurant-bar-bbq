import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'gatsby';
import { FaCaretDown, FaBars } from 'react-icons/fa';
import HeadOnly from '../../static/assets/headOnly.svg';
import { ModeButton } from './ModeButton';

export default function NavBar() {
  // set theme via cpntext, use state provided by the context component, wrap all content in context for theme to take effect
  const [hasMounted, setHasMounted] = React.useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <header className="nav nav__header">
      <div className="nav__brand">
        <div className="nav__icon">
          <HeadOnly className="nav__icon" stroke="currentColor" fill="currentColor" />
        </div>
        <div className="nav__title-container">
          <h1 className="nav__title">
            <Link to="/">
              <span className="title-one">The Den</span>
              <br/>
              <span className="title-two">Smokehouse & Brewery</span>
            </Link>
          </h1>
        </div>
      </div>
      <div className="nav__container">
        <input type="checkbox" name="toggler" className="nav__toggler" />
        <label htmlFor="toggler" className="nav__burger"></label>
        <FaBars className="nav__bars" />
        <nav className="nav__menu">
          <ul className="nav__links">
            <li className="nav__link-item">
              <Link to="/menu/food-menu" className="nav__link">Food Menu</Link>
            </li>
            <li className="nav__link-item">
              {/* implement an age verification before redirecting to this route */}
              <Link to="/menu/beer-menu" className="nav__link">Beer Menu</Link>
            </li>
            <li className="nav__link-item">
              <input type="checkbox" className="nav__caret-toggle" />
              <span className="nav__link">
                Locations
                <span><FaCaretDown className="nav__caret" /></span>
              </span>
              <ul className="nav__links--secondary">
                <li className="nav__link-item--secondary">
                  <Link to="/locations/kerman">Kerman</Link>
                </li>
                <li className="nav__link-item--secondary">
                  <Link to="/locations/fresno">Fresno</Link>
                </li>
              </ul>
            </li>
            <li className="nav__link-item">
              <Link to="/blogs" className="nav__link">Blogs & News</Link>
            </li>
            <li className="nav__link-item">
              <input type="checkbox" className="nav__caret-toggle" />
              <span className="nav__link">
                Contact
                <span><FaCaretDown className="nav__caret" /></span>
              </span>
              <ul className="nav__links--secondary">
                <li className="nav__link-item--secondary">
                  <Link to="/contact/contact-us">Contact Us</Link>
                </li>
                <li className="nav__link-item--secondary">
                  <Link to="/contact/catering-quote">Catering Quote</Link>
                </li>
                <li className="nav__link-item--secondary">
                  <Link to="/contact/service-feedback">Service Feedback</Link>
                </li>
              </ul>
            </li>
            <li className="nav__link-item">
              <Link to="/about" className="nav__link">About Us</Link>
            </li>
          </ul>
        </nav>
        <div className="nav__theme-select" >
          <ModeButton />
        </div>
      </div>
    </header>
  )
};