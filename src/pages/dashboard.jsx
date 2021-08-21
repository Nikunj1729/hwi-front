import React,{Component} from 'react';

import './dashboard.css';

import blog1 from "../assets/images/blog-1.jpg";
import img_test from "../assets/images/portfolio/portfolio-7.jpg";

class DashBoard extends Component{
  render(){
    return(
    	<div>
      		<header id="header" className="fixed-top header-inner-pages">
			    <div className="container d-flex align-items-center">

			      <h1 className="logo"><a href="index.html">GIT_IGNORE_DEVS</a></h1>

			      <nav className="nav-menu d-none d-lg-block">

			      </nav>
			    </div>
			  </header>

			  <main id="main">
			    <section id="breadcrumbs" className="breadcrumbs">
			      <div className="container">

			        <div className="d-flex justify-content-between align-items-center">
			          <h2>Scan your image and Get Body Measurements</h2>
			        </div>

			      </div>
			    </section>

			    <section id="blog" className="blog">
			      <div className="container">

			        <div className="row">

			          <div className="col-lg-5 entries justify-content-center">

			            <article className="entry entry-single">

			              <div className="entry-img">
			                <img src={blog1} alt="" className="img-fluid"/>
			              </div>

			              <h2 className="entry-title">
			                <a href="blog-single.html">Upload your Image</a>
			              </h2>

			            </article>

			          </div>


			          <div className="col-lg-7">

			            <div className="sidebar">

			              <h3 className="sidebar-title">Enter your height (in cms)</h3>
			              <div className="sidebar-item search-form">
			                <form action="">
			                  <input type="text" placeholder="Get Body Measurements"/>
			                  <button type="submit"><i className="icofont-search"></i></button>
			                </form>

			              </div>

			              <h3 className="sidebar-title">Your Body Measurements are</h3>
			              <div className="sidebar-item categories">
			                <ul>
			                  <li>Length of Shirt: <output> Size1</output></li>
			                  <li>Chest size: <output> Size1</output></li>
			                  <li>Waist size: <output> Size1</output></li>
			                  <li>Lenght of Pant: <output> Size1</output></li>
			                  <li>Size of the Shirt would be: <output> Size1</output></li>
			                  <li>Size of the Pant would be: <output> Size1</output></li>
			                </ul>

			              </div>

			            </div>

			          </div>

			        </div>

			      </div>
			    </section>

				<section id="portfolio" className="portfolio">
			      <div className="container">

			        <div className="section-title">
			          <h2>Recommendations</h2>
			          <p>Chosse your choice and visualize yourself</p>
			        </div>

			        <div className="row">
			          <div className="col-lg-12 d-flex justify-content-center">
			            <ul id="portfolio-flters">
			              <li data-filter="*" className="filter-active">All</li>
			              <li data-filter=".filter-Shirt">Shirt</li>
			              <li data-filter=".filter-Pant">Pant</li>
			            </ul>
			          </div>
			        </div>

			        <div className="row portfolio-container">

			          <div className="col-lg-4 col-md-6 portfolio-item filter-Shirt">
			            <div className="portfolio-wrap">
			              <img src={img_test} className="img-fluid" alt=""/>
			              <div className="portfolio-info">
			                <h4>Shirt 1</h4>
			                <p>Shirt</p>
			                <div className="portfolio-links">
			                  <a href={img_test} data-gall="portfolioGallery" className="venobox" title="Shirt 1"><i className="bx bx-plus"></i></a>
			                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
			                </div>
			              </div>
			            </div>
			          </div>

			          <div className="col-lg-4 col-md-6 portfolio-item filter-Shirt">
			            <div className="portfolio-wrap">
			              <img src={img_test} className="img-fluid" alt=""/>
			              <div className="portfolio-info">
			                <h4>Shirt 2</h4>
			                <p>Shirt</p>
			                <div className="portfolio-links">
			                  <a href={img_test} data-gall="portfolioGallery" className="venobox" title="Shirt 2"><i className="bx bx-plus"></i></a>
			                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
			                </div>
			              </div>
			            </div>
			          </div>

			          <div className="col-lg-4 col-md-6 portfolio-item filter-Pant">
			            <div className="portfolio-wrap">
			              <img src={img_test} className="img-fluid" alt=""/>
			              <div className="portfolio-info">
			                <h4>Pant 2</h4>
			                <p>Pant</p>
			                <div className="portfolio-links">
			                  <a href={img_test} data-gall="portfolioGallery" className="venobox" title="Pant 2"><i className="bx bx-plus"></i></a>
			                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
			                </div>
			              </div>
			            </div>
			          </div>

			          <div className="col-lg-4 col-md-6 portfolio-item filter-Shirt">
			            <div className="portfolio-wrap">
			              <img src={img_test} className="img-fluid" alt=""/>
			              <div className="portfolio-info">
			                <h4>Shirt 3</h4>
			                <p>Shirt</p>
			                <div className="portfolio-links">
			                  <a href={img_test} data-gall="portfolioGallery" className="venobox" title="Shirt 3"><i className="bx bx-plus"></i></a>
			                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
			                </div>
			              </div>
			            </div>
			          </div>

			          <div className="col-lg-4 col-md-6 portfolio-item filter-Pant">
			            <div className="portfolio-wrap">
			              <img src={img_test} className="img-fluid" alt=""/>
			              <div className="portfolio-info">
			                <h4>Pant 1</h4>
			                <p>Pant</p>
			                <div className="portfolio-links">
			                  <a href={img_test} data-gall="portfolioGallery" className="venobox" title="Pant 1"><i className="bx bx-plus"></i></a>
			                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
			                </div>
			              </div>
			            </div>
			          </div>

			          <div className="col-lg-4 col-md-6 portfolio-item filter-Pant">
			            <div className="portfolio-wrap">
			              <img src={img_test} className="img-fluid" alt=""/>
			              <div className="portfolio-info">
			                <h4>Pant 3</h4>
			                <p>Pant</p>
			                <div className="portfolio-links">
			                  <a href={img_test} data-gall="portfolioGallery" className="venobox" title="Pant 3"><i className="bx bx-plus"></i></a>
			                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </section>


			  </main>

			  <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>

			  <script src="assets/vendor/jquery/jquery.min.js"></script>
			  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
			  <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
			  <script src="assets/vendor/php-email-form/validate.js"></script>
			  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
			  <script src="assets/vendor/venobox/venobox.min.js"></script>
			  <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
			  <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>

			  <script src="assets/js/main.js"></script>

    	</div>
    )
  }
}

export default DashBoard;