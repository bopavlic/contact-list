import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const FavoriteContacts = () => {
  const contacts = useSelector((state) => state.contacts);
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    const filterList = contacts.filter((contact) => contact.favorite === true);
    setFavoriteList(filterList);
  }, [contacts]);

  return (
    <div>
      <h1>List of favorite contacts</h1>
      {favoriteList.length > 0
        ? favoriteList.map((favorite) => (
            <Paper sx={{ margin: '1rem', padding: '1rem' }}>
              <p>First Name: {favorite.firstName}</p>
              <p>Last Name: {favorite.lastName}</p>
              <p>Birthday: {favorite.birthday}</p>
              <p>
                Mobile Phone:{' '}
                {favorite.mobilePhone ? favorite.mobilePhone : 'x'}
              </p>
              <p>Phone: {favorite.phone ? favorite.phone : 'x'}</p>
              <p>Email: {favorite.email ? favorite.email : 'x'}</p>
              <p>Pager: {favorite.pager ? favorite.pager : 'x'}</p>
            </Paper>
          ))
        : 'List is empty.'}
    </div>
  );
};

export default FavoriteContacts;
