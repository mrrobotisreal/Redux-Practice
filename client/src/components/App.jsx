import { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './Header.jsx';
import Auth from './Auth.jsx';
import Counter from './Counter.jsx';
import UserProfile from './UserProfile.jsx';

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '8%', flexDirection: 'column'}}>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </div>
  );
};

export default App;