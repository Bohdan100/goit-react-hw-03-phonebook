import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import {
  PhonebookForm,
  PhonebookFormButton,
  PhonebookFormLabel,
  PhonebookFormInput,
} from './Phonebook.styled';

class ContactForm extends Component {
  static propTypes = { onChangeContacts: PropTypes.func.isRequired };

  state = { name: '', number: '' };

  nameId = shortid.generate();
  telId = shortid.generate();

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target;
    name === 'name' && this.setState({ [name]: value });
    name === 'number' && this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onChangeContacts(this.state);
    // this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <PhonebookForm onSubmit={this.handleSubmit}>
          <PhonebookFormLabel htmlFor={this.nameId}>Name</PhonebookFormLabel>
          <PhonebookFormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={shortid.generate()}
            value={name}
            onChange={this.handleChange}
          />
          <PhonebookFormLabel htmlFor={this.telId}>Number</PhonebookFormLabel>
          <PhonebookFormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
          <PhonebookFormButton type="submit">Add contact</PhonebookFormButton>
        </PhonebookForm>
      </>
    );
  }
}

export default ContactForm;
