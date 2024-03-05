import React from 'react'
import "./freetime.css"
import caballito from "/src/assets/caballo.jpeg"
import estatuas from "/src/assets/estatuas.jpeg"
import pueblito from "/src/assets/pueblito.jpeg"
import templo from "/src/assets/templo.jpeg"

const FreeTime = () => {
    return (
        <section className='free section' id='free'>
            <h2 className="section-title">Tiempo Libre</h2>
            <span className='section-subtitle'>Arteterapia Oleos</span>
            <div className="freetime-projects grid ">
                <div className="free-card">
                    <h3 className='free-title'>Caballito</h3>
                    <img src={caballito} alt="" className='free-img' />


                </div>

                <div className="free-card">
                    <h3 className='free-title'>Mujeres Danzantes</h3>
                    <img src={estatuas} alt="" className='free-img' />


                </div>

                <div className="free-card">
                    <h3 className='free-title'>Grecia</h3>
                    <img src={pueblito} alt="" className='free-img' />


                </div>

                <div className="free-card"  >
                    <h3 className='free-title'>Mendoza</h3>
                    <img src={templo} alt="" className='free-img' />


                </div>


            </div>




        </section>
    )
}

export default FreeTime