import React from 'react';
import './HeroSection.css';
import heroImage from './assets/hero-asset.svg';
import marquee from './assets/marquee.svg';
const HeroSection = () => {
  return (
    <section className="hero-container">
      {/* Top Badge */}
      <div className="badge">
        <span className="dot"></span>
        <p>New Reply Templates Added</p>
        <span className="arrow">›</span>
      </div>

      {/* Headline & Description */}
      <h1 className="hero-title">
        END THE DAY IN <br /> ONE SNAPSHOT
      </h1>
      <p className="hero-subtitle">
        Daily highlights of messages, notifications, and key <br /> 
        tasks with quick replies and simple scheduling.
      </p>

      {/* Buttons & Links */}
      <div className="hero-actions">
        <button className="download-btn">
          <i className="apple-icon"><i class="fa-brands fa-apple"></i></i> Download For mac
        </button>
        <a href="#" className="availability-link">
          Also available on iOS & Android
        </a>
      </div>

      {/* Hero Image Block */}
      <div className="hero-image-container">
        <img 
          src={heroImage}
          alt="3D Envelope Illustration" 
          className="main-hero-img" 
        />
      </div>
      <span className='marquee'>
        <marquee behavior="scroll" direction="left">
          {/* <img src={marquee} alt="" /> */}
        </marquee>
        <img src={marquee} alt="" />
        </span>
    </section>
  );
};

export default HeroSection;