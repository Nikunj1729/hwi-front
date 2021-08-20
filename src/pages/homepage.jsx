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
