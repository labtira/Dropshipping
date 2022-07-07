import React from 'react'
import {Link} from "react-router-dom";
import './style.css'

const Navbar = () => {


    function myFunction() {
        var menu = document.querySelector('.menu');
        var menuBtn = document.querySelector('.menu button');
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('opened')
        })
    }

  return (
    <div>
        <header>
        <h1>Xtreme-Fit</h1>

        <section className="menu">
            <ul className="menu-list">
                <li className="active"><Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link></li>
                <li><Link to="/product" style={{color: 'white', textDecoration: 'none'}}>Product</Link></li>
                <li><Link to="/about" style={{color: 'white', textDecoration: 'none'}}>About Us</Link></li>
                <li><Link to="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</Link></li>
            </ul>

            <button onClick={myFunction}>
                <i className="fas fa-times"></i>
                <i className="fas fa-bars"></i>
            </button>
        </section>
    </header>

    

    </div>
  )
}

export default Navbar