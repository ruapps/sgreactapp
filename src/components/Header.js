import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Container>
          <div className='position-relative'>
            <h2 className="header_text position-absolute">
                <span>Fresh</span>
                <span>2022</span>
                <span>Look</span>
            </h2>
          </div>
      </Container>
      <div className='head_img text-end position-relative'>
        <img src="/sgreactapp/Star3.png" alt="Star image" className='position-absolute'/>
        <img src="/sgreactapp/jessica-radanavong-IchPBHFD0pw-unsplash.png" alt="boy image" className='position-relative'/>
      </div>
      <div className='overlap_div'>
        <h5>
            <p className='pb-0 mb-0'>
              Oregon jacket
            </p>
            <p>$124</p>
        </h5>
      </div>
      <div className='position-relative star_icon'>
        <img src="/sgreactapp/Star4.png" alt="Star icon" className='position-absolute'/>
      </div>
      <Container>
      <div className='see_more position-relative'>
          <a href="#" className='text-light'>See more 
            <img src="/sgreactapp/Vector.png" alt="up arrow icon" className='ms-2'/>
          </a>
      </div>
      </Container>
    </>
  )
}

export default Header
