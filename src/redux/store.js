import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from '../features/contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
});
