import React from 'react';
import { Link } from 'gatsby';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FaCaretDown, FaBars } from 'react-icons/fa';
// import { FaBars } from 'react-icons/fa';
// import headOnly from '..//headOnly.svg';
import HeadOnly from '../../static/assets/headOnly.svg';
// import HeadOnly from '../../static/headOnly.svg';

export default function NavBar() {
  return (
    <HelmetProvider>
      <header className="nav nav__header">
        <Helmet>
          {/* <html className={colorTheme} /> */}
        </Helmet>
        <div className="nav__brand">
          <div className="nav__icon">
            <HeadOnly className="nav__icon" stroke="currentColor" fill="currentColor" />
            {/* <HeadOnly className="nav__icon" /> */}
            {/* {headOnly} */}
            {/* <svg>{headOnly}</svg> */}
            {/* <img src="/headOnly.svg" alt="logo" /> */}
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
                {/* <Link to="/locations" className="nav__link">Locations</Link> */}
                {/* may need to create hover menu, thus an ul inlined here */}
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
                {/* <Link to="/contact" className="nav__link">Contact</Link> */}
                {/* may need to create hover menu, thus an ul inlined here */}
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
          {/* <FaCaretDown/> */}
        </div>
        {/* <div className="theme-toggler">
          <input type="checkbox" />
        </div>
        <div className="theme theme-container">
          <ul className="theme__item-list dropdown">
            <li className="theme__item active" onClick={() => themeSelect('light')}>
              <div className="theme__link light"></div>
            </li>
            <li className="theme__item active" onClick={() => themeSelect('dark')}>
              <div className="theme__link dark"></div>
            </li>
            <li className="theme__item active" onClick={() => themeSelect('purple-prime')}>
              <div className="theme__link purple-prime"></div>
            </li>
            <li className="theme__item active" onClick={() => themeSelect('bee')}>
              <div className="theme__link bee"></div>
            </li>
            <li className="theme__item active" onClick={() => themeSelect('redcomet')}>
              <div className="theme__link redcomet"></div>
            </li>
          </ul>
        </div> */}
      </header>
    </HelmetProvider>
  )
}

