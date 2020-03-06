import React from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <div id="about">
        <div className="container">
          <p className="display-4 my-3 text-primary">This is full stack React App for dissertation project</p>
          <h4 className="text-light">App version <strong className="text-warning">1.0.0</strong></h4>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
