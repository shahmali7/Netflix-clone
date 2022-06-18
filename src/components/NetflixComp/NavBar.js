import React,{useState} from 'react'

import '../NetflixStyle/Navbar.css'

import { BsSearch } from 'react-icons/bs';
import { MdNotificationsActive } from 'react-icons/md';

import logo from '../../asset/logoNetflix.jpg'

const NavBar = () => {
    const [navbar,setNavbar]=useState(false)
        const changeNavbar=()=>{
            if(window.scrollY >=50){
                setNavbar(true)
            }else{
                setNavbar(false)
            }
       }
      console.log(window.scrollY);
    
    window.addEventListener('scroll',changeNavbar)

  return (
    <div className={navbar ? 'Navbar Navbar-bg':'Navbar'}>
        <img className='nav-image' src='https://i.ibb.co/r5krrdz/logo.png' alt=''/>
        <div className='nav-right'>
            <BsSearch/>
            <span >KID</span>
            <MdNotificationsActive/>
            <img className='nav-logo' src={logo} alt=''/>
        </div>
    </div>
  )
}

export default NavBar