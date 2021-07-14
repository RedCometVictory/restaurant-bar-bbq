import React from 'react';
import { FaAngleUp } from 'react-icons/fa';

export default function SideItem({
  side: { title, image, description, prices }
}) {
  return (
    <div className="menu-item">
      <div className="menu-item__title">{title}</div>
      <div className="menu-item__container">
        <div className="menu-item__container-inner">
          <input type="checkbox" className="menu-item__toggler" />
          <div className="menu-item__circle">
            <FaAngleUp className="menu-item__arrow" />
          </div>
          <div className="menu-item__image">
            <img src={image} alt="food item" />
          </div>
          <div className="menu-item__description">{description}</div>
        </div>
        <div className="menu-item__prices">
          {prices.map((item, index) => (
            <div className="menu-item__price" key={`item-${index}`}>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}