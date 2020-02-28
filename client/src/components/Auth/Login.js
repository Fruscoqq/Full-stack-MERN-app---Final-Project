import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext/authContext';
import AlertContext from '../../context/Alert/alertContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if (authContext.isAuthenticated && authContext.user.role === 'Student') {
      props.history.push('/student')
    } else if (authContext.isAuthenticated && authContext.user.role === 'Teacher') {
      props.history.push('/teacher')
    }

    if (authContext.error === 'Invalid Credentials') {
      alertContext.setAlert('danger', 'Invalid Credentials')
      authContext.clearErrors();
    }
  }, [authContext.error, authContext.isAuthenticated, authContext.user, props.history])

  const { email, password } = user;


  const onChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      alertContext.setAlert('danger', 'Please enter all fields')
    } else {
      authContext.login({
        email,
        password
      })
    }
  }

  return (
    <div className="container" style={{ maxWidth: '400px' }}>
      <h2 className="text-center py-3">Account <span className="text-primary">Login</span></h2>
      <form className="form-group" onSubmit={onSubmit}>

        <label htmlFor="studentId">Email</label>
        <input type="email" className="form-control mb-3" name='email' value={email} onChange={onChange} />

        <label htmlFor="studentId">Password</label>
        <input type="password" className="form-control mb-3" name='password' value={password} onChange={onChange} />

        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  )
}

export default Login
