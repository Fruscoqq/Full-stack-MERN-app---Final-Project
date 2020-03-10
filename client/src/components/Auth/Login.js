import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext/authContext';
import AlertContext from '../../context/Alert/alertContext';
import Alert from '../Layout/Alert';
import Footer from '../Layout/Footer';
import loginImg from '../../images/loginImg.svg'


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
    <div className="login">
      <div className="container py-5" style={{ width: '900px' }}>
        <Alert />
        <h2 className="text-center py-5 font-weight-bold">Account <span className="text-primary">Login</span></h2>
        <div className="row loginCard">
          <div className="col-md-6">
            <h3 className="text-center text-primary pb-3">Type in your details</h3>
            <form className="form-group" onSubmit={onSubmit}>
              <input type="email" placeholder="Email" className="form-control mb-3" name='email' value={email} onChange={onChange} />
              <input type="password" className="form-control mb-3" name='password' value={password} placeholder="Password" onChange={onChange} />

              <button type="submit" className="btn btn-block font-weight-bold">Login</button>
            </form>
          </div>
          <div className="col-md-6 d-none d-md-block text-center">
            <img src={loginImg} alt="login img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
