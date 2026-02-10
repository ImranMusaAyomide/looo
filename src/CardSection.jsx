import React from 'react'
import Date from './assets/date-cards.svg'
import Social from './assets/social-icons.svg'
import './CardSection.css'
const CardSection = () => {
  return (
    <section className='to-middle'>
      <div className='left'>
        <img src={Social} alt="" />
        <h1>Multi-App View</h1>
        <p>One app that brings all your 
        updates together.</p>
      </div> 

      <div className='right'>
        <img src={Date} alt="" />
        <h1>AI Smart Scheduling </h1>
        <p>Compose anytime with AI setup smart compose, and let the timing behind the scenes to deliver your message at the perfect moment.</p>
      </div>
    </section>
  )
}

export default CardSection
