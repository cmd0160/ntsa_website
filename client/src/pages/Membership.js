import React from "react";
import ntsaPresident from "../../src/images/christine-cd.jpeg";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_USERS } from "../utils/queries";

const Membership = () => {
  const { loading, error, data } = useQuery(QUERY_ALL_USERS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <section id="membership_hero">
        <div className="container">
          <h1>Membership</h1>
        </div>
      </section>

      <h2 id='member-directory' className="membership-title p-3 center">Member Directory</h2>

      <section id="membership">

        {data.users.map((users) => {
          const { firstName, lastName, email, instruments, location } = users;
          
          return (
            <div key={firstName}>
              <div className="card">
                <div className="membership-image-container center">
                  <div className="membership-image-holder">
                    <img src={ntsaPresident} alt="" />
                  </div>
                </div>

                <div className="membership-info-container">
                  <div className="contact center">
                      <h3>{firstName} {lastName}</h3>
                  </div>

                  <hr className="center card-hr m-h"></hr>
                  <h4 className="p-h center">Member Information:</h4>
                  <div className="m-info">
                    <p className="center">
                      Instrument(s): <span>{instruments}</span>
                      <br></br>
                      Location: <span>{location}</span>
                      <br></br>
                    </p>
                    <div className="center">
                      <a href={"mailto:" + email}><i className="fa fa-envelope"></i></a>
                      <i className="fa-solid fa-phone"></i>
                    </div>
                  </div>
                  <hr className="center card-hr m-h"></hr>
                </div>
              </div>
              <hr className="center card-hr m-3"></hr>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Membership;
