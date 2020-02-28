import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/authContext';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user, loading } = authContext;
  return (
    <Route {...rest} render={props => {
      if (!isAuthenticated) {
        return <Redirect to='/login' />
      } else {
        return <Component {...props} />
      }
    }} />
  )
}

export default PrivateRoute
