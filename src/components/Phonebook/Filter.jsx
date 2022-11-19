import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Phonebook.styled';

const Filter = ({ value, onChange }) => (
  <>
    <FilterLabel>Filter contacts by name</FilterLabel>
    <FilterInput
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search name"
    />
  </>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
