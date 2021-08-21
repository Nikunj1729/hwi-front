import React from 'react'
import './aboutus.css';
//import aboutusimg from './../../assets/images/aboutus.jfif'
import aboutusimg from '../../assets/images/about.gif';
import ritik from "./../../assets/images/ritik.png";
import apurva from "./../../assets/images/apurva.jpeg";
import baid from "./../../assets/images/ritikbaid.jpeg";
import raveet from "./../../assets/images/raveet.jpeg";
import mani from "./../../assets/images/mani.jpeg";

function Aboutus() {
  return (
  <div>
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>About</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>About</li>
          </ol>
        </div>

      </div>
    </section>

    <section id="about" className="about">
      <div className="container">

        <div className="row content">
          <div className="col-lg-6">
            <h2>GIT IGNORE DEVS</h2>
            <h3>Enjoy your own Virtual Stylist</h3>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              In an effort to bring back the joy of shopping, this WebApp makes an effort to cover every aspect of the apparel shopping experience to ensure that the customers get the best fitment and are able to visualize themselves in the apparel to make the right choices.  This will also reduce returns and provide a personalized online shopping experience.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Scan your image</li>
              <li><i className="ri-check-double-line"></i> Get your body measurements</li>
              <li><i className="ri-check-double-line"></i> Get recommendations based on your age and gender</li>
              <li><i className="ri-check-double-line"></i> Visualize yourself on your choice</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <section id="team" className="team section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Team</h2>
          <p>Our Hardowrking Team</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={ritik} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Ritik Tailor</h4>
                <span>Team Leader</span>
                <p>FrontEnd Developer</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={apurva} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Apurva Parashar</h4>
                <span>Backend Leader</span>
                <p>Full Stack Developer</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={mani} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Manikanta Bandla</h4>
                <span>Backend Developer</span>
                <p>AI/ ML Developer</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={raveet} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Raveet Kumar</h4>
                <span>Backend Developer</span>
                <p>AI/ ML Developer</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start">
              <div className="pic"><img src={baid} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Ritik Baid</h4>
                <span>Developer</span>
                <p>FrontEnd Developer</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i></a>
                  <a href=""><i className="ri-facebook-fill"></i></a>
                  <a href=""><i className="ri-instagram-fill"></i></a>
                  <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
</div>
  )
}

export default Aboutus
