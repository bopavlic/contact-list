import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { initialFormValues } from './consts';
import { userSchema } from '../../services/validations/UserValidation';
import { validateYup } from '../../services/validations/validateYup';
import { useNavigate } from 'react-router-dom';
import { getDate } from '../../helpers/getDate';

const LoginForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleFieldChange = (event) => {
    setFormValues((oldState) => ({
      ...oldState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateYup(formValues, userSchema, setErrors);

    if (!isValid) {
      return;
    }

    localStorage.setItem('X-token', `${formValues.email} + ${getDate()}`);
    navigate('/contacts');
  };

  return (
    <div className='loginForm'>
      <form onSubmit={handleFormSubmit}>
        <TextField
          type='email'
          label='Email'
          name='email'
          placeholder='Your email address'
          className='loginFrom__field'
          onChange={handleFieldChange}
          value={formValues.email}
          error={!!errors.email}
          helperText={errors.email}
          required
        />
        <TextField
          type='password'
          label='Password'
          name='password'
          placeholder='Your password address'
          className='loginFrom__field'
          onChange={handleFieldChange}
          value={formValues.password}
          error={!!errors.password}
          helperText={errors.password}
          required
        />
        <Button type='submit' variant='contained' color='primary' size='large'>
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
