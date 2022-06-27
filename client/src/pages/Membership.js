import React from "react";
import ntsaPresident from "../../src/images/christine-cd.jpeg";

const Membership = () => {
  return (
    <div>
      <section id="membership_hero">
        <div className="container">
          <h1>Membership</h1>
        </div>
      </section>

      <h2 className="membership-title p-3 center">Member Directory</h2>


      <section id="membership">
        <div className="card">
          <div className="membership-image-container center">
            <div className="membership-image-holder">
              <img src={ntsaPresident} alt="" />
            </div>
          </div>

          <div className="membership-info-container">
            <div className="contact">
              <div>
                <h3>Christine Collins-Davis</h3>
              </div>
            </div>

            <hr className="center card-hr m-h"></hr>
            <h4 className="p-h center">Member Information:</h4>
            <div className="m-info">
              <p className="center">
                Instrument(s): <span>Violin, Viola</span>
                <br></br>
                Location: <span>Arlington, TX</span>
                <br></br>
              </p>
              <div className="center">
              <i className="fa fa-envelope"></i>
              <i className="fa-solid fa-phone"></i>
            </div>
            </div>
            <hr className="center card-hr m-h"></hr>
          </div>
        </div>

        <hr className="center card-hr m-3"></hr>

      </section>
    </div>
  );
};

export default Membership;
