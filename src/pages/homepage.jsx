import React, { Component } from 'react';
import './homepage.css';
import Header from './../components/homepage-header/header.jsx';
//import SimpleCard from './../components/homepage-card/homepage-card';
import AboutUs from "./../components/aboutus/aboutus";
import Footer from './../components/footer/footer.js';

class HomePage extends Component {
	render() {
		return (
			<div>
				<div className="content-main">
					<Header onLogin={(route) => this.props.history.push(route)} />
					<AboutUs />
				</div>
				<Footer className="footer" />
			</div>
		)
	}
}

export default HomePage;

/*
<div className="content" id="homepage-flex">
<SimpleCard
	image={plagiarism}
	title='Plagiarism detection'
	body='It instantly detects if a student has copied from internet or from other students. It clusterizes the copies looking similar ' />
<SimpleCard
	image={organise}
	title='Stay Organised'
	body='It has separate portals for students and professors. Students can have their track of their marks and assignments.' />
<SimpleCard
	image={assignment}
	title='Assignment'
	body='It allows professors to assign tasks to students and students can submit their answer sheets using EasyMonitor.' />
<SimpleCard
	image={performance}
	title='Performance tracker'
	body='It shows your subject-wise marks of each subject. You can have a track of your progress by looking at the Bar Graphs' />
</div>
*/