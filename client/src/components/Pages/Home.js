import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext/authContext';
import Navbar from '../Layout/Navbar';
import picture from '../../images/showcaseImg.svg';
import wave from '../../images/wave.png';
import blob from '../../images/blob.svg';
import cloud from '../../images/clouds1.png';
import rocket from '../../images/rocket.png';
import computer from '../../images/computer.png';
import smartphone from '../../images/smartphone.png';
import planet from '../../images/planet.png';
import moon from '../../images/moon.svg';
import mysvg from '../../images/mysvg1.svg';
import teacher from '../../images/teacher.svg';
import student from '../../images/student.svg';
import contact from '../../images/contact.svg';




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
        <div className="cornerWave">
          {/* <svg
            width="600" height="600" viewBox="0 0 600 600" xmlns="http:/wwww3.org/2000/svg"
          >
            <g transform="translate(300,300)">
              <path d="M185.2,-141.5C228.1,-93.9,242.7,-17.6,228.4,54.9C214.1,127.5,170.8,196.2,111.2,221.2C51.5,246.3,-24.6,227.6,-90,193.6C-155.5,159.5,-210.3,110,-226.9,48.6C-243.5,-12.9,-221.8,-86.2,-177.6,-134.2C-133.4,-182.1,-66.7,-204.5,2.2,-206.3C71.1,-208.1,142.3,-189.1,185.2,-141.5Z" fill="rgba(249,168,38, 0.3)" />
            </g>
          </svg> */}
          <img src={moon} alt="" />
        </div>
        <Navbar />
        <div className="wrapper">
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
        <img src={planet} alt="" className="blob5" />
        {/* <svg className="blob5"
          width="600"
          height="600"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(300,300)">
            <path d="M153.5,-203.4C197.2,-179.4,229.9,-132.4,234.8,-84.1C239.7,-35.8,216.8,13.6,194.4,57.1C171.9,100.5,149.7,138.1,117.4,164.4C85,190.7,42.5,205.9,-5.4,213.3C-53.3,220.7,-106.6,220.4,-140.3,194.5C-174.1,168.6,-188.3,117.2,-197.5,68.9C-206.7,20.6,-210.8,-24.6,-200.5,-67.8C-190.1,-111,-165.3,-152.2,-129.5,-178.7C-93.7,-205.2,-46.8,-217.1,4,-222.6C54.9,-228.2,109.7,-227.3,153.5,-203.4Z" fill="rgba(249,168,38,0.1)" />
          </g>
        </svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#F4F5FA" fill-opacity="1" d="M0,288L120,272C240,256,480,224,720,224C960,224,1200,256,1320,272L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
        <img src={wave} />
      </div>
      <div id="why-choose-us">
        <div className="wrapper">
          <h1 className="text-center font-weight-bold pb-3" style={{ color: '#EF5362' }}>Why choose this app</h1>
          <div className="row">
            <div className="col-4 align-self-center box1">
              <div className="text-right">
                <img src={computer} alt="" className="py-3" />
              </div>
              <h3 className="text-right">It's blazing fast!</h3>
              <p className="lead text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, assumenda?</p>
            </div>
            <div className="col-4 box2">
              <div className="whiteBlock"></div>
              <img src={rocket} alt="" className="rocket" />
            </div>
            <div className="col-4 align-self-center box3">
              <div className="text-left py-3">
                <img src={smartphone} alt="" />
              </div>
              <h3>Works on every device!</h3>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, placeat.</p>
            </div>
          </div>
        </div>
        <img src={cloud} alt="" className="cloudImg" />
      </div>
      <div id="what-it-does" className="py-3">
        <h2 className="text-center text-danger font-weight-bold pb-3">
          What this does?
        </h2>
        <div className="wrapper">
          <div className="row">
            <div className="col-6 align-self-center">
              <p className="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam distinctio eos nihil maxime reiciendis. Beatae optio similique rerum repellat error laborum?</p>
            </div>
            <div className="col-6 text-right">
              <img src={mysvg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="student-teacher">
        <div className="wrapper">
          <div className="row py-5">
            <div className="col-6 text-center border-right">
              <div>
                <img src={teacher} alt="" className="py-3" />
              </div>
              <h3 className="py-3 font-weight-bold">Teachers</h3>
              <p className="py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, dignissimos!</p>
            </div>
            <div className="col-6 text-center">
              <div>
                <img src={student} alt="" className="py-3" />
              </div>
              <h3 className="py-3 font-weight-bold">Student</h3>
              <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis. Non, similique!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us">
        <div className="wrapper">
          <div className="row py-5">
            <div className="col-6">
              <img src={contact} alt="" />
            </div>
            <div className="col-6 form-container">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
