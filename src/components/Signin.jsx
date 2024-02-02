import React from 'react'
import  '../Styles/form.css';

export default function Signin() {
  return (
    <>
      <form >
        <div className='form'>
          <p>User Name : <input id='si' type='text' placeholder='name'/></p>
          <p>Email : <input id='si' type='email' placeholder='xyz@abc.com'/></p>
          <p>Password : <input id='si' type='password' placeholder='*******' /></p>
          <button id='s'>SignIn</button>
        </div>
      </form>
    </>
  )
}
