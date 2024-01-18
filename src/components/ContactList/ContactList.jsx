import { ContactListItem } from 'components';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteHandler }) => {
  return (
    <>
      <ul className={css.contactlist}>
        {contacts.map(contact => {
          return (
            <ContactListItem
              contact={contact}
              key={contact.id}
              onDeleteHandler={onDeleteHandler}
            />
          );
        })}
      </ul>
    </>
  );
};
