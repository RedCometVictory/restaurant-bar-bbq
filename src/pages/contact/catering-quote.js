import React from 'react';
import Layout from '../../components/Layout';
import emailjs from 'emailjs-com';

const YOUR_SERVICE_ID = process.env.GATSBY_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.GATSBY_YOUR_TEMPLATE_ID;
const YOUR_USER_ID = process.env.GATSBY_YOUR_USER_ID;

export default function CateringQuote() {
  function sendEmail(e) {
  e.preventDefault();
  // email service udes, id of template, formdata, 
  emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_USER_ID)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    // reset form upon submit
    e.target.reset();
  }
  return (
    <Layout>
      <section className="contact">
        <h2>Catering Quote</h2>
        <div className="contact__section">
          <form className="form" onSubmit={sendEmail} data-netlify-recaptcha="true" data-netlify="true">
            <div className="form__item hidden">
              <input type="hidden" name="subject" className="form__input" value="Catering Quote" required/>
            </div>
            <div className="form__item">
              <label htmlFor="name" className="form__label">
                Your Name<span className="req">*</span>
              </label>
              <input type="text" name="name" className="form__input" required/>
            </div>
            <div className="form__item">
              <label htmlFor="phone" className="form__label">
                Phone Number
              </label>
              <input type="tel" name="phone" className="form__input" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890"/>
            </div>
            <div className="form__item">
              <label htmlFor="email" className="form__label">
                Your Email Address<span className="req">*</span>
              </label>
              <input type="email" name="email" className="form__input" required/>
            </div>
            <div className="form__item">
              <label htmlFor="numpeople" className="form__label">
                How Many People?
              </label>
              <input type="number" name="numpeople" className="form__input" />
            </div>
            <div className="form__item">
              <label htmlFor="message" className="form__label">
                Message<span className="req">*</span>
              </label>
              <textarea name="message" className="form__textarea" id="" cols="30" rows="10" placeholder="Write your message." required></textarea>
            </div>
            <div className="form__item">
              <div data-netlify-recaptcha="true"></div>
            </div>
            <div className="form__footer">
              <input type="submit" className="btn btn-primary ms-mr ms-mt" value="Send Message" />
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
