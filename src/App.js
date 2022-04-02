import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import LoginForm from './components/LoginForm/LoginForm';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
