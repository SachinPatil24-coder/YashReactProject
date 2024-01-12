import React from "react";

const ContactItem = (props) => {
  const { contact, srNo } = props;
  return (
    <tr>
      <td>{srNo}</td>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
      <td>{contact.group}</td>
      <td class="center aligned">
        <button class="ui inverted primary button mini">Edit</button> &nbsp;{" "}
        <button class="ui inverted red button mini">Delete</button>
      </td>
    </tr>
  );
};

export default ContactItem;
