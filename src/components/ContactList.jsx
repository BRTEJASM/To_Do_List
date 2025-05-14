import React from 'react';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
          <button onClick={() => deleteContact(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;