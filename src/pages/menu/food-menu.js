import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout';
import SandwichItem from '../../components/food-items/SandwichItem';
import SmokeItem from '../../components/food-items/SmokeItem';
import SpecialItem from '../../components/food-items/SpecialItem';
import SideItem from '../../components/food-items/SideItem';
import AppetizerItem from '../../components/food-items/AppetizerItem';
import KidItem from '../../components/food-items/KidItem';
// json data refers to images in public folder
import foodData from '../../data/food-menu.json';

export default function FoodMenu() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect (() => {
    setHasMounted(true);
  }, []);
  
  if (!hasMounted) {
    return null;
  }
  return (
    <Layout>
      <section className="product">
        <div className="product__info">
          <div className="product__downloadables">
            {/* Download a paper menu <a>HERE</a> | Check out catering info <a>HERE</a> */}
          </div>
          <div className="product__container">
            <h2>Burgers & Sandwiches</h2>
            <div className="product__content">
              {foodData.sandwiches.map((sandwich, index) => {
                return <SandwichItem key={`menu-item-${index}`} sandwich={sandwich} />
              })}
            </div>
          </div>
          <div className="product__container">
            <h2>Smokehouse</h2>
            <div className="product__content">
              {foodData.smokehouse.map((data, index) => {
                return <SmokeItem key={`menu-item-${index}`} smokehouse={data} />
              })}
            </div>
          </div>
          <div className="product__container">
            <h2>Specialties</h2>
            <div className="product__content">
              {foodData.specialties.map((specialty, index) => {
                return <SpecialItem key={`menu-item-${index}`} specialty={specialty} />
              })}
            </div>
          </div>
          <div className="product__container">
            <h2>Sides</h2>
            <div className="product__content">
              {foodData.sides.map((side, index) => {
                return <SideItem key={`menu-item-${index}`} side={side} />
              })}
            </div>
          </div>
          <div className="product__container">
            <h2>Appetizers</h2>
            <div className="product__content">
              {foodData.appetizers.map((appetizer, index) => {
                return <AppetizerItem key={`menu-item-${index}`} appetizer={appetizer} />
              })}
            </div>
          </div>
          <div className="product__container">
            <h2>Kid's Meals</h2>
            <div className="product__content">
              {foodData.kidsmeals.map((kidsmeal, index) => {
                return <KidItem key={`menu-item-${index}`} kidsmeal={kidsmeal} />
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
