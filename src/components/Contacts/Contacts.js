import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts);
  return (
    <div>
      <ContactForm />
      <ContactList />
      {contacts.length > 0 && (
        <Link to={'favorites'}>
          <Button>Check your favorite list</Button>
        </Link>
      )}
    </div>
  );
};

export default Contacts;
