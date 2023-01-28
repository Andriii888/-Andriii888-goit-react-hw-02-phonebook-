import { Component } from 'react';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import {ContactForm} from './ContactForm';
import {Filter} from './Filter'


export class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
    // name: '',
    // number: '',
  };

  // handleInputChange = e => {
  //   this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  // };

  handleClickAdd = () => {
    const { name, number } = this.state;
    const id = nanoid();
    this.setState(prevState=>{return {contacts:[{ id, name, number },...prevState.contacts]} });
     this.reset();
   
  };

  // reset = () => {
  //   this.setState({name:'',number:''} );
   
  // };

  changeFilter=(e)=>{
this.setState({filter:e.currentTarget.value})
  }

  getVisibleContacts = ()=>{
    const{contacts,filter} = this.state;
    const normalizedFilter = filter.toLowerCase();
return contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))
  }

  forSubmitHandler=(data)=>{
    const { name, number } = data;
    const id = nanoid();
    this.setState(prevState=>{return {contacts:[{ id, name, number },...prevState.contacts]} });
  }

  render() {
   const{filter} = this.state;
const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.forSubmitHandler}/>
        {/* <h2>Name</h2>
        <input
          onChange={this.handleInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h2>Number</h2>
        <input
          onChange={this.handleInputChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="button" onClick={this.handleClickAdd}>
          Add contact
        </button> */}
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        {/* <h3>Finde contacts by name</h3>
        <input
          onChange={this.changeFilter}
          type="text"
          name="filter"
          value={filter}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Finde contacts by name"
          required
        /> */}
        <ContactList contacts={visibleContacts}/>
        
      </div>
    );
  }
}

// // форма додавання контактів, список контактів, елемент списку контактів та фільтр пошуку.
// {/* <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
// </div> */}