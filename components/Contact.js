import React from 'react'
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "../css/Contact.css"



export default function Contact() {
  return (
    <>
    <hr style={{border: "1px solid #415540"}}/>
    <div className="container" style={{display: "flex",
    flexDirection: "column",
    textAlign: "center"
    }}>

    <h1 style={{fontFamily: "'Nunito', sans-serif"}}>Connect with Us</h1>


    <div id="map" style={{textAlign: "center", marginLeft: "0rem"}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
     width="100%"
      height="300px"
      // textAlign="center"
      tabindex="0"></iframe>
    </div>

    <div id="contact">
      <p style={{fontFamily: "'Nunito', sans-serif", textAlign: "left", paddingLeft: "0.5rem", paddingRight: "0.5rem"}}>
        <strong>Address:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        In, sit voluptas! Debitis, atque illo! Perspiciatis fuga voluptatem,
        eius alias maxime pariatur dolores repellat sit ducimus a libero.
        Molestias, distinctio provident.
      </p>
      <br />
      <br />

      <strong>Connect with us</strong>
      <p><b>+91 84510xxxxx</b></p>
      <p><b>+91 84510xxxxx</b></p>

    </div>
    </div>

    <br />
    <br />
    
    </>
  )
}
