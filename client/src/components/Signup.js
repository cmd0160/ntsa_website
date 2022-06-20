import React from 'react'
const Signup = () => {


  return (
    <div>
        <div className="container" >
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
            placeholder="First Name"
            name="firstName"
            id="firstName"
          />
          <input
            className="form-input"
            type="password"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
          />
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            name="password"
            id="login-password"
          />
          <input
            className="form-input"
            type="password"
            placeholder="Confirm Password"
            name="password"
            id="login-password"
          />
          {/* <div className="row justify-content-center">
            <div className="sign-up-button center">
              <button className=" btn btn-primary" type="submit">
                LOGIN
              </button>
            </div>
          </div> */}
        </form>

        <div className="sign-up-button center">
          <button className=" btn btn-primary" type="submit">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup