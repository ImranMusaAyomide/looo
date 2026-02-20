import React from 'react';
import './PeopleSay.css';

const PeopleSay = () => {
  return (
    <div className="ps-section">
      <div className="ps-header">
        <p className="ps-label">WHAT PEOPLE SAY</p>
        <h2 className="ps-title">WHEN THEIR DAY<br />FINALLY CLICKS</h2>
      </div>

      <div className="ps-card">
        <p className="ps-quote">
          Most days felt scattered until this landed in my routine. 
          Everything i missed, everything i needed to do, all neatly 
          outlined without the usual chaos. It’s the first thing i check 
          now necessity makes the entire day feel lighter and more manageable.
        </p>
        
        <div className="ps-profile">
          <div className="ps-avatar">
            {/* Using a placeholder for your profile image */}
            <img src="https://via.placeholder.com/150" alt="Imran Musa" />
          </div>
          <p className="ps-name">Imran Musa</p>
        </div>

        <div className="ps-navigation">
          <button className="ps-nav-arrow">‹</button>
          <div className="ps-dots">
            <span className="ps-dot ps-active"></span>
            <span className="ps-dot"></span>
            <span className="ps-dot"></span>
          </div>
          <button className="ps-nav-arrow">›</button>
        </div>
      </div>
    </div>
  );
};

export default PeopleSay;