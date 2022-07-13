import React from 'react'
import { Container, Row,Col, Card } from 'react-bootstrap'
import '../pages/Service.css'


const Service = () => {

  return (
    <>
       <Container>
          <Row>
              <Col md={12} className='text-center my-5'>
                  <h2 style={{color:"#0082eb",fontSize:"28px",fontWeight:"600"}}>MY SERVICES</h2>
              </Col>
                <Col md={4}>
                  <Card className='cardshadow'>
                      <Card.Body className='text-center'>
                        <div className="card-icon my-3" style={{width:"90px",height:"90px",borderRadius:"150px",border:"1px solid #0082eb",color:"#0082eb",margin:"auto",lineHeight:"90px"}}>

                        <span style={{fontSize:"40px"}}><i class='bx bx-mobile-vibration'></i></span>
                        </div>
                        
                         <div className="card-contect my-5">
                            <h5>App Development</h5>
                              <p style={{fontSize:"16px"}}>I desing modern user interface and other graphical components for your business and instiution.</p>
                         </div>
                      </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                <Card className='cardshadow'>
                      <Card.Body className='text-center'>
                        <div className="card-icon my-3" style={{width:"90px",height:"90px",borderRadius:"150px",border:"1px solid #0082eb",color:"#0082eb",margin:"auto",lineHeight:"90px"}}>

                        <span style={{fontSize:"40px"}}><i class='bx bx-mobile-vibration'></i></span>
                        </div>
                        
                         <div className="card-contect my-5">
                            <h5>App Development</h5>
                              <p style={{fontSize:"16px"}}>I desing modern user interface and other graphical components for your business and instiution.</p>
                         </div>
                      </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                <Card className='cardshadow'>
                      <Card.Body className='text-center'>
                        <div className="card-icon my-3" style={{width:"90px",height:"90px",borderRadius:"150px",border:"1px solid #0082eb",color:"#0082eb",margin:"auto",lineHeight:"90px"}}>

                        <span style={{fontSize:"40px"}}><i class='bx bx-mobile-vibration'></i></span>
                        </div>
                        
                         <div className="card-contect my-5">
                            <h5>App Development</h5>
                              <p style={{fontSize:"16px"}}>I desing modern user interface and other graphical components for your business and instiution.</p>
                         </div>
                      </Card.Body>
                  </Card>
                </Col>
          </Row>
       </Container>
    </>
  )
}

export default Service