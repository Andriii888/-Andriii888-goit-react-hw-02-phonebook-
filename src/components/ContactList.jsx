// // import PropTypes from "prop-types";
import { ContactItem } from './ContactItem';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        const { name, number, id } = contact;
        return <ContactItem name={name} number={number} key={id} />;
      })}
    </ul>
  );
};
