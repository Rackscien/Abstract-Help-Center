import React from 'react'
import  '../Styles/form.css';

export default function Signin() {
  return (
    <>
      <form className='request'>
        <div className='form '>
          <h3>Write Your Problem !</h3>
          <textarea rows={5} placeholder='Write here...'></textarea>
          <button  id='s'>Submit</button>
        </div>
      </form>
    </>
  )
}
