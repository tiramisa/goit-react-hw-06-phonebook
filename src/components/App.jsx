import React from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactsList from './contactsList/ContactsList';
import Filter from './filter/Filter';
import styles from '../myCss/index.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h2 className={styles.formTitle}>Form Contact</h2>
      <ContactForm />
      <h2 className={styles.formTitle}>Contact List</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}

export default App;
