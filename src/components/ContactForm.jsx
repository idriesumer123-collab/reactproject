import React from 'react'
import './ContactForm.css'

function ContactForm() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form>
        <label>First Name</label>
        <input type="text" placeholder="Your name" />

        <label>Last Name</label>
        <input type="text" placeholder="Your last name" />

        <label>Country</label>
        <select>
          <option>India</option>
          <option>Australia</option>
          <option>USA</option>
          <option>UK</option>
        </select>

        <label>Subject</label>
        <textarea placeholder="Write something..." />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm