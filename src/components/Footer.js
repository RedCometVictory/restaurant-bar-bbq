import React from 'react';
import { FaFacebookF, FaInstagram, FaYelp, FaTwitter } from 'react-icons/fa';
// import { Link } from 'gatsby';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h4>Follow us on</h4>
        <a className="footer__social-item" href="https://www.facebook.com/thedenbrews">
          <div className="footer__social-icon"><FaFacebookF /></div>
        </a>
        <a className="footer__social-item" href="https://www.instagram.com/thedenbrews/">
          <div className="footer__social-icon"><FaInstagram /></div>
        </a>
        <a className="footer__social-item" href="https://www.yelp.com/biz/the-den-smokehouse-and-brewery-kerman">
          <div className="footer__social-icon"><FaYelp /></div>
        </a>
        <a className="footer__social-item" href="https://twitter.com/thedenbrews">
          <div className="footer__social-icon"><FaTwitter /></div>
        </a>
      </div>
      <div className="footer__social">
        <small>
          © The Den Smokehouse & Brewery LLC - est. 2018
        </small>
        <span className="footer__info">
          Website built by <strong>Jor-EL Sanchez</strong> - <span>Contact at acemiranda0093@att.net</span>
        </span>        
      </div>
    </footer>
  )
};