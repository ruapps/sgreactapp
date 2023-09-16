import React, { useEffect, useRef, useState } from 'react';


const Carousel = ({CurrentItem, ProductsCarousel}) => {


  const ele  = useRef();
  const eleChild= ele.current ;
    
  useEffect(()=>{
    if((eleChild !==  undefined)){
        eleChild.childNodes.forEach((ele) => {
            ele.style.transform= "translateX(" + -100 * CurrentItem.count +"%)";
        });
    }
    console.log(CurrentItem.count)
  },[CurrentItem.count])

  
 
  return (
    <div className="owl-carousel" ref={ele}>

      {ProductsCarousel[0].products?.map((item, ind) => (
        
          <div
            key={ind}
            className= "owl-carousel-item position-relative"
            >
            <img src={item.img} alt={item.name}/>
            <img src="/sgreactapp/Group19.png" alt="link mark" className='position-absolute link_img'/>
            <div className='pro_info mt-2'>
              <h3 className='pro_name'>{item.name}</h3>
              <p className='pro_desc'>{item.description}</p>
              <p className='pro_price mb-0'>{item.price}</p>
            </div>
          </div>
        
      ))}
     
    </div>
  );
};

export default Carousel;
