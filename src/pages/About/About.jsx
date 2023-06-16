import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.png";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About LibraWeb</h2>
            <p className='fs-17'>Welcome to the LibraWeb! We are a community library dedicated to providing our patrons with access to information, resources, and programs that support lifelong learning. We offer a wide variety of materials, including books, magazines, newspapers, DVDs, and audiobooks.</p>
            <p className='fs-17'> We also offer a variety of programs and services, such as storytime for children, computer classes for adults, and book clubs. We are committed to providing a welcoming and inclusive environment for all.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
