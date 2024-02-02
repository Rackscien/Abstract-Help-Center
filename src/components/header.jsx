import React from 'react'
import logo from '../assets/images/icon.jpeg'
import {Link} from 'react-router-dom'
export default function header() {
  return (
    <>
      <div className='container'>
        <div className='left-side'>
          <div className='logo'>
            <img src={logo}/>
          </div>
          <div>
           <p>Abstract | Help center</p>
          </div>
        </div>
        <div className='right-side'>
       <Link to='/request'>  <button>Submit a Request</button></Link>
         <Link to='/signin'><button>Sign in</button></Link>
        </div>
      </div>
    </>
  )
}
