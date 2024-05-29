import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import img1 from "../assets/image.png"
import img2 from "../assets/istockphoto-.jpg"
import img3 from "../assets/img.jpg"
import { FaChevronDown } from 'react-icons/fa';

function Slider() {
    return (
        <>

            <div className="slidecont">
                <h1 className="hh">Featured Homes</h1>

                <ul className="hometype">
                    <span>Property</span>
                    <span>Apartment</span>
                    <span>Land</span>
                    <span>More  <FaChevronDown /></span>

                </ul>

                <div className="splide">


                    <Splide aria-label="My Favorite Images">



                        <SplideSlide>

                            <img className="" src={img1} alt="Image 1" width={300} />
                            <img className="" src={img2} alt="Image 2" width={300} />
                            <img className="" src={img3} alt="Image 3" width={300} />
                        </SplideSlide>
                        <SplideSlide>
                            <img className="" src={img2} alt="Image 2" width={300} />
                            <img className="" src={img1} alt="Image 1" width={300} />
                            <img className="" src={img3} alt="Image 3" width={300} />
                        </SplideSlide>
                        <SplideSlide>
                            <img className="" src={img3} alt="Image 3" width={300} />
                            <img className="" src={img1} alt="Image 1" width={300} />
                            <img className="" src={img2} alt="Image 2" width={300} />
                        </SplideSlide>


                    </Splide>


                </div>
            </div>


            <div className="about-homes">
                <div className="onehome">
                    <p>1kl 24k$ y24</p>
                    <h1>4BHK HOUSE 1600FQFT </h1>
                    <h2>$900</h2>
                    <p>get yours now!</p>

                </div>

                <div className="twohome">
                    <p>1kl 24k$ y24</p>
                    <h1>4BHK HOUSE 1600FQFT </h1>
                    <h2>$900</h2>
                    <p>get yours now!</p>
                </div>

                <div className="threehome">

                    <p>1kl 24k$ y24</p>
                    <h1>4BHK HOUSE 1600FQFT </h1>
                    <h2>$900</h2>
                    <p>get yours now!</p>
                </div>
            </div>

        </>
    )
}

export default Slider
