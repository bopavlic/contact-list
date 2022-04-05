import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import ContactDetails from './components/Contacts/ContactDetails';
import Contacts from './components/Contacts/Contacts';
import FavoriteContacts from './components/Contacts/FavoriteContacts';
import LoginForm from './components/LoginForm/LoginForm';

const App = () => {
  const RequireAuth = () => {
    const token = localStorage.getItem('X-token');
    if (!token) return <Navigate to='/' replace />;
    return <Outlet />;
  };

  return (
    <div className='app'>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/contacts/:id' element={<ContactDetails />} />
          <Route path='/contacts/favorites' element={<FavoriteContacts />} />
        </Route>
        <Route path='/' element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default App;
