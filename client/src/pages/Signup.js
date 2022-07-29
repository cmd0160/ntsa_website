import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Paypal from "../components/Paypal";

const Signup = (props) => {
  const [enableBtn, setEnableBtn] = useState(false);

  const buttonHandler = () => {
    setEnableBtn(true);
  };

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    instruments: "",
    location: "",
  });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
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
          <h2>Memberships</h2>
          <p>
            Welcome to our NTSA signup page! Please review the following information
            and register for our organization below.
          </p>
        </div>
        <div className="center memberships">
          <h4 className="my-2">Professional Membership</h4>
          <h4>$25/year</h4>
          <p className="justify">
            Professional Members are teachers involved in Suzuki-style
            instruction for remuneration who hold a music degree from an
            accredited college/university and/or equivalent training/experience.
            Membership in SAA is required of Professional Members. Professional
            Members whose dues are current may vote, hold office, be listed in
            the NTSA Directory, enter students in NTSA activities, participate
            in Association events, and receive all mailings. Each teacher is
            expected to participate in the planning and execution of at least
            one, NTSA-sponsored activity per year. Individuals seeking
            Professional Membership should have completed Suzuki Unit I-A in
            their major- instrument with plans to continue their Suzuki
            development at regular intervals.
          </p>
          <h4 className="my-2">Coorporate/Institutional Membership</h4>
          <h4>$100/year</h4>
          <p className="justify">
            Corporate/Institutional Members include businesses and/or
            educational institutions which support the Bylaws and Code of
            Ethics. They are listed in the Directory and given opportunities to
            assist the Association as their expertise allows.
          </p>
          <h4 className="my-2">Affiliate/Family</h4>
          <h4>$25/year</h4>
          <p className="justify">
            Individuals who support Suzuki inspired instruction.
            Affiliate/Family Members whose dues are current will receive all
            communications, may attend all NTSA student/parent activities, and
            will be listed in the NTSA directory.
          </p>
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
            id="confirm-password"
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
          <Paypal buttonHandler={buttonHandler} />
            <button
              className={`btn ${enableBtn ? "btn-primary" : "btn-disabled"}`}
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      {error && <div>Signup failed</div>}
    </section>
  );
};

export default Signup;
