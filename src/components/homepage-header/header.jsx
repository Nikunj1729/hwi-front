import React from 'react';
import './header.css';
import victory_image from '../../assets/images/slider-icon.png';
import kid from '../../assets/images/kid.png';

const header = ({onEnterDashboard}) => {
    return (
<div>
    <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
            <h1 className="logo"><a href="index.html">GIT_IGNORE_DEVS</a></h1>
            <nav>
                <div onClick={() => onEnterDashboard('/login')} className="login-btn1">Login</div>
                <div onClick={() => onEnterDashboard('/signin')} className="login-btn2">Signin</div>
            </nav>
        </div>
    </header>
    <section id="hero">
        <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active" style={{backgroundImage: "url(../../assets/images/gid.png)"}}>
                    <div className="carousel-container">
                        <div className="container">
                            <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Virtual Stylist</span></h2>
                            <p className="animate__animated animate__fadeInUp"> We at virtual stylist help you to form get your body measurements.
                            We will also fetch out our best collection according to your age, size and gender. Hope you like it!!</p>
                            <a href="login.html" className="btn-get-started animate__animated animate__fadeInUp scrollto">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    );
}
export default header;
/*
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
        */