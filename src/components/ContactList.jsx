// // import PropTypes from "prop-types";

import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <ContactItem
            name={name}
            number={number}
            key={id}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};
