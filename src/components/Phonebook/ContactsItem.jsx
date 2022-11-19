import React from 'react';
import PropTypes from 'prop-types';

import {
  ContactsListItem,
  ContactsListText,
  ContactsButtonDelete,
} from './Phonebook.styled';

const ContactsItem = ({ id, name, number, onDeleteContact }) => (
  <ContactsListItem>
    <ContactsListText>
      {name}: {number}
    </ContactsListText>

    <ContactsButtonDelete type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </ContactsButtonDelete>
  </ContactsListItem>
);

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
