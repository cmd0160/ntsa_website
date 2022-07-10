import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    instruments: "",
    location: ""
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(value);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // if (formState.password == confirmPassState) {
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    // } else {
    //   alert("The passwords you have entered do not match");
    // }
  };

  return (
    <section id="signup-section">

      <section id="about_hero">
        <div className="container">
          <h1>Signup</h1>
        </div>
      </section>

      <div className="signup-container">

        <div className="center m-3">
          <h3>North Texas Suzuki Association</h3>
          <p>Welcome to our NTSA signup page! Please fill out the information below to register for our organization.</p>
        </div>

        <form onSubmit={handleFormSubmit}>
          <input
            className="signup-input"
            type="text"
            placeholder="First Name*"
            name="firstName"
            id="firstName"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Last Name*"
            name="lastName"
            id="lastName"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="email"
            placeholder="Email*"
            name="email"
            id="email"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Password*"
            name="password"
            id="login-password"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Confirm Password*"
            name="password"
            id="login-password"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Instrument(s) 'Ex. Violin, Piano, etc.'"
            name="instruments"
            id="instruments"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="City, State"
            name="location"
            id="location"
            onChange={handleChange}
          />
          {/* <div className="row justify-content-center">
            <div className="sign-up-button center">
              <button className=" btn btn-primary" type="submit">
                LOGIN
              </button>
            </div>
          </div> */}
          <div className="sign-up-button center">
            <button className=" btn btn-primary" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
        {error && <div>Signup failed</div>}
      </div>
    </section>
  );
};

export default Signup;
