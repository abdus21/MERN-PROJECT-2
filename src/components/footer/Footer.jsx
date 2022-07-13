import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import '../footer/Footer.css'

const Footer = () => {
  return (
     <>
        <section className="foter-section">
          <div className="foter-top">
            <Container>
               <Row>
                  <Col md={3}>
                  <div className="foter-widget">
                    <img src="./photo/logo2.png" alt=""/>
                    <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                   <div className="widget-social">
                    <ul>
                      <li><span>Follow Me:</span></li>
                      <li><a href="#"><i className='bx bxl-facebook'></i></a></li>
                      <li><a href="#"><i className='bx bxl-github' ></i></a></li>
                    </ul>
                   </div>
                  </div>
                  </Col>
                  <Col md={3}>
                      <div className="foter-widget">
                      <h3>Quick Links</h3>
                      <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Performance</a></li>
                        <li><a href="#">Help (FAQ)</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                      </div>
                  </Col>
                  <Col md={3}>
                  <div className="foter-widget">
                      <h3>Other Resources</h3>
                      <ul>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Business Loans</a></li>
                        <li><a href="#">Loan Services</a></li>
                      </ul>
                  </div>
                  </Col>
                  <Col md={3}>
                      <div className="foter-widget">
                          <h3>Contact Me</h3>
                          <div className="foter-contect">
                            <div className="foter-contect-item d-flex">
                              <span><i className="fas fa-map-marker-alt"></i></span>
                              <ul>
                                <li>6890 Blvd, The Bronx, NY 1058 New York, USA</li>
                              </ul>
                            </div>
                            <div className="foter-contect-item d-flex">
                              <span><i className="far fa-envelope"></i></span>
                              <ul>
                                <li><a href="mailto:info@website.com">hello@finix.com</a>
                                  <a href="#">skype: example</a>
                                </li>
                              </ul>
                              </div>
                            <div className="foter-contect-item d-flex">
                              <span className="f-c-i-i"><i className="fas fa-phone-volume"></i></span>

                              <ul>
                                <li><a href="tel:info@website.com">+1 (514) 312-5678</a>
                                  <a href="tel:info@website.com">+1 (514) 312-6688</a>
                                </li>
                              </ul>

                            </div>
                          </div>
                      </div>
                  </Col>
               </Row>
            </Container>
          </div>
          <div className="foter-bottom pt-4 pb-3 text-center">
            <Container>
               <Row>
                 <Col md={12}>
                 <div className="Copyright">
                    <p>Copyright © 2021 <a href="https://www.developerjillur.me">Abdus Samad</a></p>
                  </div>
                 </Col>
               </Row>
            </Container>
          </div>
        </section>
     </>
  )
}

export default Footer