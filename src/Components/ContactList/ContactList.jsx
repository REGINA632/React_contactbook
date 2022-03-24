import React from "react";
import { Card, Button } from "react-bootstrap";

const ContactList = (props) => {
  return (
    <div>
      {props.contacts.map((item, index) => (
        <Card
          style={{ width: "18rem", margin: "50px" }}
          key={item.id}
          className="my-3"
        >
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2">{item.surname}</Card.Subtitle>
            <Card.Text>{item.phone}</Card.Text>
            <Button
              className="btn-success"
              style={{ marginRight: "20px" }}
              onClick={() => props.handleDeleteContact(item.id)}
            >
              Delete
            </Button>
            <Button
              className="btn-success"
              onClick={() => props.handleEditContact(index)}
            >
              Edit
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
