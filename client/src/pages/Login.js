import React from "react";
import { useState } from "react";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
// import { useHistory } from "react-router-dom";
import Signup from "../components/Signup";


const Login = () => {

    const [isActive, setIsActive] = useState(true);
    const isActiveHandler = () => {
        setIsActive(false)
    }

    const [inputState, setInputState] = useState({ email: "", password: "" });


    const [login, { error }] = useMutation(LOGIN_USER);


    const formSubmission = async (event) => {
      event.preventDefault();
      try {
        const loginResponse = await login({
          variables: {
            email: inputState.email,
            password: inputState.password,
          },
        });
  
        const token = loginResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };

    const stateChange = (event) => {
      const { name, value } = event.target;
      setInputState({
        ...inputState,
        [name]: value,
      });
    };

    // const history = useHistory();
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

      <form onSubmit={formSubmission}>
        <input
          className="form-input"
          type="text"
          placeholder="Email Address"
          name="email"
          id="login-email"
          onChange={stateChange}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          name="password"
          id="login-password"
          onChange={stateChange}
        />
        <div className="row justify-content-center">
          <div className="sign-up-button center">
            <button className=" btn btn-primary" type="submit">
              LOGIN
            </button>
          </div>
          {error ? (
              <div>
                <p>The login information you have entered is incorrect.</p>
              </div>
            ) : null}
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
