import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm, ContactList, Filter } from 'components';

import {
  addContact,
  removeContact,
  setFilter,
} from '../redux/contacts/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(store => store.contacts.contacts);
  const filter = useSelector(store => store.contacts.filter);

  const formSubmitHandler = data => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLocaleLowerCase()
    );
    if (hasDuplicates) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    const contact = {
      id: nanoid(),
      ...data,
    };

    const action = addContact(contact);
    dispatch(action);
  };

  const onChangeFilter = e => {
    const value = e.target.value;
    const action = setFilter(value);
    dispatch(action);
  };

  const onDeleteHandler = contactId => {
    const action = removeContact(contactId);
    dispatch(action);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(filter.trim().toLocaleLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChangeFilter={onChangeFilter} filter={filter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteHandler={onDeleteHandler}
      />
    </div>
  );
};
