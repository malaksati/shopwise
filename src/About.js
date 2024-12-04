import React, { Fragment } from 'react'
import about1 from './images/about.png'
import team1 from './images/team1.png'
import team2 from './images/team2.png'
import team3 from './images/team3.png'
import team4 from './images/team4.png'
import ServicesTest from './ServicesTest'
function About() {
  return (
    <Fragment>
      <div className='section-who'>
        <div className='container'>
          <div className='image'>
            <img src={about1} alt='photo' />
          </div>
          <div className='text'>
            <h1>Who We Are</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur quibusdam enim expedita sed nesciunt incidunt accusamus adipisci officia libero laboriosam!</p>
            <p>Proin gravida nibh vel velit auctor aliquet. nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Duis sed odio sit amet nibh vultate cursus a sit amet mauris.</p>
          </div>
        </div>
      </div>
      <div className='section-why'>
        <div className='container'>
          <div className='heading-about'>
            <h1>Why Choose Us?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className='box-content'>
            <div className='box'>
              <i class="fa fa-2x fa-light fa-pen-fancy"></i>
              <h3>Creative Design</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
            </div>
            <div className='box'>
              <i class="fa fa-2x fa-solid fa-object-ungroup"></i>
              <h3>Flexible Layouts</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
            </div>
            <div className='box'>
              <i  class="fa fa-2x fa-light fa-sharp fa-envelope"></i>
              <h3>Email Marketing</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
            </div>
          </div>
        </div>
      </div>
      <div className='team-members'>
        <div className='container'>
          <div className='heading-about'>
            <h1>Our Team Members</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          <div className='box-content'>
            <div className='box'>
              <img src={team1} alt='photo' />
              <h3>John Muniz</h3>
              <p>Project Engineer</p>
            </div>
            <div className='box'>
              <img src={team2} alt='photo' />
              <h3>Alea Brooks</h3>
              <p>Graphics Designer</p>
            </div>
            <div className='box'>
              <img src={team3} alt='photo' />
              <h3>Anders Glick</h3>
              <p>Software Developer</p>
            </div>
            <div className='box'>
              <img src={team4} alt='photo' />
              <h3>Richard Tice</h3>
              <p>Web Developer</p>
            </div>
          </div>
        </div>
      </div>
      <ServicesTest />
    </Fragment>
  )
}

export default About