import React from 'react'
import Footer from '../pages/Footer/Footer'
import Navbar from '../pages/Navbar/Navbar'
import PaymentDetails from '../pages/PaymentDetails/PaymentDetails'

const Checkout = () => {
  return (
    <div>
        <Navbar/>
        <PaymentDetails/>
        <Footer/>
    </div>
  )
}

export default Checkout