import React from 'react'
import "./footer.css"




const Footer = () => {
  return (
   <footer className='footer'>

    <div className='footer-container container'>
<h1 className='footer-title section-title'>Fernanda Guaquinchay</h1>

<ul className='footer-list'>

    <li>
        <a href="#about" className='footer-link'>Sobre Mí</a>
    </li>

    <li>
        <a href="#portfolio" className='footer-link'>Proyectos</a>
    </li>

    <li>
        <a href="#services" className='footer-link'>Servicios</a>
    </li>

    <li>
        <a href="" className='footer-link'></a>
    </li>
</ul>


<div className="footer-social">
<a href="https://www.facebook.com/mariafernanda.guaquinchay/" className='footer-social-link' target='_blank'><i className="bx bxl-facebook"></i></a>

<a href="https://www.instagram.com/fer30bri/" className='footer-social-link' target='_blank'><i className="bx bxl-instagram"></i></a>

<a target='_blank' href="mailto:mfguaquinchay123@gmail.com" className='footer-social-link' ><i className="bx bxl-gmail"></i></a>

</div>

<span className='footer-copy'>
    &#169; Mauro Del Sero.Todos los Derechos reservados.
</span>

    </div>
   </footer>
  )
}

export default Footer
