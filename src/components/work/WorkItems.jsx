import React from 'react'

const WorkItems = ({ item }) => {
    return (
        <div className="work-card" key={item.id}>
            <img src={item.image} alt="" className='work-img' />
            <h3 className='work-title'>{item.title}</h3>
            <p className='work-description'>{item.description}</p>

        </div>
    )
}

export default WorkItems