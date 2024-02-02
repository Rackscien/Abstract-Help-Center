import React from 'react'
import '../Styles/footer.css'
import icon from '../assets/images/icon.jpeg'
export default function footer() {
  return (
    <>
      <div className='foot'>
        <div >
          <div className='boxf'>
            <div>
              <h5>
                Abstract
              </h5>
            </div>
            <div>
              <p>Start Trial</p>
              <p>Pricing</p>
              <p>Download</p>
            </div>
          </div>
        </div>

        {/* <div>
          <div className='boxf'>
            <div>
              <h5>
                Abstract
              </h5>
            </div>
            <div>
              <p>Start Trial</p>
              <p>Pricing</p>
              <p>Download</p>
            </div>
          </div>
        </div> */}

        <div>
          <div className='boxf'>
            <div>
              <h5>
                Resources
              </h5>
            </div>
            <div>
              <p>Help Center</p>
              <p>RElease Notes</p>
              <p>Status</p>
            </div>
          </div>
        </div>

        <div>
          <div className='boxf'>
            <div>
              <h5>
                Community
              </h5>
            </div>
            <div>
              <p>Twitter</p>
              <p>LinkedIn</p>
              <p>Facebook</p>
              <p>Dribble</p>
              <p>Podcast</p>
            </div>
          </div>
        </div>

        <div>
          <div className='boxf'>
            <div>
              <h5>
                Company
              </h5>
            </div>
            <div>
              <p>About Us</p>
              <p>Careers</p>
              <p>Legal</p>
            </div>
          </div>

          <div className='boxf'>
            <div>
              <h5>
                Contact Us
              </h5>
            </div>
            <div>
              <p>info@abstract.com</p>
              
            </div>
          </div>
        </div>

        <div>
          <div className='boxf' id='b'>
            <img src={icon} width='50px' alt='alt'/>
            <p>Copyright 2023</p>
            <p>All rights reversed</p>
          </div>
      </div>
      </div>
    </>
  )
}
