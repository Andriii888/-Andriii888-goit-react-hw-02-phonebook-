// // import PropTypes from "prop-types";

export const ContactItem = ({name,number,id})=>{
   
     return <li key={id}>
        {name}:{number}
      </li>
    
  }