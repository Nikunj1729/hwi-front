import React,{Component} from 'react';
import $ from 'jquery';

import './dashboard.css';

import blog1 from "../assets/images/blog-1.jpg";
import img_test from "../assets/images/portfolio/portfolio-7.jpg";
import '@tensorflow/tfjs-backend-webgl';
const posenet = require('@tensorflow-models/posenet');

// for preProcessing the data into dictionary.
function PreProcessData(bodyDetailFromAPI){
    var temp={};
    for(var x in bodyDetailFromAPI['keypoints']){
        temp[bodyDetailFromAPI['keypoints'][x]['part']]=bodyDetailFromAPI['keypoints'][x];
    }
    return temp;
};
//The Main Method
function GetMeasurements(BodyDetailsFromAPI){
  let bodyDetailProcessed=PreProcessData(BodyDetailsFromAPI);
  //console.log(bodyDetailProcessed)
  //height of the person
  var ResultSet={};
  ResultSet["heightPerson"]=getHeight(bodyDetailProcessed);
  //width of the person
  ResultSet["widthPerson"]=getWidth(bodyDetailProcessed);
  //left arm length
  ResultSet["leftArmLength"]=getLeftArmLength(bodyDetailProcessed);
  //right arm length
  ResultSet["rightArmLength"]=getRightArmLength(bodyDetailProcessed);
  //left leg length
  ResultSet["leftLegLength"]=getLeftLegLength(bodyDetailProcessed);
  //right leg length
  ResultSet["rightLegLength"]=getRightLegLength(bodyDetailProcessed);
  return ResultSet;
}



function distanceXY(coordinateX,coordinateY){
    //console.log(coordinateX['x']," ",coordinateY['x']);
    return Math.sqrt((coordinateX['x']-coordinateY['x'])*(coordinateX['x']-coordinateY['x']) + 
                    (coordinateX['y']-coordinateY['y'])*(coordinateX['y']-coordinateY['y']) );
}

function getHeight(bodyData){
	//console.log(bodyData);
    var distLeftEyeToLeftAnkle=distanceXY(bodyData['leftEye']['position'],bodyData['leftAnkle']['position']);
    var distLeftEyeToRightAnkle=distanceXY(bodyData['leftEye']['position'],bodyData['rightAnkle']['position']);
    var distrightEyeToLeftAnkle=distanceXY(bodyData['rightEye']['position'],bodyData['leftAnkle']['position']);
    var distrightEyeToRightAnkle=distanceXY(bodyData['rightEye']['position'],bodyData['rightAnkle']['position']);
    var distLeftEyetoRightEye=distanceXY(bodyData['leftEye']['position'],bodyData['rightEye']['position']);
    // console.log(distLeftEyeToLeftAnkle);
    // console.log(distLeftEyeToRightAnkle);
    // console.log(distrightEyeToLeftAnkle);
    // console.log(distrightEyeToRightAnkle);
    return (distLeftEyeToLeftAnkle+ distLeftEyeToRightAnkle + distrightEyeToLeftAnkle + distrightEyeToRightAnkle)/4 
            + distLeftEyetoRightEye;
}
function getWidth(bodyData){
    var distLeftHipToRight=distanceXY(bodyData['leftHip']['position'],bodyData['rightHip']['position']);
    var distLeftkneeToRight=distanceXY(bodyData['leftKnee']['position'],bodyData['rightKnee']['position']);
    var distLeftShoulderToRight=distanceXY(bodyData['leftShoulder']['position'],bodyData['rightShoulder']['position']);
    return  (distLeftHipToRight+distLeftkneeToRight+distLeftShoulderToRight)/3;
}
function getLeftArmLength(bodyData){
    var distShoulderToElbow=distanceXY(bodyData['leftShoulder']['position'],bodyData['leftElbow']['position']);
    var distElbowToWrist=distanceXY(bodyData['leftElbow']['position'],bodyData['leftWrist']['position'])
    return distShoulderToElbow+distElbowToWrist;
}
function getRightArmLength(bodyData){
    var distShoulderToElbow=distanceXY(bodyData['rightShoulder']['position'],bodyData['rightElbow']['position']);
    var distElbowToWrist=distanceXY(bodyData['rightElbow']['position'],bodyData['rightWrist']['position'])
    return distShoulderToElbow+distElbowToWrist;
}
function getLeftLegLength(bodyData){
    var distHipToKnee=distanceXY(bodyData['leftHip']['position'],bodyData['leftKnee']['position']);
    var distKneeToAnkle=distanceXY(bodyData['leftKnee']['position'],bodyData['leftAnkle']['position'])
    return distHipToKnee+distKneeToAnkle;
}
function getRightLegLength(bodyData){
    var distHipToKnee=distanceXY(bodyData['rightHip']['position'],bodyData['rightKnee']['position']);
    var distKneeToAnkle=distanceXY(bodyData['rightKnee']['position'],bodyData['rightAnkle']['position'])
    return distHipToKnee+distKneeToAnkle;
}

async function estimatePoseOnImage(imageElement) {
  // load the posenet model from a checkpoint
  const net = await posenet.load({
	  architecture: 'MobileNetV1',
	  outputStride: 16,
	  inputResolution: { width: 640, height: 480 },
	  multiplier: 0.75
	});
  const pose = await net.estimateSinglePose(imageElement, {
    flipHorizontal: false
  });
  return pose;
}

class DashBoard extends Component{
	constructor(props){
        super(props);
        this.state={
          img: ""
        }
    }
    onImgChange=(e)=>{
    	let b=1;
    	let s="image";
    	if(!e.target.files||!e.target.files[0])
    	{
    		alert("Select an Image");
    		this.setState({
		       	img: ""
		  	})
    		return;
    	}
    	for(let i=0;i<5;i++)
    		if(s[i]!=e.target.files[0].type[i])
    			b=0;
    	if(!b)
    	{
    		alert("Select an Image");
    		this.setState({
		       	img: ""
		  	})
    		return;
    	}
    	const reader=new FileReader();
    	reader.onload=()=>{
    		if(reader.readyState==2){
    			this.setState({
		        	img: reader.result
		      	})
    		}
    		const imageElement = document.getElementById('posenet-img');
			const pose = estimatePoseOnImage(imageElement);
			pose.then(value=>{
				//console.log(value);
				this.setState({
					pose: GetMeasurements(value)
				})
			})
    	}
    	reader.readAsDataURL(e.target.files[0]);
    }
 	render(){
 		console.log(this.state);
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
			              	<input type="file" onChange={(e)=>this.onImgChange(e)} name="inpFile"/>
			              	<div className="image-preview">
			              		{this.state.img!=""?
			              		<img id="posenet-img" src={this.state.img} style={{width: "300px", minHeight: "100px"}}/>
			              		:
			              		<p></p>
			              		}
			              	</div>
			              	<h3 className="entry-title" href="blog-single.html">Upload your Image</h3>
			              	<hr/>
			              	<h3 className="entry-title" href="blog-single.html">Use your camera</h3>
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

/*

constructor(props){
        super(props);
        this.state={
          img: ""
        }
    }
    readURL=(e)=>{
    	console.log(e.target.value);
	    this.setState({
	    	img: e.target.value
	    })
	}


<div className="entry-img">
{this.state.img!=""?<img id="input-image-person" src={this.state.img} alt="your image" />:<p></p>}
</div>

	<input type='file' onChange={(e)=>this.readURL(e)} />
	
	*/