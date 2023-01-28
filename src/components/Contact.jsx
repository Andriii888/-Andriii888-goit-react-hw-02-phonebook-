// // import PropTypes from "prop-types";

export const Contact = ({contacts})=>{
  return contacts.map(contact => {
    const {name,number,id} = contact;
   return <li key={id}>
      {name}:{number}
    </li>}
  );
}
