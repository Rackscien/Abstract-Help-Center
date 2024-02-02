import React from 'react'

export default function Info(props) {
  return (
    <>
      <div>
        <div>
            <img src={props.image}/>
        </div>
        <div>
             <h3>
              {props.heading}
             </h3>
             <p>
               { props.content}
             </p>
             <p>
              Learn more
             </p>
        </div>
    </div>
    </>
  )
}