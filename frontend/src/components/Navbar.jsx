import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navimg">
            <div className="navlogo"></div>
            <div className="navhead"></div>
        </div>
        <div className="navlinks">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Courses</a>
            <a href="#contact">Services</a>
            <a href="#contact">Testimonials</a>
            <a href="#contact">Contact</a>
        </div>
        <div className='phonenumber'>1-800-123-4567</div>
        <div className='bttn'>Enquire</div>
    </div>
  )
}

export default Navbar