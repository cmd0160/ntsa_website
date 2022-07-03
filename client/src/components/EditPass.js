import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';

const EditPass = (props) => {

  const [formState, setFormState] = useState({
    password: []
  });

  const [updateUser, { error }] = useMutation(UPDATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target.value;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const newInfo = async (event) => {
    const { _id } = props.user;

    event.preventDefault();
    const dataObject = {
        password: event.target[0].value
    }
    console.log(dataObject);
    try {
      const { data } = await updateUser({
        
        variables: {
          _id: _id,
          dataObject,
        },
      });
      console.log(data);
      alert('Password Updated!')
    } catch {
      console.log(error);
    }
  };

  
  return (
    <div id="editPass-section">
    <h5 className="p-h center">Update Password:</h5>
    <div className="m-info">
      <div id="edit-form">
        <form onSubmit={newInfo}>
        <input
            className="signup-input"
            type="password"
            placeholder="New Password*"
            name="password"
            id="login-password"
            onChange={handleChange}
          />
          <input
            className="signup-input"
            type="password"
            placeholder="Confirm New Password*"
            name="password"
            id="confirm-password"
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