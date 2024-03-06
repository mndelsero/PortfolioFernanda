import React, { useState } from 'react'

const ExperienceItems = ({ item }) => {
  const [toogleText, setToggle] = useState(false)




  return (
    <div className="exp-card" key={item.id}>
      <img src={item.image} alt={item.title} className='exp-img' />
      <h3 className='exp-title'>{item.title}</h3>
<button href="" className='exp-button' onClick={() => { setToggle(!toogleText) }}>
        Ver Más <i className='bx bx-right-arrow-alt exp-button-icon'></i>
      </button>

      {toogleText === true &&
        (
          <div className='exp-info'>
            <p className='exp-p'>Fecha: <span className='exp-p-span'>{item.date}</span></p>
            <p className="exp-p">Lugar: <span className='exp-p-span'>{item.place}</span></p>
             
            
            <p className='exp-description'><span className='exp-p'>Experiencia:</span>  {item.description}</p>
            <button href="" className='exp-button' onClick={() => { setToggle(!toogleText) }}>
        Ver Menos <i className='bx bx-right-arrow-alt exp-button-icon'></i>
      </button>
           


          </div>
        )}

    </div>
  )
}

export default ExperienceItems
