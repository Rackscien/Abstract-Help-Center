import React from 'react'
import Abstract from '../assets/icons/Abstract.jpeg'
export default function card() {
  return (
    <>
    <div>
        <div>
            <img src={<Abstract/>}/>
        </div>
        <div>
             <h3>
              Using Abstract
             </h3>
             <p>
                Abstarct lets you manage,version,document your designs
             </p>
             <p>
              Learn more
             </p>
        </div>
    </div>
    </>
   
  )
}
