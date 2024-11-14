import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <div className={s.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
