import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Products from '../components/Products'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
        <div  className='navigation'>
            <Navbar/>
        </div>
        <div className='header'>
            <Header/>
        </div>
        <div className='product'>
            <Products/>
        </div>
        <div className='contact'>
            <Contact/>
        </div>
    </>
  )
}

export default Home
