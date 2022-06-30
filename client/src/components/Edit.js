import React, { useState } from "react";
import EditPass from "./EditPass";

const Edit = (props) => {
  const { firstName, lastName, email, instruments, location } =
    props.userData.me;

  const [togglePass, setTogglePass] = useState(false);

  const togglePassHandler = () => {
    if (!togglePass) {
      setTogglePass(true);
    } else if (togglePass) {
      setTogglePass(false);
    }
  };

  return (
    <div id="edit-section">
      {!togglePass ? (
        <>
          <h5 className="p-h center">Update Member Information:</h5>
          <p style={{ color: "blue" }} onClick={togglePassHandler}>
            Change Password
          </p>
          <div className="m-info">
            <div id="edit-form">
              <form>
                <input
                  className="signup-input"
                  type="text"
                  placeholder={"First Name: " + firstName}
                  name="firstName"
                  id="firstName"
                />
                <input
                  className="signup-input"
                  type="text"
                  placeholder={"Last Name: " + lastName}
                  name="lastName"
                  id="lastName"
                />
                <input
                  className="signup-input"
                  type="email"
                  placeholder={"Email: " + email}
                  name="email"
                  id="email"
                />
                <input
                  className="signup-input"
                  type="text"
                  placeholder={"Instruments: " + instruments}
                  name="instrument"
                  id="instrument"
                />
                <input
                  className="signup-input"
                  type="text"
                  placeholder={"Location: " + location}
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
                  <p style={{ color: "blue" }} onClick={props.togglePage}>
                    Back To Profile
                  </p>
                </div>
              </form>
              {/* {error && <div>Signup failed</div>} */}
            </div>
          </div>
        </>
      ) : (
        <EditPass togglePass={togglePassHandler}/>
      )}
    </div>
  );
};

export default Edit;
