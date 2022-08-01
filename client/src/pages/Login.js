import React from "react";
import { useState } from "react";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
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
      <div className="container">
        <div className="exit-row">
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
            {/* <a href='_blank'><p className="center f-password" >Forgot Password?</p></a> */}
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
        <Link to="/signup">
          <button className=" btn btn-primary" type="submit">
              SIGNUP
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
