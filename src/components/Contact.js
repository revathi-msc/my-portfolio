import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Contact = () => {
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                <MdOutlineEmail className='contact__option-icon'/>
                 <h4>Email</h4>
                 <h5>revathimsccse@gmail.com</h5>  
                 <a href="mailto:revathimsccse@gmail.com" target="_blank">Send a message</a> 
                </article>

                <article className="contact__option">
                <BsLinkedin className='contact__option-icon'/>
                 <h4>LinkedIn</h4>
                 <h5>revathi-mahalingam</h5>  
                 <a href="https://in.linkedin.com/in/revathi-mahalingam-12a666248" target="_blank">Send a message</a> 
                </article>

                <article className="contact__option">
                <BsGithub className='contact__option-icon'/>
                 <h4>Github</h4>
                 <h5>revathimsccse</h5>  
                 <a href="https://github.com/revathimsc/revathimsc108" target="_blank">Send a message</a> 
                </article>

                </div>
            {/* END OF CONTACT OPTIONS*/}
            <form action="">
                <input type="text" name='name' placeholder='Your Full Name' required/>
                <input type="email" name='email' placeholder='Your Email' required/>
                <textarea name='message' rows="7" placeholder='Your message' required/>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
            </div>    
        </section>
    )
}

export default Contact