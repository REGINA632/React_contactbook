import React, { useState } from "react";
import "./EditContact.css";

const EditContact = (props) => {
  const [name, setName] = useState(props.editcontact.name);
  const [surname, setSurname] = useState(props.editcontact.surname);
  const [phone, setPhone] = useState(props.editcontact.phone);

  const handleSaveClick = () => {
    let newContact = { ...props.editcontact };
    newContact.name = name;
    newContact.surname = surname;
    newContact.phone = phone;

    props.handleSaveEdited(newContact);
    setName("");
    setSurname("");
    setPhone("");
  };

  return (
    <div className="modal">
      <div className="inner-modal">
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
        <button onClick={handleSaveClick} className="btn btn-success">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditContact;
