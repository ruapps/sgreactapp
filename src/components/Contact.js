import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
    const [val, setVal]= useState({
        name: "",
        email: "",
        message: ""
    });

const handleChange = (ev)=>{
    const {name , value} = ev.target;
    setVal((prevVal)=>{
        return { 
            ...prevVal,
            [name]: value
        }
    })
}
  return (
    <Container>
        <Row>
            <Col xs={12} md={4}>
                <div className='text-center text-md-start'>
                    <h4>Newslleter</h4>
                    <p>Get news about articles and updates in your inbox.</p>
                </div>
            </Col>
            <Col xs={12} md={8}>
                <form action="#" className='ms-md-5 mt-5 mt-md-0' id='form'>
                    <input required type="text" name="name" value={val.name} placeholder='NAME' className='ps-2 pb-2' onChange={(e)=> handleChange(e)}/>
                    <input required type="email" name="email" value={val.email} placeholder='EMAIL' className='ps-2 pb-2 mt-4' onChange={(e)=> handleChange(e)}/>
                    <textarea required name="message" value={val.message} placeholder='MESSAGE' className='ps-2 pb-2 mt-4' onChange={(e)=> handleChange(e)}/>
                </form>
            </Col>
            <Row>
                <Col className='position-relative'>
                    <div className="foot_getin d-inline-block mt-5">
                        <span className='d-block'>GET</span>
                        <span className='d-md-inline d-block'>IN</span>
                        <span>TOUCH</span>
                    </div>
                    <button form="form" type="submit" className='rounded-circle position-absolute'>
                        SEND
                    </button>
                </Col>
            </Row>
        </Row>
    </Container>
  )
}

export default Contact
