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
          Welcome to our Donate page! Please follow the link to submit donations
          to our organization.
        </p>
      </div>

      <hr></hr>

      <div className="donate-links">
        <section>
          <div className="donate-container">
            <div>
              <h2>Amazon Smile</h2>
              <p>
                A simple way for you to support the NTSA every time you shop, at
                no cost to you.
              </p>
              <button className="btn btn-primary">
                <a
                  style={{ color: "white" }}
                  href="https://smile.amazon.com/ch/20-0595873"
                >
                  Amazon
                </a>
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="donate-container">
            <div>
              <h2>PayPal Donation</h2>
              <p>Make a charitable donation to the NTSA via PayPal.</p>
              <button className="btn btn-primary">
                <a
                  style={{ color: "white" }}
                  href="https://www.paypal.com/paypalme/NTSuzuki?country.x=US&locale.x=en_US"
                >
                  PayPal
                </a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Donate;
