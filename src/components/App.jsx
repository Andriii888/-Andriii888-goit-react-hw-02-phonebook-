import { Component } from 'react';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { Appstyle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  forSubmitHandler = data => {
    const { name, number } = data;
    const id = nanoid();
    const addedContacts = [];

    this.state.contacts.filter(contact => {
      const heveContact =
        contact.name.toLowerCase() === data.name.toLowerCase();
      return heveContact && addedContacts.push(contact);
    });

    if (addedContacts.length === 0) {
      this.setState(prevState => {
        return { contacts: [{ id, name, number }, ...prevState.contacts] };
      });
    } else {
      return alert(`${name} is already in contacts`);
    }
  };

  deleteContact = id => {
    this.setState(p => ({
      contacts: p.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Appstyle>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.forSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Appstyle>
    );
  }
}
