import React, { useState } from "react";
import "./AddContact.css";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    let newContact = {
      name,
      surname,
      phone,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
  };

  return (
    <div>
      <h2>New Contact</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        type="text"
        placeholder="Surname"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Phone"
      />
      <button onClick={handleClick} className="btn btn-success">
        Add
      </button>
    </div>
  );
};

export default AddContact;
