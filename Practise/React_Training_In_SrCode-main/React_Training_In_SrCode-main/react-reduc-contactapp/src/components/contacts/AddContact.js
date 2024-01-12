import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AddContact = () => {
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    //console.log("AddContact form submitted");
    //prepare contact :  dispatch ADD_CONTACT action addContact(contact)
    navigate("/contacts");
  };
  return (
    <div className="ui container center">
      <h2>Create Contact</h2>
      <div className="ui divider"></div>
      <div class="ui inverted segment">
        <form class="ui inverted form" onSubmit={onSubmitHandler}>
          <div class="two fields">
            <div class="field">
              <label>Name</label>
              <input placeholder="Enter Name" type="text" />
            </div>
            <div class="field">
              <label>Contact Number</label>
              <input placeholder="Contact Number" type="number" />
            </div>
          </div>
          <div className="two fields">
            <div class="field">
              <label>Email</label>
              <input placeholder="Enter Email" type="email" />
            </div>
            <div class="field">
              <label>Group</label>
              <select class="ui fluid dropdown">
                <option value="">Group</option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>

          <button class="ui inverted primary button">Submit</button>
          <Link to="/contacts" class="ui inverted secondary button">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
