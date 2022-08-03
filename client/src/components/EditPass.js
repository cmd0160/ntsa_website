import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PASS } from "../utils/mutations";

const EditPass = (props) => {
  const [formState, setFormState] = useState({
    password: "",
  });

  const [updatePassword, { error }] = useMutation(UPDATE_PASS);

  const handleChange = (event) => {
    const { name, value } = event.target.value;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const newInfo = async (event) => {
    const { _id } = props.user;
      // console.log(_id)
    event.preventDefault();
    const dataObject = {
      id: _id,
      password: event.target[0].value,
    };
    // console.log(dataObject);
    try {
      const { data } = await updatePassword({
        variables: {
          ...dataObject,
        },
      });
      console.log(data);
      alert("Password Updated!");
      window.location.assign("/");
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
              id="password"
              onBlur={handleChange}
            />
            {/* <input
            className="signup-input"
            type="password"
            placeholder="Confirm New Password*"
            name="confirmPassword"
            id="confirmPassword"
          /> */}
            <div className="sign-up-button center ">
              <button className=" btn btn-primary" type="submit">
                SUBMIT
              </button>
              <p style={{ color: "blue" }} onClick={props.togglePass}>
                Back To Member Information
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPass;
