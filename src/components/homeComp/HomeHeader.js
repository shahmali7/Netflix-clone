import React from 'react'

import '../HomeStyle/header.css'
import {AiOutlineRight} from 'react-icons/ai'
import {Link} from 'react-router-dom'


const HomeHeader = () => {
  return (
    <header className='headerMain'>
       <div className='header-top'>
         <img src='https://i.ibb.co/r5krrdz/logo.png' alt='logo'/>
         <Link to='Login' className='home-sign-in'>Sign In</Link>
       </div>
       <div className='header-content'>
        <h1>Unlimited movies, Tv<br/> shows, and more</h1>
        <p>Watch anywhere. Cancel anytimes</p>
        <Link to='Netflix' className='go-Netflix'>Watch Free 30 Days
        <AiOutlineRight /></Link>
       </div>
    </header>
  )
}

export default HomeHeader