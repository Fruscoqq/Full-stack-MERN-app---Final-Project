import React, { useContext, Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/authContext';
import logo from '../../images/logo.svg'
import Headroom from 'react-headroom';

const Navbar = () => {

  const authContext = useContext(AuthContext);
  const { user, logout, isAuthenticated } = authContext;

  let [pos, setPos] = useState(window.pageYOffset)
  let [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      let temp = window.pageYOffset

      setVisible(pos > temp);
      setPos(temp)
    };
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  })


  const onLogout = () => {
    logout();
  }




  const studentLinks = (
    <Fragment>
      <li className="nav-item nav-link">
        <i class="fas fa-user" /> Hello {user && user.name}
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
      <li className="nav-item nav-link"><i class="fas fa-user-tie" /> Hello {user && user.name}
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
      <li className="nav-item mr-5"><Link to="/register" className="nav-link btn btn-outline-light px-4">Sign Up</Link></li>
      <li className="nav-item mr-5"><Link to="/Login" className="nav-link btn px-3 btnSignup">Sign In</Link></li>
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
      {pos < 100 ? (<nav className="navbar navbar-expand-md text-primary font-weight-bold">
        <Link className="navbar-brand ml-5 brand my-3" to="/">
          <img src={logo} alt="" style={{ width: '80px' }} />
          {' '}IdeasHub
        </Link>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-bar top-bar"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse navGrid2" id="navbarNav">
          <ul className="navbar-nav ml-auto text-light my-3">
            {isRole}
          </ul>
        </div>
      </nav>)
        :
        (<Headroom><nav className="navbar navbar-expand-md navbar-light bg-primary font-weight-bold">
          <Link className="navbar-brand ml-5 brand my-3" to="/">
            <img src={logo} alt="" style={{ width: '80px' }} />
            {' '}IdeasHub
        </Link>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar top-bar bg-dark"></span>
            <span class="icon-bar middle-bar bg-dark"></span>
            <span class="icon-bar bottom-bar bg-dark"></span>
          </button>
          <div className="collapse navbar-collapse navGrid2" id="navbarNav">
            <ul className="navbar-nav ml-auto text-light my-3">
              {isRole}
            </ul>
          </div>
        </nav></Headroom>)}
    </div>
  )
}

export default Navbar
