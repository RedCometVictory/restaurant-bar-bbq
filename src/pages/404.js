import React from 'react'
import { Link } from 'gatsby';
export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__card">
        <h2>404 - Not Found!</h2>
        <div>
          <small className="not-found__text">Apologies, the page or resource you're looking for does not exist!</small>
        </div>
        <div className="not-found__link">
          <Link to="/" className="btn">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
