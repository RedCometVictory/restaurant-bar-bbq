import React from 'react';
import Layout from '../../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';

export default function Fresno() {
  return (
    <Layout>
      <section className="location">
        <div className="location__picture">
          <StaticImage src="../../images/locationImg/IMG_3322.jpeg" alt="the den" />
        </div>
        <div className="location__info">
          <div className="location__sec">
            <h3>Address</h3>
            <p>4230 W Swift Ave #105</p>
            <p>Fresno, CA 93722</p>
            <p>United States</p>
          </div>
          <div className="location__sec">
            <p>COMING SOONish <br /><br />
            This is going to be our brewery production facility with a tasting room. No food will be prepared on site. However, we will have it catered periodically.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}