import React from "react";
import pracPic from "../../src/images/christine-cd.jpeg";
import { useQuery } from "@apollo/client";
import { QUERY_CURRENT_USER } from "../utils/queries";

const Profile = () => {
  const { loading, error, data } = useQuery(QUERY_CURRENT_USER);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const { firstName, lastName, email } = data.me;

  return (
    <div>
      <section id="profile-page">
        <div className="outer-container">
          <div className="container">
            <h4 className="p-h left">
              {firstName} {lastName}
            </h4>
            <hr className="f-r card-hr"></hr>
            <div className="center">
              <img src={pracPic} className="card-img" alt="" />
            </div>
            <h5 className="center p-0">Member Status:</h5>
            <p className=" active center">Active</p>
            <hr className="f-l card-hr"></hr>
            <h5 className="p-h center">Member Information:</h5>
            <div className="m-info">
              <p>
                First Name: <span>{firstName}</span>
                <br></br>
                Last Name: <span>{lastName}</span>
                <br></br>
                Email: <span>{email}</span>
                <br></br>
                Instrument(s): <span>Violin, Viola</span>
                <br></br>
                Location: <span>Arlington, TX</span>
                <br></br>
              </p>
              <hr className="f-r card-hr"></hr>
              <div className="edits">
                <p style={{ color: "blue" }}>Edit Information</p>
                <p style={{ color: "blue" }}>Change Password</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
