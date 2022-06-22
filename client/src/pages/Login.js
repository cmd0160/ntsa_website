import React from "react";
import { useState } from "react";



import Signup from "../components/Signup";

const Login = () => {

    const [isActive, setIsActive] = useState(true);
    const isActiveHandler = () => {
        setIsActive(false)
    }


  return (
<section id="login-form">
    {isActive ? 
      <div className="container" onLoad={setIsActive}>
      <div className="exit-row">
        <i className="fa-solid fa-xmark"></i>
      </div>

      <div className="center">
        <h3>North Texas Suzuki Association</h3>
      </div>

      <form>
        <input
          className="form-input"
          type="text"
          placeholder="Email Address"
          name="email"
          id="login-email"
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          name="password"
          id="login-password"
        />
        <div className="row justify-content-center">
          <div className="sign-up-button center">
            <button className=" btn btn-primary" type="submit">
              LOGIN
            </button>
          </div>
        </div>
      </form>

      <div className="not-a-member center">
        <p>Not a member yet? Sign up here!</p>
      </div>
      <div className="sign-up-button center">
        <button className=" btn btn-primary" type="submit" onClick={isActiveHandler}>
          SIGNUP
        </button>
      </div>
    </div> : <Signup />} 


    </section>
  );
};

export default Login;
