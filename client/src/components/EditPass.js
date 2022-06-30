import React from 'react'

const EditPass = (props) => {
  return (
    <div id="editPass-section">
    <h5 className="p-h center">Update Password:</h5>
    <div className="m-info">
      <div id="edit-form">
        <form>
        <input
            className="signup-input"
            type="password"
            placeholder="New Password*"
            name="password"
            id="login-password"
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Confirm New Password*"
            name="password"
            id="login-password"
          />
          <div className="sign-up-button center ">
            <button className=" btn btn-primary" type="submit">
              SUBMIT
            </button>
              <p style={{ color: "blue" }} onClick={props.togglePass} >Back To Member Information</p>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default EditPass