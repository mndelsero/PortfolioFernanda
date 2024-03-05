import React from 'react'

const Info = () => {
    return (
        <div className='about-info grid'>
            <div className='about-box'>
            <i className='bx bx-award about-icon'></i>
                <h3 className='about-title'>Experiencia</h3>
                <span className='about-subtitle'>15 años de experiencia comprobable</span>

            </div>

            <div className='about-box'>
            <i className='bx bx-briefcase-alt about-icon' ></i>
                <h3 className='about-title'>Completado</h3>
                <span className='about-subtitle'>6 proyectos en entidad educativa.
</span>

            </div>

            <div className='about-box'>
            <i className='bx bx-support about-icon' ></i>
                <h3 className='about-title'>Apoyo</h3>
                <span className='about-subtitle'>en línea 8 horas al día, 5 días a la semana</span>

            </div>
        </div>
    )
}

export default Info
