import React, { useState } from 'react'
import './DarkModeSwitch.css';







function Footer() {


    const [darkMode, setDarkMode] = useState(false)




    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.body.classList.add("dark-theme")
        }
        else {
            document.body.classList.remove("dark-theme")
        }
    }


    return (
        <>


            <div className="footer-body">

                <div className="form">

                    <h1 className='sub'>Subscribe Our News Letter</h1>
                    <form action="" >
                        <input type="text" placeholder="enter your email" />

                        <botton className="fbutton"><a href="#">send</a></botton>
                    </form>
                </div>


            </div>

            <div className="theme-switch">
                <input type="checkbox" id="theme-switch" className="theme-switch-input" checked={darkMode} onChange={handleToggleDarkMode} />
                <label htmlFor="theme-switch"></label>
                <span>Dark Theme</span>
            </div>

            <div class="headpara">

                <div class="head1-para1">

                    <div class="head1">USEFUL LINKS</div>
                    <ul >
                        <li>Home</li>
                        <li>Featured</li>
                        <li>Services</li>
                        <li>Explore</li>
                        <li>Contact</li>
                    </ul>


                </div>

                <div class="head2-para2">
                    <div class="head1">ABOUT US</div>
                    <ul >
                        <li>about us</li>
                        <li>how it works</li>
                        <li>contact us</li>
                        <li>blogs</li>
                    </ul>

                </div>

                <div class="head3-para3">
                    <div class="head1">terms</div>
                    <ul >
                        <li>privacy policy</li>
                        <li>terms and condition</li>
                        <li>copyright policy</li>
                        <li>security</li>
                        <li>fines and charges</li>
                    </ul>
                </div>

                
                <div class="footerlogo">
                    <div class="head1">logo</div>
                    no 65 west-lane, newyork city.
                    U.s
                    
                </div>


            </div>




        </>
    )
}

export default Footer