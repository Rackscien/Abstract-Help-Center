import React from 'react'
import '../Styles/main.css'
import abstract from '../assets/icons/abstract.png'
import acount from '../assets/icons/acount.png'
import authenticate from '../assets/icons/authenticate.png'
import billing from '../assets/icons/billing.png'
import organisation from '../assets/icons/organisation.png'
import support from '../assets/icons/support.png'
import {Link} from 'react-router-dom'
// import data from '../Data/data';
// import Info from './info';
export default function main() {
  return (
    <>
    <div  className='main'>

      <div className='parentB'>


      <div className='box'>
        <div className='image'> 
        <img src={abstract} alt ='ab' width='100px'/>
        </div>
        <div className='imgCont'>
        <h5>Using Abstract</h5>
          <p>abstract lets you manage, version and document your designs in one place</p>
          <p id='a'>Learn More...</p>
        </div>
      </div>


      <div className='box'>
        <div className='image'> 
        <img src={acount} alt ='ab' width='100px'/>
        </div>
        <div className='imgCont'>
        <h5>Manage your account</h5>
          <p>Configure your account settings, such as your email, profile details, and password.</p>
          <p id='a'>Learn More...</p>
        </div>
      </div>
      </div>


      <div className='parentB'>

      <div className='box'>
        <div className='image'> 
        <img src={organisation} alt ='ab' width='100px'/>
        </div>
        <div className='imgCont'>
          <h5>Manage organizations, teams, and projects</h5>
          <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
          <p id='a'>Learn More...</p>
        </div>
      </div>
    
      <div className='box'>
        <div className='image'> 
        <img src={billing} alt ='ab' width='100px'/>
        </div>
        <div className='imgCont'>
        <h5>Manage billing</h5>
          <p>Change subscriptions and payment details.</p>
          <p id='a'>Learn More...</p>
        </div>
      </div>
      </div>



      <div className='parentB'>

      <div className='box'>
        <div className='image'> 
        <img src={authenticate} alt ='ab' width='100px'/>
        </div>
        <div className='imgCont'>
        <h5>Authenticate to Abstract </h5>
          <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning</p>
          <p id='a'>Learn More...</p>
        </div>
      </div>

      <div className='box'>
        <div className='image'> 
        <img src={support} alt ='ab' width='100px'/>
        </div>
        <div className='imgCont'>
        <h5>Abstract support</h5>
          <p>Get in touch with a human.</p>
        <p id='a'>Learn More...</p> 
        </div>
      </div>
      </div>
   </div>  
    </>
  )
}
