import React from 'react'

export default function Footer() {
  return (
    <>
    {/* Footer */}
    <div className="footer">
        <div id="name0">
          <h1 id='footName'>
            VitalSolutions
          </h1>
        </div>

        <div id="social">
          <div id="media">
          <ul id='social List'>
            <li><a href="instagram.com"><img id='insta' src="insta.png" alt="" /></a></li>
            <li><a href="facebook.com"><img id='fb' src="fb.png" alt="" /></a></li>
            <li><a href="whatsapp.com"><img id='wp' src="whatsapp.png" alt="" /></a></li>
            <li><a href="linkedin.com"><img id='li' src="linkedIn.png" alt="" /></a></li>
          </ul>
          </div>

        </div>

          <div className="copyR">
            <p>Copyright © 2022 - All Rights Reserved</p>
          </div>

          <div id="manage">
            Managed / Developed by VitalSols&Co.
          </div>


      </div>
    </>
  )
}
