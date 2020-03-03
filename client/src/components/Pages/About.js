import React from 'react';
import Navbar from '../Layout/Navbar';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <p className="display-4 my-3">This is full stack React App for dissertation project</p>
        <h4>App version <strong>1.0.0</strong></h4>
      </div>
    </div>
  )
}

const navColor = {
  backgroundColor: 'red !important'
}

export default About
