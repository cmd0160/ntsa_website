import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../utils/mutations";
import EditPass from "./EditPass";

const Edit = (props) => {
  const { _id, firstName, lastName, email, instruments, location } =
    props.userData.me;

  const [togglePass, setTogglePass] = useState(false);
  const togglePassHandler = () => {
    if (!togglePass) {
      setTogglePass(true);
    } else if (togglePass) {
      setTogglePass(false);
    }
  };

  const [formState, setFormState] = useState({
    firstName: {firstName},
    lastName: {lastName},
    email: {email},
    instruments: {instruments},
    location: {location},
  });

  const [updateUser, { error }] = useMutation(UPDATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const newInfo = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateUser({
        variables: {
          _id: _id,
          ...formState,
        },
      });
      console.log(data);
    } catch {
      console.log(error);
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
              <form onSubmit={newInfo}>
                <input
                  className="signup-input"
                  type="text"
                  placeholder={"First Name: " + firstName}
                  name="firstName"
                  id="firstName"
                  onBlur={handleChange}
                />
                <input
                  className="signup-input"
                  type="text"
                  placeholder={"Last Name: " + lastName}
                  name="lastName"
                  id="lastName"
                  onBlur={handleChange}
                />
                <input
                  className="signup-input"
                  type="email"
                  placeholder={"Email: " + email}
                  name="email"
                  id="email"
                  onBlur={handleChange}
                />
                <input
                  className="signup-input"
                  type="text"
                  placeholder={"Instruments: " + instruments}
                  name="instruments"
                  id="instruments"
                  onBlur={handleChange}
                />
                <input
                  className="signup-input"
                  type="text"
                  placeholder={"Location: " + location}
                  name="location"
                  id="location"
                  onBlur={handleChange}
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
        <EditPass togglePass={togglePassHandler} />
      )}
    </div>
  );
};

export default Edit;
