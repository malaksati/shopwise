import React, { Fragment } from 'react'

function CarouselItem({item}) {
  return (
    <Fragment>
        <div className='carousel-item'>
            <div className='image'>
            <img className='carousel-img' alt='photo' src={item.icon} />
            </div>
            <div className='carousel-text' key={item.id}>
                <p>{item.description}</p>
                <h3>{item.name}</h3>
                <h4>{item.job}</h4>
            </div>
        </div>
    </Fragment>
  )
}

export default CarouselItem