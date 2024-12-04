import React, { Fragment } from 'react'
import img1 from './images/truck.png'
import img2 from './images/hand.png'
import img3 from './images/head.png'
import Carousel from './testimonial/Carousel'
function ServicesTest() {
    return (
        <Fragment>
            <Carousel/>
            <div className='content'>
                <div className='container'>
                    <div className='box'>
                        <div className='image'>
                            <img src={img1} alt='photo' />
                        </div>
                        <h4>Free Delivery</h4>
                        <p>If you are going to use of Lorem, you need to be sure there anything</p>
                    </div>
                    <div className='box'>
                        <div className='image'>
                            <img src={img2} alt='photo' />
                        </div>
                        <h4>30 Day Return</h4>
                        <p>If you are going to use of Lorem, you need to be sure there anything</p>
                    </div>
                    <div className='box'>
                        <div className='image'>
                            <img src={img3} alt='photo' />
                        </div>
                        <h4>27/4 Support</h4>
                        <p>If you are going to use of Lorem, you need to be sure there anything</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ServicesTest