import React from 'react'
import "./about.css"
import AboutImg from "../../assets/IMGCV2.jpg"
import CV from "/src/assets/CVColor.pdf"
import Info from './Info'

const About = () => {
    return (
        <section className='about section' id='about'>
            <h2 className='section-title'>About Me</h2>
            <span className='section-subtitle'>My Introduction</span>

            <div className='about-container container grid'>
                <img src={AboutImg} alt="" className='about-img' />

                <div className='about-data'>
                    <Info />

                    <p className='about-description'>Frotend Developer.I create websites with UI / UX user interface. I have a year of experience and many clients are happy with the projects carried out</p>

                    <a href={CV} download="" className='button button-flex'>
                        Download CV
                        <svg className='svg-download' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm8 7h-1V4l5 5h-4z" /></svg>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default About
