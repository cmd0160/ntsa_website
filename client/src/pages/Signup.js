import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Paypal from "../components/Paypal";
import MembershipCards from "../components/MembershipCards";

const Signup = (props) => {
  const [paypalCost, setpaypalCost] = useState("");
  const [paypalBtns, setpaypalBtns] = useState(true);
  // const [enableBtn, setEnableBtn] = useState(false);

  // const buttonHandler = () => {
  //   setEnableBtn(true);
  // };

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
      alert("Registration successful!")
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    // } else {
    //   alert("The passwords you have entered do not match");
    // }
  };

  // This is passed down to membership cards
  const paypalInfoClickHandler = (event) => {
    const paypalTotal = event.target.value;
    alert("Membership selected.");
    setpaypalCost(paypalTotal);
    setpaypalBtns(false);
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
          <h4>
            Welcome to our NTSA signup page!<br></br> Please review the following
            information below to register for our organization.
          </h4>
        </div>

        <div className="center m-2">
          <h3>Step. 1</h3>
          <p>Select level of membership.</p>
        </div>
        <MembershipCards paypalInfoClickHandler={paypalInfoClickHandler} />

        <div className="center m-2">
          <h3>Step. 2</h3>
          <p>Fill out the following information.</p>
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
            name="password*"
            id="confirm-password"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Instrument(s) 'Ex. Violin, Piano, etc.*'"
            name="instruments"
            id="instruments"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="City, State*"
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
          <div className="center m-2">
            <h3>Step. 3</h3>
            <p>Follow the PayPal link to submit membership payment.</p>
          </div>
          <div className="sign-up-button center">
            <Paypal paypalCost={paypalCost} paypalBtns={paypalBtns}/>
            <div className="center m-2">
              <h3>Step. 4</h3>
              <p>Click submit.</p>
            </div>
            <button
            className="btn btn-primary"
              // className={`btn ${enableBtn ? "btn-primary" : "btn-disabled"}`}
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
