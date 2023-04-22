import React from 'react'
import AboutImg from '../images/revathi.png'
const About = () => {
   
    return (
        <section id="about">
            <div className="container about_me">
            <div data-aos="fade-right" className="about_top">
                <h2>About Me</h2>
                <p>I'm a Full stack Web developer passionate about creating interactive single page applications and
                   Knowledgeable in a wide range of programming languages
                </p>
                <div className="line"></div>
            </div>
            <div className="about_bottom">
                <div data-aos="fade-right" className="about_bottom_left">
                    <img src={AboutImg} alt="about_image" />
                </div>
                <div data-aos="fade-left" className="about_bottom_right">
                    <h2>Programmer and Web Developer</h2>
                    <div className="about_details">
                        <div className="about_details_left">
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Birthday :</span>10 June,1995</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Phone    :</span>9080272649</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>City     :</span>Ooty</p>
                        </div>
                        <div className="about_details_right">
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Age:</span> 28</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Degree:</span>Msc(Computer Science)</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Email:</span>revathimsccse@gmail.com</p>
                            <p><span><i className="fa fa-angle-double-right" aria-hidden="true"></i>Freelance:</span>Partly Available</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </section>
    )
}

export default About