import React from 'react';
import './WhatPeopleSay.css';

const WhatPeopleSay = () => {
  return (
    <section className="what-people-say">
      <div className="wps-inner">
        <header className="wps-header">
          <p className="wps-eyebrow">WHAT PEOPLE SAY</p>
          <h2 className="wps-title">WHEN THEIR DAY FINALLY CLICKS</h2>
        </header>

        <article className="wps-card">
          <div className="wps-card-body">
            <p className="wps-quote">
              Most days felt scattered until this landed in my routine. Everything I missed, everything I needed to do, all neatly
              outlined without the usual chaos. It&apos;s the first thing I check now—makes the entire day feel lighter and more
              manageable.
            </p>
          </div>

          <footer className="wps-card-footer">
            <div className="wps-person">
              <div className="wps-avatar">
                <span className="wps-avatar-initial">I</span>
              </div>
              <div className="wps-person-meta">
                <span className="wps-name">Imran Musa</span>
                <span className="wps-role">Productivity Coach</span>
              </div>
            </div>

            <div className="wps-indicators">
              <span className="wps-dot active"></span>
              <span className="wps-dot"></span>
              <span className="wps-dot"></span>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default WhatPeopleSay;

