import React from 'react'
import '../Styles/searchbar.css'
export default function footer() {
  return (
    <>
      <div className='searchBar'>
        <div className='upper'>
          <p>How Can We help?</p>
        </div>
        <div className='lower'>
          <input text='search' placeholder='Search'/>
        </div>
      </div>
    </>
  )
}