import React from "react";

const Edit = (props) => {
    const { firstName, lastName, email, instruments, location } = props.userData.me;
    
  return (
    <div>
      <h5 className="p-h center">Update Member Information:</h5>
      <div className="m-info">
        <div id="edit-form">
          <form>
            <input
              className="signup-input"
              type="text"
              placeholder={firstName}
              name="firstName"
              id="firstName"
            />
            <input
              className="signup-input"
              type="text"
              placeholder={lastName}
              name="lastName"
              id="lastName"
            />
            <input
              className="signup-input"
              type="email"
              placeholder={email}
              name="email"
              id="email"
            />
            <input
              className="signup-input"
              type="text"
              placeholder={instruments}
              name="instrument"
              id="instrument"
            />
            <input
              className="signup-input"
              type="text"
              placeholder={location}
              name="location"
              id="location"
            />
            {/* <div className="row justify-content-center">
            <div className="sign-up-button center">
              <button className=" btn btn-primary" type="submit">
                LOGIN
              </button>
            </div>
          </div> */}
            <div className="sign-up-button center ">
              <button className=" btn btn-primary" type="submit">
                SUBMIT
              </button>
                <p style={{ color: "blue" }} onClick={props.togglePage} >Back To Profile</p>
            </div>
          </form>
          {/* {error && <div>Signup failed</div>} */}
        </div>
      </div>
    </div>
  );
};

export default Edit;
