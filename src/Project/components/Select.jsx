import React from 'react'
import img1 from "../../assets/image.png";
import img2 from "../../assets/humanitarian_2964671.png"
import img3 from "../../assets/wifi.png"
import img4 from "../../assets/plant.png"

function Select() {
  return (
   <>

    <div className="sel-img">
    <img src={img1} alt="image 2"/>
    </div>
    <div className="select">
        <h1 className='selh1'>Why Choose Us ?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugit ipsum repudiandae similique quos, praesentium modi quasi porro.</p>

        <div className="prop">
            <h5>Property Insurance</h5>
            <p>First You Should Meet With Agent</p>
            <img src={img2} alt="image 1" width={50}/>
        </div>

        <div className="tax">
        <h5>Tax Advantage</h5>
        <p>First You Should Meet With Agent</p>
        <img src={img3} alt="image 3" width={50}/>
        </div>

        <div className="min-comm">
        <h5>Lowest Commision</h5>
        <p>First You Should Meet With Agent</p>
        <img src={img4} alt="image 4" width={50}/>
        </div>
    </div>
   </>
  )
}

export default Select