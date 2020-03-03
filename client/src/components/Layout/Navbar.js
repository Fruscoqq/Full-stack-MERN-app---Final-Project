import React, { useContext, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/authContext';
import logo from '../../images/logo.png'

const Navbar = () => {

  const authContext = useContext(AuthContext);
  const { user, logout, isAuthenticated } = authContext;

  const [width, setWidth] = useState();

  const onLogout = () => {
    logout();
  }

  // To get window width
  const dynamicNav = () => {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
      setWidth(window.innerWidth)
    }
  }
  dynamicNav();



  const studentLinks = (
    <Fragment>
      <li className="nav-item nav-link text-light">
        <i class="fas fa-user" />Hello {user && user.name}
      </li>
      <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
      <li className="nav-item"><Link to="/student" className="nav-link">Student</Link></li>
      <li className="nav-item"><a href="#" className="nav-link" onClick={onLogout}>
        <i className="fas fa-sign-out-alt" /> Logout
      </a></li>
    </Fragment>
  )

  const teacherLinks = (
    <Fragment>
      <li className="nav-item nav-link"><i class="fas fa-user-tie" /> {user && user.name}
      </li>
      <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
      <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
      <li className="nav-item"><Link to="/teacher" className="nav-link">Teacher</Link></li>
      <li className="nav-item"><a href="#" className="nav-link" onClick={onLogout}>
        <i className="fas fa-sign-out-alt" /> Logout
      </a></li>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <li className="nav-item mr-5"><Link to="/" className="nav-link">Home</Link></li>
      <li className="nav-item mr-5"><Link to="/about" className="nav-link">About</Link></li>
      <li className="nav-item mr-5"><Link to="/register" className="nav-link btn btn-outline-light px-4">Sign In</Link></li>
      <li className="nav-item mr-5"><Link to="/Login" className="nav-link btn btn-dark px-3">Sign Up</Link></li>
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
      {width < 784
        ?
        (<nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary ">
          <Link className="navbar-brand ml-5 brand" to="/">IdeasHub</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto ">
              {isRole}
            </ul>
          </div>
        </nav>)
        :
        (<nav className="navbar fixed-top navbar-expand-md navbar-dark">
          <Link className="navbar-brand ml-5 brand" to="/">IdeasHub</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon border-none"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto ">
              {isRole}
            </ul>
          </div>
        </nav>)
      }
    </div>
  )
}

export default Navbar
