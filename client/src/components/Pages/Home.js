import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext/authContext';

const Home = () => {

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <h4>Home Page</h4>
    </div>
  )
}

export default Home
