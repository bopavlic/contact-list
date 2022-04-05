import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      const newContact = {
        id: _.uniqueId(),
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        birthday: action.payload.birthday,
        mobilePhone: action.payload.mobilePhone,
        phone: action.payload.phone,
        email: action.payload.email,
        pager: action.payload.pager,
        favorite: action.payload.favorite,
      };
      state.push(newContact);
    },
    sort(state, action) {
      if (action.payload.order === 'asc') {
        return [...state].sort((a, b) =>
          a[action.payload.col].toLowerCase() >
          b[action.payload.col].toLowerCase()
            ? 1
            : -1
        );
      }
      if (action.payload.order === 'dsc') {
        return [...state].sort((a, b) =>
          a[action.payload.col].toLowerCase() <
          b[action.payload.col].toLowerCase()
            ? 1
            : -1
        );
      }
      return 0;
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
    favoriteContact(state, action) {
      const findContact = state.find(
        (contact) => contact.id === action.payload
      );

      if (findContact.favorite === false) {
        findContact.favorite = true;
        return state;
      }
      if (findContact.favorite === true) {
        findContact.favorite = false;
        return state;
      }
    },
  },
});

export const { addContact, sort, deleteContact, favoriteContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
