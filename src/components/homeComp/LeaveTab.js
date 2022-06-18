import React from 'react'
import { Link } from 'react-router-dom'

import '../HomeStyle/Tabs.css'
const Leave = () => {
  return (
    <div className='LeaveTab'>
      <div className='content-Tab'>
        <p>If you decide Netflix isn't for you -no problem.<br/>No commitment. Cancel online anytime</p>
        <br/>
        <Link to='' className='Cancel'>Cancel Membership</Link>
      </div>
      <img src='https://i.ibb.co/J2xDJV7/tab-content-1.png' alt=''/>
    </div>
  )
}

export default Leave