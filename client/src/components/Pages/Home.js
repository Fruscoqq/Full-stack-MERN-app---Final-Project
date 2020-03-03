import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext/authContext';
import Navbar from '../Layout/Navbar';
import picture from '../../images/report_presentation.svg';
import blob from '../../images/blob.svg';
import blob5 from '../../images/blob5.svg';
import wave from '../../images/wave.svg';

const Home = () => {

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, [])

  return (
    <div id="home">
      <div className="showcase">
        <div className="demo"></div>
        <Navbar />
        <div className="wrapper">
          <div className="row justify-content-center align-items-center px-3">
            {/* <img src={blob5} alt="" className="blob5" /> */}
            <div className="showcase-text col-md-6 col-sm-12 text-left p-5">
              <h1 className="showcase-header py-3">Submit Your Proposals Here</h1>
              <div className="bBorder"></div>
              <p className="py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente totam, autem exercitationem consequatur nihil natus provident odit explicabo recusandae inventore enim sint ipsum? Molestiae aspernatur alias dolores deserunt? Quas, maxime.</p>
              <div className="btn btn-primary my-3">Learn More</div>
              <img src={blob} className="blob" />
            </div>
            <div className="showcase-img col-6 d-none d-md-block p-3">
              <img src={picture} alt="" className="mx-auto d-block" />
            </div>
          </div>
        </div>
        {/* <img src={wave} /> */}
        <svg className="curved" xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 160"><path fill="#fff" fillOpacity="1" d="M0,256L120,234.7C240,213,480,171,720,165.3C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </div>
      <div id="what-it-does">
        <h4 className="display-4 text-center py-4">What this app do</h4>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, sint!</p>
      </div>
    </div >
  )
}

export default Home
