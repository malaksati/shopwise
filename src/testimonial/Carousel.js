import React, { Fragment, useState } from 'react'
import CarouselItem from './CarouselItem'
import test1 from '../images/img1.jpg'
import test2 from '../images/img2.jpg'
import test3 from '../images/img3.jpg'

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const items = [
        {
            icon: test1,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci",
            name: "Marnie Lotter",
            job: "Web Developer"
        },
        {
            icon: test2,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci",
            name: "John Walker",
            job: "Data Sciencist"
        },
        {
            icon: test3,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe provident dolorem a quaerat quo error facere nihil deleniti eligendi ipsum adipisci",
            name: "Jasmine Lotter",
            job: "Software Developer"
        },
    ]
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1
        }
        setActiveIndex(newIndex)
    }
    return (
        <Fragment>
            <div className='testimonials'>
                <div className='carousel'>
                    <div className='inner' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                        {items.map(item => {
                            return <CarouselItem item={item} />
                        })}
                    </div>
                </div>
                <div className='carousel-buttons'>
                    <div onClick={() => {
                        updateIndex(activeIndex - 1)
                    }} className='btn-left'>
                        <button><i className="fa fa-2x fa-solid fa-chevron-left"></i></button>
                    </div>
                    <div className='indicators'>
                        {items.map((item, index) => {
                            return (
                                <button onClick={() => {
                                    updateIndex(index)
                                }} className='indicator-btn'><i className={`fa fa-regular fa-circle-dot ${index === activeIndex ? 'ch' : 'not-ch'
                                    }`}></i></button>
                            )
                        })}
                    </div>
                    <div onClick={() => {
                        updateIndex(activeIndex + 1)
                    }} className='btn-right'>
                        <button><i className="fa fa-2x fa-solid fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Carousel