import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';

import ContactForm from './ContactForm';
import Contacts from './Contacts';
import Filter from './Filter';
import { PhonebookTitle, ContactsTitle } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const prevContacts = localStorage.getItem('Contacts');
    const prevParsedContacts = JSON.parse(prevContacts);

    if (prevParsedContacts) {
      this.setState({ contacts: prevParsedContacts });
    }

    const prevFilter = localStorage.getItem('Filter');
    const prevParsedFilter = JSON.parse(prevFilter);

    if (prevParsedFilter) {
      this.setState({ filter: prevParsedFilter });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('Contacts', JSON.stringify(nextContacts));
    }

    const nextFilter = this.state.filter;
    const prevFilter = prevState.filter;

    if (nextFilter !== prevFilter) {
      localStorage.setItem('Filter', JSON.stringify(nextFilter));
    }
  }

  changeContacts = newContact => {
    const { contacts } = this.state;

    const errorArray = contacts.filter(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (errorArray.length === 0) {
      this.setState(({ contacts }) => ({
        contacts: [{ ...newContact, id: shortid.generate() }, ...contacts],
      }));
      toast.success('You add a new contact in your Phonebook!');
    } else {
      toast.info('This contact is already in your Phonebook!');
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { filter } = this.state;

    return (
      <>
        <PhonebookTitle>Phonebook</PhonebookTitle>

        <ContactForm onChangeContacts={this.changeContacts} />
        {/* <ContactForm onSubmit={values => this.changeContacts(values)} /> */}

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        <ToastContainer
          autoClose={2000}
          position="top-center"
          theme="colored"
        />
      </>
    );
  }
}
