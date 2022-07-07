import React from 'react'
import Banner from '../pages/Banner/Banner'
import FAQ from '../pages/F&Q/FAQ'
import Footer from '../pages/Footer/Footer'
import HowItWorks from '../pages/HowItWorks/HowItWorks'
import Navbar from '../pages/Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <HowItWorks/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default Home