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
        <div className="container">
          <div className="image-container p-1">
            <div className="circular--landscape">
              <img src={pracPic} alt="" />
            </div>
            <h3 className="p-1">
              {firstName} {lastName}
            </h3>
            <h4>Member Status:</h4>
            <p className="active">Active</p>
          </div>
          <div className="info-container p-1">
            <h3 className="p-2 center">Member Information</h3>
            <div className="p-container">
              <p>
                First Name: <span>{firstName}</span>
              </p>
              <p>
                Last Name: <span>{lastName}</span>
              </p>
              <p>
                Email: <span>{email}</span>
              </p>
              <p style={{ color: "blue" }}>Change Password</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
