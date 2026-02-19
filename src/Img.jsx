import React, { useState } from 'react';
import './Img.css';
import chainIcon from './assets/chain.svg';

const Img = () => {
  const [activeTab, setActiveTab] = useState(1);

  const features = [
    { id: 1, title: 'Connect App' },
    { id: 2, title: 'Daily Snapshot' },
    { id: 3, title: 'Quick Shot' }
  ];

  return (
    <section className="privacy-section">
      {/* Top Hero Asset */}
      <div className="hero-asset">
        <img src={chainIcon} alt="Security Core" className="main-illustration" />
      </div>

      <div className="section-header">
        <h2>PRIVACY COMES FIRST</h2>
        <p>Your messages are processed securely and never shared or sold.</p>
      </div>

      <div className="interactive-container">
        {/* Left Side Tabs */}
        <div className="feature-tabs">
          {features.map((feature) => (
            <button 
              key={feature.id}
              className={`tab-item ${activeTab === feature.id ? 'active' : ''}`}
              onClick={() => setActiveTab(feature.id)}
            >
              <span className="tab-number">0{feature.id}</span>
              <span className="tab-label">{feature.title}</span>
            </button>
          ))}
          <p className="tab-footer-text">
            Jump into your most common relies and routines with shortcuts that save minutes off every task.
          </p>
        </div>

        {/* Right Side Content Preview */}
        <div className="content-display">
          <div className="window-mockup">
            <div className="window-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="window-body">
              <div className="shortcut-badge">Shortcut: ⌥ + P</div>
              <div className="notification-box">
                <p className="box-title">Detected notifications</p>
                <p className="box-desc">How much does the course cost, and what exactly will I get from it?</p>
              </div>
              <div className="reply-box">
                <p className="box-title">Saved reply</p>
                <p className="box-desc">
                  Hey! The course is priced at $299. It's built to give you practical, step-by-step guidance...
                </p>
              </div>
            </div>
          </div>
          {/* Decorative SVG */}
          {/* <img src={cardConnectIcon} alt="" className="floating-asset" /> */}
        </div>
      </div>
    </section>
  );
};

export default Img;