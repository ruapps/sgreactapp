import React, { useEffect, useState } from 'react'
import { Row, Col, Stack, Container } from 'react-bootstrap';


const Navbar = () => {
    const [nestlist, setNestlist]= useState(false);
    const [show, setShow] = useState(window.screen.width < 768? false : null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const navbar = [
        { name: 'Home', id: 'home'},
        { name: 'About', id: 'about' },
        { name: 'Our Products', id: 'product', child: [
        { name: 'Product 1', id: 'p1'},
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3'},
        { name: 'Product 4', id: 'p4' },
        ] },
        { name: 'Contact Us', id: 'contact'},
        ];


  return (
           <div className="nav_bar">
            <div className='login_menu w-100'>
                <Container>
                    <Row >
                    <Col xs={8} md={6}>
                        <div className='d-flex align-items-center logo_side'>
                            <a href="#" >
                                <img src="/sgreactapp/logo.png" alt="logo" />
                            </a>
                            <a href="#" className='px-2 ms-1'>
                                Free Delivery
                            </a>
                            <a href="#" className='px-2'>
                                Return Policy
                            </a>
                        </div>
                    </Col>
                    <Col xs={4} md={6} className='d-flex align-items-center'>

                    <Stack gap={{md: 3}} direction="horizontal" className='ms-auto login_side'>
                        <a href="#" className="active me-2 px-md-2 mx-md-1">Login</a>
                        <div className='d-flex align-items-center'>
                            <a href="#" className="px-2 mx-1">Follow Us</a>
                            <a href="#" >
                                <img src="/sgreactapp/fb.png" alt="Facebook icon" className='mx-1' />
                            </a>
                            <a href="#" >
                                <img src="/sgreactapp/linkedin.png" alt="Linked in icon" className='mx-1' />
                            </a>
                            <a href="#" >
                                <img src="/sgreactapp/twiter.png" alt="Twitter icon" className='mx-1' />
                            </a>
                            <a href="#" >
                                <img src="/sgreactapp/insta.png" alt="Instagram icon" className='ms-1' />
                            </a>
                        </div>

                    </Stack>
                        
                    </Col>
                    </Row>
                </Container>
            </div>
            <Container className='brand_menu'>
                    <Row>
                        <Col>
                            <div className='d-flex align-items-center border-bottom brand_div position-relative pt-4 pt-md-3'>
                                <h1 className='brand_name mb-0'>
                                    <img src="/sgreactapp/ShopKart.png" alt="Brand logo" />
                                </h1>
                                <div className='d-md-flex align-items-center ms-auto  d-none'>
                                    <p className='me-2'>WISHLIST (<span>0</span>) </p>
                                    <p>BAG (<span>0</span>) </p>
                                </div>
                                <div className="hamburder_menu d-md-none ms-auto">
                                    {
                                        !show? 
                                        <img src="/sgreactapp/hamburger-menu.png" alt="Hamburder menu ICon" onClick={handleShow}/>
                                        :
                                        <img src="/sgreactapp/cross.png" alt="Hamburder menu ICon" onClick={handleClose}/>
                                    }
                                </div>
                                <img src="/sgreactapp/Star1.png" alt="star icon" className='position-absolute d-none d-md-block'/>
                            </div>
                            <div className={!show? 'navbar_div pt-3 d-none d-md-block':'navbar_div slide_down pt-3 d-none d-md-block'}>
                                <ul className='d-md-flex align-items-center'>

                                    {
                                        navbar?.map( ( link, ind )=>{
                                           
                                            return (
                                                 ind == 2 ? 
                                                <li key={link.id} className={
                                                    nestlist ? 
                                                    'mx-5 mt-5 mt-md-0 position-relative border-bottom-0 active'
                                                    :
                                                    'mx-5 mt-5 mt-md-0 position-relative border-bottom-0'
                                                    } 
                                                    onMouseOver= {()=> setNestlist(true)} 
                                                    onMouseOut={()=> setNestlist(false)} 
                                                    onClick={()=> setNestlist(!nestlist)} 
                                                    >
                                                    <a href="#" className='px-2'>{link.name}</a>
                                                    <ul className={
                                                        nestlist ? 
                                                        "product_list d-block position-absolute active px-2 w-100 border-top-0 mt-0"
                                                        :"product_list position-absolute d-none w-100 border-top-0 mt-0"
                                                        }
                                                    >
                                                        {
                                                            link.child?.map(nestLink => (
                                                            <li key={nestLink.id} className='mt-2'>
                                                                <a href="#">{nestLink.name}</a>
                                                            </li>
                                                            )) 
                                                        }
                                                    </ul>
                                                </li>
                                                    
                                                 :
                                                 <li key={link.id} className={ind > 0 ? 'mx-5 mt-5 mt-md-0': 'ms-1 mt-5 mt-md-0'}>
                                                        <a href="#" className='px-2'>{link.name}</a>
                                                </li>       
                                            )
                                        })
                                    }
                                    
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>

                    </Row>
            </Container>
           </div>
  )
}

export default Navbar
