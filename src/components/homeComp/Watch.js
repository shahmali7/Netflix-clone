import React from 'react'
import {Link} from 'react-router-dom'

import '../HomeStyle/header.css'
 
const Watch = () => {
  return (
    <div>
       <div className='watch-head' >
           <p>Watch TV shows and movies anytime,<br/>anywhere --- personalized for you</p>
           <br/>
           <Link to='/Netflix' className='goNetflix'>Watch Free For 30 Days</Link>  
       </div>
       <div className='watch-Image'>
       <p>Watch on TV</p>
       <img src='https://i.ibb.co/DpdN7Gn/tab-content-2-1.png' className='Wimage' alt=''/>
       <p>Available on Tablet, Phone and more</p>
       <img src='https://i.ibb.co/R3r1SPX/tab-content-2-2.png' className='Wimage' alt=''/>
        <p>Also available Computer, Laptop and more</p>
       <img src='https://i.ibb.co/gDhnwWn/tab-content-2-3.png' className='Wimage' alt=''/>
       </div>
    </div>
  )
}

export default Watch