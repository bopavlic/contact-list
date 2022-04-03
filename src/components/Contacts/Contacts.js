import { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Contacts = () => {
  const [contactList, setContactList] = useState([]);

  return (
    <div>
      <ContactForm setContactList={setContactList} />
      <ContactList contactList={contactList} setContactList={setContactList} />
    </div>
  );
};

export default Contacts;
