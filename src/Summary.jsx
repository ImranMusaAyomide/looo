import React from 'react'
import './Summary.css'
import Slack from './assets/noti.svg'
import Notification from './assets/filter.svg'

const Summary = () => {
  return (
    <section className='to-middle'>
    <div className='left' >
      < img src={Slack} alt="" id='reduce'/>
      <h1>Information Update</h1>
      <p>Everything that need your attention
      wrapped into one clean summary.</p>
    </div> 

    <div className='right'>
      <img src={Notification} alt="" id='reduce'/>
      <h1>Smart Filters </h1>
      <p>ou most messages rise to the top so you always know what deserve your attewmtions first.</p>
    </div>
  </section>
  )
}

export default Summary
