import styled from '@emotion/styled';

// ==========   Form   ==========
export const PhonebookTitle = styled.h1`
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;

  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const ContactsTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;

  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.black};
`;

// ==========   Contacts   ==========

export const ContactsList = styled.ul`
  margin-left: 10px;
  padding-left: 0;
`;

export const ContactsListItem = styled.li`
  margin-bottom: 5px;
  margin-right: 5px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export const ContactsListText = styled.span`
  min-width: 185px;
  color: ${props => props.theme.colors.black};
`;

export const ContactsButtonDelete = styled.button`
  width: 80px;
  padding: 2px;

  font: inherit;
  cursor: pointer;
  outline: none;
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radius.normal};

  font-size: ${props => props.theme.fontSizes.xs};
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.red};
  background-color: ${props => props.theme.colors.green};
`;

// ==========   Phonebook   ==========

export const PhonebookForm = styled.form`
  margin-top: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: ${props => props.theme.borders.normal}
    ${props => props.theme.colors.green};
  border-radius: ${props => props.theme.radius.normal};
`;

export const PhonebookFormButton = styled.button`
  width: 150px;
  margin-right: 20px;
  padding: 12px;

  font: inherit;
  cursor: pointer;
  outline: none;
  border: ${props => props.theme.borders.none};
  border-radius: ${props => props.theme.radius.normal};

  font-weight: ${props => props.theme.fontWeights.middle};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.indigo};
`;

export const PhonebookFormLabel = styled.label`
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.black};
`;

export const PhonebookFormInput = styled.input`
  margin-bottom: 30px;
`;

// ==========   Filter   ==========

export const FilterLabel = styled.label`
  margin-right: 10px;
`;

export const FilterInput = styled.input`
  padding: 2px;
`;
