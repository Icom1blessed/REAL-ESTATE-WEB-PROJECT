import React from 'react'
import img1 from "../components/collaboration.png"
import img2 from "../components/building.png"
import img3 from "../components/no-racism.png"

function Steps() {
  return (
    <>
    
      <div className="stephead">
        <h1>We Follow 3 Steps</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dicta, iure eligendi sunt, explicabo commodi doloremque eaque sed temporibus libero .</p>

      </div>
      
      <div className="border">
        <div className="borderone">
          <h3>Meet Your Agent</h3>
          <img src={img1} alt="image 1" width ="60"/>

          <p>Evaluate the very property that are for sale</p>

        </div>

        <div className="bordertwo">
          <h3>Evaluate Property</h3>
          <img src={img2} alt="image 2" width ="60"/>
          <p>we can help you get the best <br />agent for housing</p>
        </div>

        <div className="borderthree">
          <h3>Close The The Deal</h3>
          <img src={img3} alt="image 3" width ="60"/>
          <p>after doing business with us we close the deal</p>
         
        </div>

      </div>

      </>
      )

}


export default Steps
