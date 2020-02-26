import React, { useState, useContext } from 'react';
import AuthState from '../../context/AuthContext/authState';
import AlertContext from '../../context/Alert/alertContext';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user;

  const alertContext = useContext(AlertContext);

  const onChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      alertContext.setAlert('danger', 'Please enter all fields')
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
