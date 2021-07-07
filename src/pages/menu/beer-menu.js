import React from 'react';
import Layout from '../../components/Layout';
import HomeItem from '../../components/beer-items/HomeItem'; 
import GuestItem from '../../components/beer-items/GuestItem'; 
import CanItem from '../../components/beer-items/CanItem'; 
// import beerData from '../../../content/beer-menu.json';
import beerData from '../../data/beer-menu.json';
// {profiles.length > 0 ? (
//   profiles.map(profile => (
//     <ProfileItem key={profile.id} profile={profile} />
//   ))
// ) : (
//   <h4>No profiles found...</h4>
// )}
export default function BeerMenu() {
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
