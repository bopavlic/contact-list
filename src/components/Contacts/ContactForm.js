import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { useState, useMemo } from 'react';
import { initialFormValues } from './consts';

const ContactForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [contactType, setContactType] = useState('');

  const handleFieldChange = (event) => {
    setFormValues((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.prevenetDefault();
  };

  const checkContactType = useMemo(() => {
    switch (contactType) {
      case 'Mobile Phone':
        return {
          type: 'number',
          label: 'Mobile Phone',
          name: 'mobilePhone',
          placeholder: 'Enter mobile phone',
        };
      case 'Phone':
        return {
          type: 'number',
          label: 'Phone',
          name: 'phone',
          placeholder: 'Enter phone',
        };
      case 'Email':
        return {
          type: 'email',
          label: 'Email',
          name: 'email',
          placeholder: 'Enter Email',
        };
      case 'Pager':
        return {
          type: 'text',
          label: 'Pager',
          name: 'pager',
          placeholder: 'Enter pager',
        };
      default:
        return 'none';
    }
  }, [contactType]);

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        type='text'
        label='First Name'
        name='firstName'
        placeholder='Your first name address'
        onChange={handleFieldChange}
        value={formValues.firstName}
        error={!!errors.firstName}
        helperText={errors.firstName}
        required
      />
      <TextField
        type='text'
        label='Last Name'
        name='lastName'
        placeholder='Your last name address'
        onChange={handleFieldChange}
        value={formValues.lastName}
        error={!!errors.lastName}
        helperText={errors.lastName}
        required
      />
      <TextField
        type='date'
        name='birthday'
        label='Birhday'
        InputLabelProps={{ shrink: true }}
        onChange={handleFieldChange}
        value={formValues.birthday}
        required
      />
      <FormControl fullWidth sx={{ margin: '1rem' }}>
        <InputLabel id='demo-simple-select-label'>Contact</InputLabel>
        <Select
          m={2}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={contactType}
          label='Contact'
          onChange={(e) => setContactType(e.target.value)}
        >
          <MenuItem value={'Mobile Phone'}>Mobile Phone</MenuItem>
          <MenuItem value={'Phone'}>Phone</MenuItem>
          <MenuItem value={'Email'}>Email</MenuItem>
          <MenuItem value={'Pager'}>Pager</MenuItem>
        </Select>
      </FormControl>
      {contactType && (
        <TextField
          type={checkContactType.type}
          name={checkContactType.name}
          label={checkContactType.label}
          onChange={handleFieldChange}
          required
        />
      )}
      <Button type='submit' variant='contained' color='primary' size='large'>
        add contact
      </Button>
    </form>
  );
};

export default ContactForm;
