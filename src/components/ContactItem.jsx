// // import PropTypes from "prop-types";

export const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li>
      <p>
        {name}:{number}
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
