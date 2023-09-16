import { React,  useState} from 'react'
import {Row, Col, Container } from 'react-bootstrap';
import categories from '../api/categories.json'
import Carousel from './Carousel'

const Products = () => {

    const [currentItem, setCurrentItem] = useState({
        eleClass: " ",
        currIndex: 0,
        count: 0  
      });

    const [category, setCategory]= useState("Jewelery");

    const categoryName = category.toLowerCase();
    const productsCarousel = categories.filter((item)=>(
          item.id === categoryName
    ))
    

    const handlePrev = () => {

    setCurrentItem((prevEleState) => (
        {
            eleClass: " ", 
            currIndex : ( prevEleState.currIndex - 1 + productsCarousel[0].products.length) % productsCarousel[0].products.length,
            count: prevEleState.count > 0 ? prevEleState.count - 1 : 0
        }
        ));
    };

    const handleNext = () => {
    setCurrentItem((prevEleState) => (
        { 
        eleClass: "active", 
        currIndex: (prevEleState.currIndex + 1) % productsCarousel[0].products.length, 
        count: prevEleState.count < productsCarousel[0].products.length-1 ? prevEleState.count + 1 : 0
        }
        ));
    
      };

    const categoryList= ()=>{
            let currEle;
            let currEleText; 
            return (ev)=> { 
                currEle= ev.target;
                currEleText= currEle.textContent;
                setCategory(currEleText) 

            }

    }

    const handleProductCarousel = categoryList()

  return (
    <Container>
        <Row>
            <Col xs={12} md={8}>
                <div className='new_product position-relative'>
                    <img src="/sgreactapp/Star2.png" alt="star icon" className='position-absolute'/>
                    <h2>New products</h2>
                </div>
            </Col>
            <Col xs={12} md={4} className='d-flex order-4 order-md-2 mt-5 mt-md-0'>
                <div className='navigate_btns align-self-center mx-auto ms-md-auto'>
                    <img src="/sgreactapp/Arrow2.png" alt="Left arrow"  className="me-5  py-3"  onClick={handlePrev}/>
                    <img src="/sgreactapp/Arrow1.png" alt="Right arrow" className=' py-3' onClick={handleNext}/>
                </div>
            </Col>
            <Col xs={12} md={4} className='order-2 order-md-3 mb-5 mb-md-0'>
                <ul className='pro_category d-flex d-md-block mb-4 mb-md-0'>
                    {
                        categories?.map((item, ind)=>(
                            <li className={category === item.name? 'mt-3 me-2 pe-2 active' : 'mt-3 me-2 pe-2'} key={ind} onClick={(e)=> handleProductCarousel(e)}>{item.name}</li>
                        ))
                    }
                </ul>
            </Col>
            <Col xs={12} md={8} className='order-3 order-md-4 mt-md-3'>
                    <Carousel 
                        Categories ={categories}
                        CurrentItem= {currentItem}
                        ProductsCarousel= {productsCarousel}
                    />
            </Col>
        </Row>
    </Container>
  )
}

export default Products
