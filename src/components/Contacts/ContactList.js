import { useCallback, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { filterRowForTable } from '../../helpers/filterRowForTable';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  favoriteContact,
  sort,
} from '../../features/contacts/contactsSlice';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const [searchValue, setSearchValue] = useState('');
  const [order, setOrder] = useState('asc');
  const dispatch = useDispatch();

  const sortTableByColumn = (col) => {
    dispatch(sort({ order, col }));
    setOrder(order === 'asc' ? 'dsc' : 'asc');
  };

  const getArrow = (order) => {
    if (order === 'asc') return '↑';
    return '↓';
  };

  const handleDeleteContact = useCallback(
    (id) => {
      dispatch(deleteContact(id));
    },
    [dispatch]
  );

  const handleFavoriteContact = useCallback(
    (id) => {
      dispatch(favoriteContact(id));
    },
    [dispatch]
  );

  const contactDetails = [
    { displayName: 'ID', sorting: 'id' },
    { displayName: 'First Name', sorting: 'firstName' },
    { displayName: 'Last Name', sorting: 'lastName' },
    { displayName: 'Birthday', sorting: 'birthday' },
    { displayName: 'Mobile Phone', sorting: 'mobilePhone' },
    { displayName: 'Phone', sorting: 'phone' },
    { displayName: 'Email', sorting: 'email' },
    { displayName: 'Pager', sorting: 'pager' },
  ];

  return (
    contacts.length > 0 && (
      <div style={{ maxHeight: '500px', overflow: 'auto' }}>
        <TextField
          placeholder='Search for contact'
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead align='center'>
              <TableRow align='center'>
                {contactDetails.map(({ displayName, sorting }) => (
                  <TableCell
                    sx={{ cursor: 'pointer' }}
                    key={sorting}
                    onClick={() => sortTableByColumn(sorting)}
                    align='center'
                  >
                    {displayName} {getArrow(order)}
                  </TableCell>
                ))}
                <TableCell align='center'>Favorite</TableCell>
                <TableCell align='center'>Info</TableCell>
                <TableCell align='center'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterRowForTable(contacts, searchValue).map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell align='center'>{contact.id}</TableCell>
                  <TableCell align='center'>{contact.firstName}</TableCell>
                  <TableCell align='center'>{contact.lastName}</TableCell>
                  <TableCell align='center'>{contact.birthday}</TableCell>
                  <TableCell align='center'>
                    {contact.mobilePhone ? contact.mobilePhone : 'X'}
                  </TableCell>
                  <TableCell align='center'>
                    {contact.phone ? contact.phone : 'X'}
                  </TableCell>
                  <TableCell align='center'>
                    {contact.email ? contact.email : 'X'}
                  </TableCell>
                  <TableCell align='center'>
                    {contact.pager ? contact.pager : 'X'}
                  </TableCell>
                  <TableCell
                    onClick={() => handleFavoriteContact(contact.id)}
                    align='center'
                  >
                    {contact.favorite ? (
                      <StarIcon sx={{ cursor: 'pointer' }} />
                    ) : (
                      <StarBorderIcon sx={{ cursor: 'pointer' }} />
                    )}
                  </TableCell>
                  <TableCell align='center'>
                    <Link to={`${contact.id}`}>
                      <InfoIcon />
                    </Link>
                  </TableCell>
                  <TableCell align='center'>
                    <DeleteIcon
                      sx={{ cursor: 'pointer' }}
                      onClick={() => handleDeleteContact(contact.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  );
};

export default ContactList;
