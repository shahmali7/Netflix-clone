import React from 'react'
import {Link} from 'react-router-dom'

import {BsGithub,BsLinkedin,BsInstagram,BsFillTelephoneInboundFill} from 'react-icons/bs'
import '../style/app.css'
const Footer = () => {
  return (
    <div className='Footer'>
      <div>
        <Link to=''>FAQ</Link>
        <Link to=''>Investor Relations</Link>
        <Link to=''>Ways to Watch</Link>
        <Link to=''>Corporate Information</Link>
        <Link to=''>Legal Notices</Link>
      </div>
      <div>
        <Link to=''>Help Center</Link>
        <Link to=''>Jobs</Link>
        <Link to=''>Terms of Use</Link>
        <Link to=''>Contact Us</Link>
        <Link to=''>Only on Netflix</Link>
      </div>
      <div>
      <p>Created by Shahmali Mustafayev</p>
      <a  href='https://www.linkedin.com/in/shahmali-mustafayev-905698230/'><BsLinkedin/> Linkedin</a>
      <a  href='https://github.com/shahmali7'><BsGithub/> GitHub</a>
      <a  href='https://www.instagram.com/shahmali.7/'><BsInstagram/> Instagram</a>
      <a  href='/#'><BsFillTelephoneInboundFill/> +48 576 123 040</a>
      </div>
    </div>
  )
}

export default Footer