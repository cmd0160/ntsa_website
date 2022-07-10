import React from "react";

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

      <section id="teacher-development">
        <div className="container">
          <div className="container-description">
            <h2>Amazon Smile</h2>
            <p>
              A simple way for you to support the NTSA every time you shop, at no cost to you.
            </p>
            <button className="btn btn-primary">
              <a style={{ color: "white" }} href="https://smile.amazon.com/charity?orig=%2F">
                Amazon
              </a>
            </button>
          </div>
        </div>
      </section>

      <section id="scholarships">
        <div className="container">
          <div className="container-description">
            <h2>Donation</h2>
            <p>Make a charitable donation to the NTSA via PayPal.</p>
            <button className="btn btn-primary">
              <a style={{ color: "white" }} href="http://www.paypal.com">
                PayPal
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
