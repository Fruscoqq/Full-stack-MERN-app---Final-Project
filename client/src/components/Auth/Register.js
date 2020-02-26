import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/Alert/alertContext';
import AuthContext from '../../context/AuthContext/authContext';

const Register = () => {

  const [user, setUser] = useState({
    studentId: '',
    name: '',
    email: '',
    password: '',
    password2: '',
    role: 'Student'
  })

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.error !== null) {
      alertContext.setAlert('danger', authContext.error)
    }
    authContext.clearErrors();
  }, [authContext.error])

  const { studentId, name, email, password, password2, role } = user;

  const onChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault();
    if (studentId === '' || name === '' || email === '' || password === '' || password2 === '') {
      alertContext.setAlert('danger', 'Please enter all fields')
    } else if (password !== password2) {
      alertContext.setAlert('danger', 'Passwords do not match')
    } else {
      authContext.register({
        studentId,
        name,
        email,
        password,
        role
      })
    }

  }

  return (
    <div className="container" style={{ maxWidth: '400px' }}>
      <h2 className="text-center py-3">Account <span className="text-primary">Register</span></h2>
      <form className="form-group" onSubmit={onSubmit}>
        <label htmlFor="studentId">Student ID</label>
        <input type="text" className="form-control" name='studentId' value={studentId} onChange={onChange} />

        <label htmlFor="name">Name</label>
        <input type="text" className="form-control mb-3" name='name' value={name} onChange={onChange} />

        <label htmlFor="studentId">Email</label>
        <input type="email" className="form-control mb-3" name='email' value={email} onChange={onChange} />

        <label htmlFor="studentId">Password</label>
        <input type="password" className="form-control mb-3" name='password' value={password} minLength="6" onChange={onChange} />

        <label htmlFor="password2">Confirm Password</label>
        <input type="password" className="form-control mb-3" name='password2' value={password2} onChange={onChange} />


        <label>Role</label>
        <select class="custom-select mb-3" name="role" value={role} onChange={onChange}>
          <option disabled>Choose...</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>
        <button type="submit" className="btn btn-primary btn-block">Register</button>
      </form>
    </div>
  )
}

export default Register
