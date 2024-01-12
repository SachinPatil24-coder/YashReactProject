import React from "react";
import classes from "./ContactList.module.css";
import { Link } from "react-router-dom";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contacts } = useSelector((state) => state.contacts);
  console.log(contacts);
  return (
    <React.Fragment>
      <h2>Contact List</h2>
      <div className="ui divider"></div>
      <div className="ui left aligned basic segment">
        <Link to="/addcontact" class="ui blue labeled icon button">
          Create New Contact
          <i class="add icon"></i>
        </Link>
        <div class="ui left icon action input">
          <i class="search icon"></i>
          <input type="text" placeholder="Order #" />
          <div class="ui blue submit button">Search</div>
        </div>
      </div>
      <div className={classes["contact-list"]}>
        <table className="ui selectable inverted table">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Group</th>
              <th class="center aligned">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => {
              return (
                <ContactItem
                  srNo={index + 1}
                  key={contact.id}
                  contact={contact}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default ContactList;
