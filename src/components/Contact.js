import React from 'react'
import Navbar from './Navbar'
import './styles/Contact.scss'

const Contact = () => {
  return (
    <>
      <Navbar />
    <div className="contact-container">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Name" />
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Email" />
        <label htmlFor="">Message</label>
        <input type="form" placeholder="Message" />
        <button type="submit">Submit</button>
      </div>
    </>
  )
}

export default Contact