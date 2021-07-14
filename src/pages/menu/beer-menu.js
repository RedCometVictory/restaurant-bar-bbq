import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import HomeItem from '../../components/beer-items/HomeItem'; 
import GuestItem from '../../components/beer-items/GuestItem'; 
import CanItem from '../../components/beer-items/CanItem';
// json data refers to images in public folder
import beerData from '../../data/beer-menu.json';

export default function BeerMenu() {
  const [hasMounted, setHasMounted] = useState(false);
  const [popup, setPopup] = useState(false);
  useEffect (() => {
    setHasMounted(true);
  }, []);
  useEffect(() => {
    setPopup(true);
  }, [])
  if (!hasMounted) {
    return null;
  }
  if (popup) {
    return (
      <Layout>
        <section className="product">
          <div className="product__popup">
            <div className="product__popup-title">
              <h2>Are you 21 years old?</h2>
            </div>
            <div className="product__popup-confirm">
              <div className="product__popup-btn one">
                <Link to="/">No</Link>
              </div>
              <div className="product__popup-btn two">
                <div onClick={() => setPopup(false)}>Yes</div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
  return (
    <Layout>
      <section className="product">
        <div className="product__info">
          <div className="product__downloadables">
            {/* Download a paper menu <a>HERE</a> | Check out catering info <a>HERE</a> */}
          </div>
          <div className="product__container">
            <h2>House Beer</h2>
            <div className="product__content">
              {beerData.houseBeer.map((home, index) => {
                return <HomeItem key={`menu-item-${index}`} home={home} />
              })}
            </div>
          </div>
          <div className="product__container">
            <h2>Guest Beer</h2>
            <div className="product__content">
              {beerData.guestBeer.map((guest, index) => {
                return <GuestItem key={`menu-item-${index}`} guest={guest} />
              })}
            </div>
          </div>
          <div className="product__container">
            <h2>Cans</h2>
            <div className="product__content">
              {beerData.cans.map((can, index) => {
                return <CanItem key={`menu-item-${index}`} can={can} />
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
