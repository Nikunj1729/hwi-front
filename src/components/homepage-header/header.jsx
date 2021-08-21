import React from 'react';
import './header.css';
import victory_image from '../../assets/images/slider-icon.png';
import kid from '../../assets/images/kid.png';

const header = ({onEnterDashboard}) => {
    return (
        <div className="header-banner">
            <header className="header-main">
                <div id="company">
                    <img src={kid} className="homepage-logo" alt="kid" style={{background:"transparent",height:"150px",width:"auto"}}/>
                </div>
                <nav className="header-nav">
                    <div onClick={() => onEnterDashboard('/login')} className="login-btn">Login</div>
                    <div onClick={() => onEnterDashboard('/signin')} className="login-btn">Signin</div>
                </nav>
            </header>
            <div id="welcome">
                <h1><strong></strong>Welcome to ######## </h1>
                <p>Stay connected and organized. Accomplish more together across  school, college and life with Easy Monitor.</p>
                <p> One stop solution for online written examinations</p>
                <a href="#homepage-card-container" className="welcome-btn">Find Out More</a>
            </div>
            <img src={victory_image} className="victory-image" alt="First Vector Graphic" />
        </div>
    );
}
export default header;