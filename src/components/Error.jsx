import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Error.css'

export default function Error() {
  return (
     <div className='error'>
        <div className='errorP'>
            <h2>404 Error Found</h2>
            <Link to='/'><h3>GO Back</h3></Link>
        </div>
    </div>
  )
}