// ------------------------------------------------------------
/*
import React, { useState, Component } from "react";
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types'
// import { logout } from '../../actions/auth';

// access from auth action/state, 'hide-sm' class hides link on mobile devices, thus only icons show
// const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
//   call logout method of auth actions, private routes
//   const authLinks = (
//     <ul className="nav__list nav__list--secondary">
//       <li className="nav__item col">
//         <Link to="/profiles" className="nav__link">
//           Developers
//         </Link>
//       </li>
//       <li className="nav__item col">
//         <Link to="/posts" className="nav__link">
//           Posts
//         </Link>
//       </li>
//       <li className="nav__item col">
//         <Link to="/dashboard" className="nav__link">
//           <i className="fas fa-user"></i>{" "}
//           <span className="hide-sm"> Dashboard</span>
//         </Link>
//       </li>
//       <li className="nav__item col">
//         <Link to="/" className="nav__link" onClick={logout}>
//           <i className="fas fa-sign-out-alt"></i>{" "}
//           <span className="hide-sm"> Logout</span>
//         </Link>
//       </li>
//     </ul>
//   );

  // const guestLinks = (
  //   <ul className="nav__list nav__list--secondary">
  //     <li className="nav__item col">
  //       <Link to="/profiles" className="nav__link">
  //         Developers
  //       </Link>
  //     </li>
  //     <li className="nav__item">
  //       <Link to="/register" className="nav__link">
  //         Register
  //       </Link>
  //     </li>
  //     <li className="nav__item">
  //       <Link to="/login" className="nav__link--button">
  //         Login
  //       </Link>
  //     </li>
  //   </ul>
  // );

  // const [toggle, setToggle] = useState(false); // set initial state to off, reverse w/btn click
  // && ternary syntax for "then do" if condition is met then do the following, another ternary to generate appropriate links to the user pending if they are logged into an account based on the loading user state auth. Only good when the else condition produces a null.
  // if user state auth is loading = not true (false; meaning not loading user) generate the next ternary that checks authentication and which links to produce. if user iss authenticated show authLinks otherwise show the guestLinks

const Navbar = () => {

  return (
    <header className="nav__header">
      <div className="nav__logo">
        <h1><Link to="/" className="logo">InnerCircle</Link></h1>
      </div>
      <input type="checkbox" id="toggler" className="toggler"/>
      <label htmlFor="toggler" className="burger">
        <span><i className="fas fa-bars"></i></span>
      </label>
      <div className="nav-container row">
        {/* <button className="nav-toggle" onClick={() => setToggle(!toggle)} aria-label="open navigation">
          <span className="hamburger"></span>
        </button> 
        <nav className="nav">
          <ul className="nav__item-list">
            <li className="nav__item">
              <a href="/" className="nav__link">Home</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">Circles</a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">About</a>
            </li>
          </ul>
          <ul className="nav__item-list--secondary">
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

/*




  return (
    <header className="nav-header">
      <div className="nav-container row">
        
        <Link to="/" className="logo">
          <i className="fas fa-code icon"></i>
          <div className="name">InnerCircle</div>
        </Link>
        <nav className={toggle ? 'nav nav--visible' : 'nav'}>
          <ul className="nav__list  nav__list--primary">
            <li className="nav__item col">
              <a href="!#" className="nav__link">About</a>
            </li>
            <li className="nav__item col">
              <Link to="/blog" className="nav__link">Blog</Link>
            </li>
            <li className="nav__item col">
              <Link to="#!" className="nav__link">Community</Link>
            </li>
          </ul>
          { !loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks }</Fragment>)}          
        </nav>
      </div>
    </header>
  )
}

logout from the auth action, auth from the auth state reducer
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
bring in the entire react state, only access the state controlled by the auth, acccess isAuthenticated and loading values from the auth state
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);


  <ul className="nav__list nav__list--secondary">
  <li className="nav__item"><a href="#" className="nav__link">Sign In</a></li>
  <li className="nav__item"><a href="login.html" className="nav__link--button">Sign Up</a></li>
  </ul>

make hamburger button & link visible upon active class applied to mobile layout
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})




*/
// ------------------------------------------------------------
/*
import React, { useState, useEffect, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// useSelector brings selected parts of state into the component to populate the state with values, useDispatch calls actions
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../redux/actions/authActions';
// pass props from state into function component

const Navbar = () => {
  // call actions to update reducers / state
  const dispatch = useDispatch();
  const history = useHistory();
  // bring in authReducer state into the component, via rootReducer
  const userAuth = useSelector((state) => state.auth);
  const { isAuthenticated, loading } = userAuth;

  // prevent flash of incorrect theme
  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    localStorage.setItem('theme', 'light');
  }
  const [ colorTheme, setColorTheme ] = useState(currentTheme);
  
  useEffect(() => {
    // check for selected theme in LS
    const checkCurrTheme = localStorage.getItem('theme');
    // if true, set as current theme value in state
    if (checkCurrTheme) {
      setColorTheme(checkCurrTheme);
    }
  }, []);
  
  const themeSelect = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme', theme)
  }

  const handleLogout = () => {
    dispatch(logout(history));
  }
  // /feed is for all posts of users followed and self
  const authLinks = (
    <Fragment>
      <li className="nav__item">
        <Link to="/feed" className="nav__link">Feed</Link>
      </li>
      <li className="nav__item">
        <Link to="/dashboard" className="nav__link">Dashboard</Link>
      </li>
      <li className="nav__item">
        <a className="nav__link" onClick={handleLogout}>Logout</a>
      </li>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <li className="nav__item">
        <Link to="/register" className="nav__link">Sign Up</Link>
      </li>
      <li className="nav__item">
        <Link to="/login" className="nav__link">Login</Link>
      </li>
    </Fragment>
  );
  return (
    <HelmetProvider>
    <header className="nav__header">
      <Helmet>
        <html className={colorTheme} />
      </Helmet>
      <div className="nav__logo">
        <h1><Link to="/" className="logo">SquadUp</Link></h1>
      </div>
      {/* <input type="checkbox" id="toggler" className="toggler"/> 
      {/* <label htmlFor="toggler" className="burger">
        <span><i className="fas fa-bars"></i></span>
      </label> 
      <div tabIndex="0" className="burger">
        <i className="fas fa-bars"></i>
        <div className="nav-container row">
          <nav className="nav">
            <ul className="nav__item-list">
              <li className="nav__item">
                <Link to="/profiles" className="nav__link">Members</Link>
              </li>
              {/* <li className="nav__item">
                <Link to="/about" className="nav__link">About</Link>
              </li> 
              <Fragment>{isAuthenticated ? authLinks : guestLinks }</Fragment>
            </ul>
          </nav>
        </div>
      </div>
      <input type="checkbox" id="theme-toggle" className="theme-toggler"/>
      <label htmlFor='theme-toggle' className="theme-selection">
        <span className="fas fa-caret-down"></span>
        {/* <span className="caret"></span> 
      </label>
      <div className="theme theme-container">
        <ul className="theme__item-list dropdown">
          <li className="theme__item active" onClick={() => themeSelect('light')}>
            <div className="theme__link light"></div>
          </li>
          <li className="theme__item active" onClick={() => themeSelect('dark')}>
            <div className="theme__link dark"></div>
          </li>
          <li className="theme__item active" onClick={() => themeSelect('purple-prime')}>
            <div className="theme__link purple-prime"></div>
          </li>
          <li className="theme__item active" onClick={() => themeSelect('bee')}>
            <div className="theme__link bee"></div>
          </li>
          <li className="theme__item active" onClick={() => themeSelect('redcomet')}>
            <div className="theme__link redcomet"></div>
          </li>
        </ul>
      </div>
    </header>
    </HelmetProvider>
  );
};

export default Navbar;
*/