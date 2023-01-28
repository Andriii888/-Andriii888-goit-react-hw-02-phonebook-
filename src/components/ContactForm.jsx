import {Component} from 'react';

export class ContactForm extends Component {
state = {
name:'',
number:'',
}
render() {
    const {name,number}= this.state;
   return <>
   <h2>Name</h2>
   <form >
    <label htmlFor="name"><input
          onChange={this.handleInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /></label>
         <h2>Number</h2>
    <label htmlFor="number"><input
          onChange={this.handleInputChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /></label>
        <button type="submit" onSubmit={this.handleClickAdd}>
          Add contact
        </button>
    </form></>
}
}