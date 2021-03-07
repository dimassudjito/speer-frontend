import React, {useState} from 'react';
import '../../styles/landing.css'

const Hero = () => {

    return (
        <div className="hero">
            <div className="overlay">
                <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
                <p>Experience your favourite artists like never before and from the comfort of your own home</p>
                <button className="btn btn-light">TRY IT NOW</button>
            </div>
            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./hero1.jpg" className="d-block w-100" style={{maxHeight:"500px"}} alt="concert image"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./hero2.jpg" className="d-block w-100" style={{maxHeight:"500px"}} alt="concert image"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./hero3.jpg" className="d-block w-100" style={{maxHeight:"500px"}} alt="concert image"/>
                    </div>
                </div>
        </div>
        </div>
  )
}

export default Hero;