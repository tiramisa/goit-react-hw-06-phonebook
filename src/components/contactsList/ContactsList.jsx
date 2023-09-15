import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../myCss/index.module.css';
import { deleteContact } from 'components/redux/contactSlice';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.decorItem}>
      {name}: {phone}
      <button className={styles.decorButtonKill} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts.length === 0) return null;

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
