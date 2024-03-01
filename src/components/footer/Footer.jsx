import React from 'react'
import "./footer.css"




const Footer = () => {
  return (
   <footer className='footer'>

    <div className='footer-container container'>
<h1 className='footer-title section-title'>Fernanda Guaquinchay</h1>

<ul className='footer-list'>

    <li>
        <a href="#about" className='footer-link'>About</a>
    </li>

    <li>
        <a href="#portfolio" className='footer-link'>Projects</a>
    </li>

    <li>
        <a href="#testimonials" className='footer-link'>Testimonials</a>
    </li>

    <li>
        <a href="" className='footer-link'></a>
    </li>
</ul>


<div className="footer-social">
<a href="" className='footer-social-link' target='_blank'><i className="bx bxl-facebook"></i></a>

<a href="" className='footer-social-link' target='_blank'><i className="bx bxl-instagram"></i></a>

<a href="" className='footer-social-link' target='_blank'><i className="bx bxl-gmail"></i></a>

</div>

<span className='footer-copy'>
    &#169; Mauro Del Sero.Todos los Derechos reservados.
</span>

    </div>
   </footer>
  )
}

export default Footer
