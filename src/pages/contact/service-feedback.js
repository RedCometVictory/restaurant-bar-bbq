import React from 'react';
import Layout from '../../components/Layout';
import emailjs from 'emailjs-com';

const YOUR_SERVICE_ID = process.env.GATSBY_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.GATSBY_YOUR_TEMPLATE_ID;
const YOUR_USER_ID = process.env.GATSBY_YOUR_USER_ID;

export default function ServiceFeedback() {
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
        <h2>Service Feedback</h2>
        <p>We do mess up at times. Let us know how to improve and on what order. Otherwise let us know what we did right.  We are always learning and want to serve you better.</p>
        <br />
        <p>If its poor quality food or timeliness of the order, let us know and help us tie the complaint to an order so we can be sure to correct it in the future.</p>
        <br />
        <p>Thank you!</p>
        <div className="contact__section">
          <form className="form" onSubmit={sendEmail} data-netlify-recaptcha="true" data-netlify="true">
            <div className="form__item hidden">
              <input type="hidden" name="subject" className="form__input" value="Service Feedback" required/>
            </div>
            <div className="form__item">
              <label htmlFor="name" className="form__label">
                Your Name
              </label>
              <input type="text" name="name" className="form__input" placeholder="First Name (Last Name optional)" />
            </div>
            <div className="form__item">
              <label htmlFor="email" className="form__label">
                Your Email Address
              </label>
              <input type="email" name="email" className="form__input" placeholder="email@mail.com" />
            </div>
            <div className="form__item">
              <label htmlFor="date" className="form__label" placeholder="mm/dd/yyyy">
                Order Date<span className="req">*</span>
              </label>
              <input type="date" name="date" className="form__input" required/>
            </div>
            <div className="form__item">
              <label htmlFor="order" className="form__label">
                Order Number<span className="req">*</span>
              </label>
              <input type="number" name="order" className="form__input" required/>
            </div>
            <div className="form__item">
              <label htmlFor="message" className="form__label">
                Message<span className="req">*</span>
              </label>
              <textarea name="message" className="form__textarea" id="" cols="30" rows="10" placeholder="Details please." required></textarea>
            </div>
            <div className="form__item">
              <div data-netlify-recaptcha="true" className="contact__captcha"></div>
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
