import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_t5ma9fn', 'template_rjjm8o6', form.current, {
            publicKey: 'YELDE0Xb_Dm-6L8xc',
          })
          e.target.reset()
      };

    return (
        <section className='contact section' id='contact'>
            <h2 className='section-title'>Ponete en Contacto</h2>
            <span className='section-subtitle'>Contactarse</span>

            <div className='contact-container grid container'>
                <div className="contact-content">

                    <h3 className='contact-title'>Hablame</h3>
                    <div className="contact-info">
                        <div className="contact-card">
                            <i className='bx bx-mail-send contact-card-icon'></i>
                            <h3 className="contact-card-title">Email</h3>
                            <span className="contact-card-data">usuario@gmail.com</span>

                            <a href="mailto:mndelsero@gmail.com" className="contact-button">Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i></a>
                        </div>

                        <div className="contact-card">
                            <i className='bx bxl-whatsapp contact-card-icon'></i>
                            <h3 className="contact-card-title">Whatsapp</h3>
                            <span className="contact-card-data">+54 9 2615 99-9913</span>

                            <a href="" className="contact-button">Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i></a>
                        </div>

                        <div className="contact-card">
                            <i className='bx bxl-messenger contact-card-icon'></i>
                            <h3 className="contact-card-title">Messenger</h3>
                            <span className="contact-card-data">user.fb123</span>

                            <a href="" className="contact-button">Write me <i className='bx bx-right-arrow-alt contact-button-icon'></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact-content">

                    <h3 className='contact-title'>Contame de tu Proyecto</h3>


                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <div className="contact-form-div">
                            <label className='contact-form-tag'>Name</label>
                            <input type="text" name='name' className='contact-form-input' placeholder='Inster your name' />


                        </div>

                        <div className="contact-form-div">
                            <label className='contact-form-tag'>Email</label>
                            <input type='email' name='email' className='contact-form-input' placeholder='Inster your name' />


                        </div>

                        <div className="contact-form-div contact-form-area">
                            <label className='contact-form-tag'>Project</label>
                            <textarea name="projects" className='contact-form-input' cols="30" rows="10" placeholder='Write your project'></textarea>
                        </div>


                        <button className='button button-flex'>Send Message!
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z" /></svg>
                        </button>

                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact