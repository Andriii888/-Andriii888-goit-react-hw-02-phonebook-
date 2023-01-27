// // import {Formik,Form,Field,ErrorMessage} from 'formik';
// // import * as yup from 'yup';
// import { ContactList } from './ContactList';
// // import PropTypes from "prop-types";

export const Contact = ({contacts})=>{
  return contacts.map(contact => {
    const {name,number,id} = contact;
   return <li key={id}>
      {name} {number}
    </li>}
  );
  
   

//   // this.setState({ [e.currentTarget.name]: e.currentTarget.value });
}
