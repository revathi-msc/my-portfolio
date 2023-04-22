import React from 'react'
import './Project.css'

import P1 from '../images/P1.JPG'
import P2 from '../images/P2.JPG'
import P3 from '../images/P3.JPG'
import P4 from '../images/P4.JPG'
import P5 from '../images/P5.JPG'
import P6 from '../images/P6.JPG'

const data = [
    {
        id: 1,
        image: P1,
        title: 'SIGNUP APPLICATION',
        frontend: 'https://github.com/revathimsc/signup-frontend.git/',
        backend: 'https://github.com/revathimsc/signup-backend',
        demo:'https://signup-app1.netlify.app/'
    },
    {
        id: 2,
        image: P2,
        title: 'O-AUTH FIREBASE PHONE OTP',
        frontend: 'https://github.com/revathimsc/auth-login.git/',
        backend: 'https://github.com/revathimsc/auth-login.git',
        demo:'https://phone-auth-70be1.firebaseapp.com/'
    },
    {
        id: 3,
        image: P3,
        title: 'Crud Book Store Platform with crud operation, data creation for user.',
        frontend: 'https://github.com/revathimsc/bookstore.git/',
        backend: 'https://github.com/revathimsc/bookstore.git/',
        demo:'https://bookstore-application1.netlify.app/'
    },
    {
        id: 4,
        image: P4,
        title: 'CRUD APPLICATION this application to add & delete & update.',
        frontend: 'https://github.com/revathimsc/crud-application.git/',
        backend: 'https://github.com/revathimsc/crud-application.git/',
        demo:'https://curd-application1.netlify.app/'
    },
    {
        id: 5,
        image: P5,
        title: 'I have built basic-Task management tools with using json web token & CRUD Application. User can login & register with username password & create the details',
        frontend: 'https://github.com/revathimsc/task-management-rec.git/',
        backend: 'https://github.com/revathimsc/task-management-rec.git/',
        demo:'https://adorable-pastelito-a5ceaa.netlify.app/auth'
    },
    {
        id: 6,
        image: P6,
        title: 'I have designed the Responsive Flipkart shopping cart; we can order and we can pay through the Paytm wallet (dummy payment gateway)',
        frontend: 'https://github.com/revathimsc/flipkart-frontend.git/',
        backend: 'https://github.com/revathimsc/flipkart-backend',
        demo:'https://iridescent-granita-68829f.netlify.app/'
    },
]


const Project = () => {
    return(
        <section id ='Project'>
            <h2>Project</h2>

            <div className='container Project_container'>
                {
                    data.map(({id, image, title, frontend, backend, demo}) => {
                        return(
                            <article key={id} className='Project_item'>
                                <div className='Project_item-image'>
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="Project_item-cta">
                                     <a href={frontend} className='btn' target='_blank'>FRONTEND</a>
                                     <a href={backend} className='btn btn-primary' target='_blank'>BACKEND</a>
                                     <a href={demo} className='btn btn-primary' target='_blank'>LIVE DEMO</a>
                                </div>
                                
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Project