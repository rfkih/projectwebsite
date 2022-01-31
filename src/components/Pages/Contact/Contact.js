import React from 'react'
// import {Link, Routes} from 'react-router-dom'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Contact() {
    return (
        <div className='Main-container'>
            <div className='first-container'>
                <h1 className='title' >Contact us if...</h1>
            </div>
            <div className='second-container'>
                <h2>I am ...</h2>
                <button className='btn btn-contact btn-outline-primary '>Employee</button>
                <button className='btn btn-contact btn-outline-primary '>Employer</button>
                <button className='btn btn-contact btn-outline-primary '>Bicycle Shop</button>
                <button className='btn btn-contact btn-outline-primary'>Other</button>
            </div>
            <div className='third-container'>
                <div className='input-1'>
                    <input
                        name="yourname"
                        placeholder="Your Name"
                        type="text"
                        className="form-control my-2"
                    />
                    <input
                        name="companyname"
                        placeholder="Company Name"
                        type="text"
                        className="form-control my-2"
                    />
                </div>
                <div className='input-1'>
                    <input
                        name="email"
                        placeholder="Your E-mail Adress"
                        type="text"
                        className="form-control my-2"
                    />
                    <input
                        name="phonenumber"
                        placeholder="Your Number"
                        type="text"
                        className="form-control my-2"
                    />
                </div>
                <div className='input-1'>
                    <input
                        name="message"
                        placeholder="Your Message"
                        type="text"
                        className="form-control my-2"
                    />
                </div>
                <button className='btn btn-contact'>Submit</button>

            </div>
        </div>
    )
}

export default Contact
