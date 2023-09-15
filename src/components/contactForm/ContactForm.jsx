import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import styles from '../../myCss/index.module.css';
import { addContact } from 'components/redux/contactSlice';

const INITIAL_STATE = {
  phone: '',
  name: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const { name, phone } = formData;

    const isValidatedForm = validateForm();
    if (isValidatedForm) {
      const newContact = { id: nanoid(), name, phone };
      dispatch(addContact(newContact));
      resetForm();
    }
  };

  const validateForm = () => {
    const { name, phone } = formData;
    if (!name || !phone) {
      alert('Please fill in all fields!');
      return false;
    }
    return handleGetUniqueContacts(name);
  };

  const resetForm = () => setFormData(INITIAL_STATE);

  const handleGetUniqueContacts = name => {
    const isExistContact = !!contacts.find(contact => contact.name === name);

    if (isExistContact) {
      alert('Contact already exists. Please create a new one.');
      return false;
    }

    return true;
  };

  const { name, phone } = formData;
  return (
    <form className={styles.decorForm} onSubmit={handleFormSubmit}>
      <input
        className={styles.decorInput}
        type="text"
        name="name"
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChangeForm}
      />
      <input
        className={styles.decorInput}
        type="text"
        name="phone"
        placeholder="Enter phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
        onChange={handleChangeForm}
      />
      <button className={styles.decorButton} type="submit">
        Add
      </button>
    </form>
  );
};

export default ContactForm;
