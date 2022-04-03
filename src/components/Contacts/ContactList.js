import React, { useCallback } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = (props) => {
  const { contactList, setContactList } = props;

  const handleDeleteContact = useCallback(
    (id) => {
      const filtered = contactList.filter((contact) => contact.id !== id);
      setContactList(filtered);
    },
    [contactList, setContactList]
  );

  return (
    contactList.length > 0 && (
      <div style={{ maxHeight: '500px', overflow: 'auto' }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead align='center'>
              <TableRow align='center'>
                <TableCell>ID</TableCell>
                <TableCell align='center'>First Name</TableCell>
                <TableCell align='center'>Last Name</TableCell>
                <TableCell align='center'>Birthday</TableCell>
                <TableCell align='center'>Mobile Phone</TableCell>
                <TableCell align='center'>Phone</TableCell>
                <TableCell align='center'>Email</TableCell>
                <TableCell align='center'>Pager</TableCell>
                <TableCell align='center'>Favorite</TableCell>
                <TableCell align='center'>Info</TableCell>
                <TableCell align='center'>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contactList.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell component='th' scope='row'>
                    {contact.id}
                  </TableCell>
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
                  <TableCell align='center'>
                    {contact.favorite ? 'true' : <StarBorderIcon />}
                  </TableCell>
                  <TableCell align='center'>
                    <InfoIcon />
                  </TableCell>
                  <TableCell align='center'>
                    <DeleteIcon
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
