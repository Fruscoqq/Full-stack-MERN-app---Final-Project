import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/authContext';

const Navbar = () => {

  const authContext = useContext(AuthContext);
  const { user, logout, isAuthenticated } = authContext;

  const onLogout = () => {
    logout();
  }

  const studentLinks = (
    <Fragment>
      <li className="nav-item"><span className="nav-link">Hello {user && user.name}</span></li>
      <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
      <li className="nav-item"><Link to="/student" className="nav-link">Student</Link></li>
      <li className="nav-item"><a href="#" className="nav-link" onClick={onLogout}>
        <i className="fas fa-sign-out-alt">Logout</i>
      </a></li>
    </Fragment>
  )

  const teacherLinks = (
    <Fragment>
      <li className="nav-item"><span className="nav-link">Hello {user && user.name}</span></li>
      <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
      <li className="nav-item"><Link to="/teacher" className="nav-link">Teacher</Link></li>
      <li className="nav-item"><a href="#" className="nav-link" onClick={onLogout}>
        <i className="fas fa-sign-out-alt">Logout</i>
      </a></li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
      <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
      <li className="nav-item"><Link to="/Login" className="nav-link">Login</Link></li>
    </Fragment>
  )

  let isRole;
  if (isAuthenticated && user.role === 'Student') {
    isRole = studentLinks;
  } else if (isAuthenticated && user.role === 'Teacher') {
    isRole = teacherLinks;
  } else {
    isRole = guestLinks;
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {isRole}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
