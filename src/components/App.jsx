import { Component } from 'react';
import { Contact } from './Contact';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleClickAdd = () => {
    const { name, number } = this.state;
    const id = nanoid();
    this.setState(prevState=>{return {contacts:[{ id, name, number },...prevState.contacts]} });
     this.reset();
   
  };

  reset = () => {
    this.setState({name:'',number:''} );
   
  };

  
  render() {
   const{name,number,contacts} = this.state;

    return (
      <div>
        <h2>Name</h2>
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
        </button>
        <h2>Contacts</h2>
        <ul><Contact contacts={contacts}/></ul>
        
      </div>
    );
  }
}
