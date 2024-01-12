import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import AddContact from "./components/contacts/AddContact";
import ContactList from "./components/contacts/ContactList";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="ui container main">
        <h1>Contact Manager App</h1>
        <Routes>
          <Route path="/contacts" element={<ContactList />} />
          <Route path="/addcontact" element={<AddContact />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
