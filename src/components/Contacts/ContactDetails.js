import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { initialFormValues } from './consts';

const ContactDetails = () => {
  const contacts = useSelector((state) => state.contacts);
  const { id } = useParams();
  const [contactDetails, setContactDetails] = useState(initialFormValues);

  const tableHeadRow = [
    { displayName: 'ID' },
    { displayName: 'First Name' },
    { displayName: 'Last Name' },
    { displayName: 'Birthday' },
    { displayName: 'Mobile Phone' },
    { displayName: 'Phone' },
    { displayName: 'Email' },
    { displayName: 'Pager' },
  ];

  useEffect(() => {
    const selectedContact = contacts.find((contact) => contact.id === id);
    setContactDetails(selectedContact);
  }, [contacts, id]);

  return (
    <TableContainer sx={{ maxWidth: '80vw' }} component={Paper}>
      <Table>
        <TableHead align='center'>
          <TableRow>
            {tableHeadRow.map(({ displayName }) => (
              <TableCell align='center' key={displayName}>
                {displayName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='center'>{contactDetails.id}</TableCell>
            <TableCell align='center'>{contactDetails.firstName}</TableCell>
            <TableCell align='center'>{contactDetails.lastName}</TableCell>
            <TableCell align='center'>{contactDetails.birthday}</TableCell>
            <TableCell align='center'>
              {contactDetails.mobilePhone ? contactDetails.mobilePhone : 'x'}
            </TableCell>
            <TableCell align='center'>
              {contactDetails.phone ? contactDetails.phone : 'x'}
            </TableCell>
            <TableCell align='center'>
              {contactDetails.email ? contactDetails.email : 'x'}
            </TableCell>
            <TableCell align='center'>
              {contactDetails.pager ? contactDetails.pager : 'x'}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactDetails;
