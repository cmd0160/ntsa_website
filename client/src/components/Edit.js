import React from 'react'

const Edit = () => {
  return (

    <div id="edit-form">
        <form>
          <input
            className="signup-input"
            type="text"
            placeholder="First Name*"
            name="firstName"
            id="firstName"
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Last Name*"
            name="lastName"
            id="lastName"
          />
          <input
            className="signup-input"
            type="email"
            placeholder="Email*"
            name="email"
            id="email"
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Instrument(s) 'Ex. Violin, Piano, etc.'"
            name="instrument"
            id="instrument"
          />
          <input
            className="signup-input"
            type="text"
            placeholder="City, State"
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
          <div className="sign-up-button center">
            <button className=" btn btn-primary" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
        {/* {error && <div>Signup failed</div>} */}

    </div>
  )
}

export default Edit