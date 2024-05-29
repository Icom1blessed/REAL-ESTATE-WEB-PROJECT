import React from 'react'
import img1 from "../components/Newdealimage/HouseA.img.jpeg"
import img2 from "../components/Newdealimage/HouseB.img.jpeg"
import img3 from "../components/Newdealimage/HouseC.img.jpeg"
import img4 from "../components/Newdealimage/HouseD.img.jpeg"
import img5 from "../components/Newdealimage/HouseE.img.jpeg"
import img6 from "../components/Newdealimage/HouseF.img.jpeg"
import img7 from "../components/Newdealimage/Agent-Adams.jpeg"
import img8 from "../components/Newdealimage/Agent.printeres.A.jpeg"
import img9 from "../components/Newdealimage/Agents.all.jpeg"


function Newdeal() {
    return (
        <>

            <div className="aboutdeal">
                <h1 className="nnn">Newest Deals</h1>
                <p className="mmm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, tenetur. hdhdjnsd  mnjrnrmm,rgmm,gr</p>

                <ul className="ooo">
                    <li  className="oo"><a href="Government">Government Property</a></li>
                    <li><a href="Residential">Residential Property</a></li>
                    <li><a href="Industrial">Industrial Properyty</a></li>
                    <li><a href="Agricultural">Agricultiral Property</a></li>
                    
                </ul>
            </div>

            <div className="newdeal">


                <img className="new1" src={img1} alt="Image 1" width={300}  />
                <img className="new2" src={img2} alt="Image 2" width={300} height={200} />
                <img className="new3" src={img3} alt="Image 3" width={300} height={200}/>
            </div>

            <div className="newdeal111">
                <img className="new4" src={img4} alt="Image 4" width={300} height={200}/>
                <img className="new5" src={img5} alt="Image 5" width={300} height={200}/>
                <img className="new6" src={img6} alt="Image 6" width={300} height={200}/>



            </div>

            
            <div className="dealhome">
                <div className="ddhome">
                    <p>1kl 24k$ y24</p>
                    <h1>4BHK HOUSE 1600FQFT </h1>
                    <h2>$900</h2>
                    <p>get yours now!</p>

                </div>

                <div className="eehome">
                    <p>1kl 24k$ y24</p>
                    <h1>4BHK HOUSE 1600FQFT </h1>
                    <h2>$900</h2>
                    <p>get yours now!</p>
                </div>

                <div className="aahome">

                    <p>1kl 24k$ y24</p>
                    <h1>4BHK HOUSE 1600FQFT </h1>
                    <h2>$900</h2>
                    <p>get yours now!</p>
                </div>
            </div>

            <div className="dealhome111">
                <div className="llhome">

                    <p>1kl 24k$ y24</p>
                    <h1>4BHK HOUSE 1600FQFT </h1>
                    <h2>$900</h2>
                    <p>get yours now!</p>
                </div>

                <div className="hhhome">

                    <p>1kl 24k$ y24</p>
                    <h1>4BHK HOUSE 1600FQFT </h1>
                    <h2>$900</h2>
                    <p>get yours now!</p>
                </div>
                <div className="oohome">

                    <p>1kl 24k$ y24</p>
                    <h1>4BHK HOUSE 1600FQFT </h1>
                    <h2>$900</h2>
                    <p>get yours now!</p>
                </div>
            </div>

            <div className="agenttop">
                <h1 className="getagent">Get Connected With Top Agent</h1>
                <p className="on-agent">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />Aut, tenetur. hdhdjnsd  mnjrnrmm,rgmm,gr</p>
            </div>

            <div className="newdeal222">
                <img className="new7" src={img7} alt="Image 7" width={270} height={200}/>
                <img className="new8" src={img8} alt="Image 8" width={270} height={200}/>
            </div>

            <div className="agent111">
                <div className="aaagent">

                <p> "i am pleased , <br />to get such of best services <br />
                    and i recommend them"</p>
                    <h2>paul Murphy</h2>
                    <p className='bba'>Agent</p>
                </div>

                <div className="bbagent">

                    <p> "i am pleased , <br />to get such of best services <br />
                    and i recommend them"</p>
                    
                    <h2>Katharina Maria</h2>
                    <p className='bba'>Agent</p>
                </div>
            </div>

            <div className="newdeal333">    
                <img className="new9" src={img9} alt="Image 9" width={270} height={390}/>



            </div>

            <div className="happyclient">

                <h1 className="happyh1">Testimonials</h1>
                <p className="happy-p">Over 10,000 Happy Clients , You Are The Next One.</p>


            </div>

            <div className="happy-group">
                <p className='hp1'>,,</p>
                <p className='hap1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eum beatae, quasi alias, autem voluptatum a ducimus itaque provident delectus atque dolorem laudantium dolores. Aspernatur!</p>
                <h6 className='happy-group111'>group of engineers</h6>
            </div>



        </>
    )
}

export default Newdeal