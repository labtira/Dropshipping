import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div>
        <section className="footer-section">
        <footer className="footer-page">
            <div className="container-footer">
                <div className="row">
                    <div className="footer-col">
                        <h4>Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">AboutUs</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#">How it Works ?</a></li>
                            <li><a href="#">F&Q</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#">Details</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>CONTACT</h4>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i>&nbsp; Position</li>
                            <li><i className="fas fa-phone-alt"></i>&nbsp; +212 *** ** ** **</li>
                            <li><i className="fas fa-at"></i>&nbsp; *****@email.com</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>ABONNEZ VOUS</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </section>
    </div>
  )
}

export default Footer