import React from 'react';
import Layout from '../../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

export default function Kerman() {
  return (
    <Layout>
      <section className="location">
        <div className="location__picture">
          <StaticImage src="../../images/locationImg/IMG_5505.jpg" alt="the den" />
        </div>
        <div className="location__info">
          <div className="location__sec">
            <h3>Address</h3>
            <p>651 S Madera Ave</p>
            <p>Kerman, CA 93630</p>
            <p>United States</p>
          </div>
          <div className="location__sec">
            <h3>Phone</h3>
            <p className="phone">(559) 755-3412</p>
          </div>
          <div className="location__sec">
            <h3>Hours</h3>
            <div className="location__sec-sub">
              <div className="location__days">
                <p>Sun - Wed:</p>
                <p>Thu - Fri:</p>
                <p>Sat:</p>
              </div>
              <div className="location__time">
                <p> 4:00 pm-8:00 pm</p>
                <p> 11:30 am-9:00 pm</p>
                <p> 4:00 pm-8:00 pm</p>
              </div>
            </div>
          </div>
          <div className="location__sec">
            <p>Our original location. The atmosphere is good. Families always welcome! Come on in and visit us. We cater, get a quote by filling out the form under "Contact".</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
