import React from "react";
import edImage from "./../images/music_ed.jpeg";

const Donate = () => {
  return (
    <div id="donate-section">
      <section id="donate_hero">
        <div className="container">
          <h1>Donate</h1>
        </div>
      </section>

      <div className="donation-info-con center">
        <h2 className="center p-3">Welcome To Our Donation Page</h2>
        <p className="donation-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          maxime ab molestias, eos eveniet debitis minus voluptatem atque. Ea
          velit eaque quisquam quis magni architecto magnam adipisci eveniet,
          odit cumque?
        </p>
      </div>

      <hr></hr>

      <section id="amazon-smile">
        <div className="container container-card">
          <div className="image-container">
            <img src={edImage} alt="" />
          </div>
          <div className="container-description">
            <h2>Amazon Smile</h2>
            <p>
              Stay up to date with our teacher development event taking place on
              MLK weekend.
            </p>
            <button className="btn btn-primary">
              <a style={{ color: "white" }} href="http://www.Amazon.com">
                Amazon
              </a>
            </button>
          </div>
        </div>
      </section>

      <section id="scholarships">
        <div className="container container-card">
          <div className="container-description">
            <h2>Donation</h2>
            <p>Click the button below to make a donation via PayPal</p>
            <button className="btn btn-primary">
              <a style={{ color: "white" }} href="http://www.paypal.com">
                PayPal
              </a>
            </button>
          </div>
          <div className="image-container">
            <img src={edImage} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
