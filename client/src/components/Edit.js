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
    const { name, value } = event.target.value;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(error);
  };

  const newInfo = async (event) => {

    const dataObject = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      instruments: event.target[3].value,
      location: event.target[4].value
    }
    event.preventDefault();
    try {
      const { data } = await updateUser({
        variables: {
          _id: _id,
          ...dataObject,
        },
      });
      console.log(data);
      alert('Member Info Updated!')
    } catch {
      console.log(event.error);
    }
  };

  return (
    <div id="edit-section">
      {!togglePass ? (
        <>
          <h5 className="p-h center">Update Member Information:</h5>
          {/* Future Development */}
          <p style={{ color: "blue" }} onClick={togglePassHandler}>
            Change Password
          </p>
          <div className="m-info">
            <div id="edit-form">
              <form onSubmit={newInfo}>
                <input
                  className="signup-input"
                  type="text"
                  name="firstName"
                  id="firstName"
                  defaultValue={firstName}
                  onBlur={handleChange}
                />
                <input
                  className="signup-input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  defaultValue={lastName}
                  onBlur={handleChange}
                />
                <input
                  className="signup-input"
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={email}
                  onBlur={handleChange}
                />
                <input
                  className="signup-input"
                  type="text"
                  placeholder={"Instruments: " + instruments}
                  name="instruments"
                  id="instruments"
                  defaultValue={instruments}
                  onBlur={handleChange}
                />
                <input
                  className="signup-input"
                  type="text"
                  name="location"
                  id="location"
                  defaultValue={location}
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
        <EditPass togglePass={togglePassHandler} user={props.userData.me} />
      )}
    </div>
  );
};

export default Edit;
