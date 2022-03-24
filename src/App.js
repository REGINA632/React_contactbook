import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";
import EditContact from "./Components/EditContact/EditContact";
import { useState } from "react";

function App() {
  let [contacts, setContacts] = useState([
    { id: 1, name: "Zhanara", surname: "Nurlanova", phone: "0703156656" },
    { id: 2, name: "Bektur", surname: "Atambaev", phone: "0706156656" },
  ]);
  let [editcontact, setEditContact] = useState([]);
  let [isEdit, setIsEdit] = useState(false);

  const handleNewContact = (newContact) => {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);
    setContacts(newContactsArray);
  };
  const handleDeleteContact = (id) => {
    let newContactArray = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContactArray);
  };
  const handleEditContact = (index) => {
    setEditContact(contacts[index]);
    console.log(contacts[index]);
    setIsEdit(true);
  };
  const handleSaveEdited = (newContact) => {
    let newContactArray = contacts.map((item) => {
      if (item.id === newContact.id) {
        return newContact;
      }
      return item;
    });
    setContacts(newContactArray);
    setIsEdit(false);
  };

  return (
    <div className="App">
      <AddContact handleNewContact={handleNewContact} />
      <ContactList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditContact={handleEditContact}
      />
      {isEdit ? (
        <EditContact
          editcontact={editcontact}
          handleSaveEdited={handleSaveEdited}
        />
      ) : null}
    </div>
  );
}

export default App;
