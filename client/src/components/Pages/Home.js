import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext/authContext';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import picture from '../../images/studentOnBooks.svg';
import wave from '../../images/wave.png';
import blob from '../../images/blob.svg';
import cloud from '../../images/clouds1.png';
import rocket from '../../images/rocket.png';
import computer from '../../images/computer.png';
import smartphone from '../../images/smartphone.png';
import earth from '../../images/earth.svg';
import saturn from '../../images/saturn.svg';
import mysvg from '../../images/mysvg1.svg';
import teacher from '../../images/teacher.svg';
import student from '../../images/student.svg';
import contact from '../../images/contact.svg';
// import studentOnBooks from '../../images/studentOnBooks.svg';




const Home = () => {

  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, [])

  return (
    <div id="home">
      <div className="showcase text-light">
        {/* <div className="demo"></div> */}
        <div className="saturn">
          {/* <svg
            width="600" height="600" viewBox="0 0 600 600" xmlns="http:/wwww3.org/2000/svg"
          >
            <g transform="translate(300,300)">
              <path d="M185.2,-141.5C228.1,-93.9,242.7,-17.6,228.4,54.9C214.1,127.5,170.8,196.2,111.2,221.2C51.5,246.3,-24.6,227.6,-90,193.6C-155.5,159.5,-210.3,110,-226.9,48.6C-243.5,-12.9,-221.8,-86.2,-177.6,-134.2C-133.4,-182.1,-66.7,-204.5,2.2,-206.3C71.1,-208.1,142.3,-189.1,185.2,-141.5Z" fill="rgba(249,168,38, 0.3)" />
            </g>
          </svg> */}
          <img src={saturn} alt="" />
        </div>
        <Navbar />
        <div className="container">
          <div className="row justify-content-center align-items-center px-3 showcaseRow">
            <div className="showcase-text col-md-6 col-sm-12 text-left p-5">
              <h1 className="showcase-header py-3 font-weight-bold">Submit Your Proposals Here</h1>
              <div className="bBorder"></div>
              <p className="py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente totam, autem exercitationem consequatur nihil natus provident odit explicabo recusandae inventore enim sint ipsum? Molestiae aspernatur alias dolores deserunt? Quas, maxime.</p>
              <div className="btn btn-danger text-light my-3">Learn More</div>
              <img src={blob} className="blob" />
            </div>
            <div className="showcase-img col-6 d-none d-md-block p-3">
              <img src={picture} alt="" className="mx-auto d-block" />
            </div>
          </div>
        </div>
        <img src={earth} alt="earth img" className="earth" />
        <img src={wave} />
      </div>
      {/* Why choose this app */}
      <div id="why-choose-us">
        <div className="container">
          <h1 className="text-center font-weight-bold pb-3" style={{ color: '#EF5362' }}>Why choose this app</h1>
          <div className="row">
            <div className="col-sm-4 align-self-center p-3 box1">
              <div className="">
                <img src={computer} alt="" className="py-3" />
              </div>
              <h3 className="">It's blazing fast!</h3>
              <p className="lead ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, assumenda?</p>
            </div>
            <div className="col-sm-4 d-sm-block d-none  p-1 box2">
              <div className="whiteBlock d-none d-sm-block"></div>
              <img src={rocket} alt="" className="rocket d-none d-sm-block" />
            </div>
            <div className="col-sm-4 align-self-center box3">
              <div className="py-3">
                <img src={smartphone} alt="" />
              </div>
              <h3>Works on every device!</h3>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat.</p>
            </div>
          </div>
        </div>
        <img src={cloud} alt="" className="cloudImg" />
      </div>
      {/* What this does */}
      <div id="what-it-does" className="py-3">
        <h2 className="text-center text-danger font-weight-bold pb-3">
          What this does?
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-6 align-self-center">
              <p className="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam distinctio eos nihil maxime reiciendis. Beatae optio similique rerum repellat error laborum?</p>
            </div>
            <div className="col-6 text-right">
              <img src={mysvg} alt="svg img" />
            </div>
          </div>
        </div>
      </div>
      <div className="student-teacher">
        <div className="container">
          <div className="row py-5">
            <div className="col-sm-6 text-center border-right">
              <div>
                <img src={teacher} alt="teacher reading img" className="py-3" />
              </div>
              <h3 className="py-3 font-weight-bold">Teachers</h3>
              <p className="py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dignissimos!</p>
            </div>
            <div className="col-sm-6 text-center">
              <div>
                <img src={student} alt="student sitting img" className="py-3" />
              </div>
              <h3 className="py-3 font-weight-bold">Student</h3>
              <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis. Non, similique!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-sm-6 align-self-center">
              <img src={contact} alt="" />
            </div>
            <div className="col-sm-6 form-container">
              <h2 className="text-center py-3">Contact Us</h2>
              {/* Contact Form */}
              <form action="/action_page.php">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-user-circle"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i class="fas fa-envelope"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                </div>

                <textarea class="form-control" aria-label="With textarea" placeholder="Message.."></textarea>

                <button type="submit" className="btn btn-danger btn-block">Send <i class="fas fa-paper-plane ml-1"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
