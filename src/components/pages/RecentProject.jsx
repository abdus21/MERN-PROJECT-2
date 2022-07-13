import React from 'react'
import { Button, Card, CardImg, Col, Container, Row } from 'react-bootstrap'

const RecentProject = () => {
  return (
    <>
       <Container className='py-5'>
          <Row>
             <Col md={12}>
                <h4 className='text-primary text-center my-4 fw-bold'>Recent Projects</h4>
             </Col>
             <Col md={4}>
             <Card className='shadow-sm border-light'>
             <CardImg src='https://firebasestorage.googleapis.com/v0/b/portfolio-66931.appspot.com/o/project-1.jpg?alt=media&token=09276661-5ca6-4e9c-aed0-292dbafa7d19'/>
                    <Card.Body className='text-center'>
                          
                        <div className="card-contect">
                            <h5>App Development</h5>
                            <p style={{fontSize:"16px"}}>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                            <Button>Details</Button>
                        </div>
                    </Card.Body>
                  </Card>
             </Col>
             <Col md={4}>
             <Card className='shadow-sm border-light'>
             <CardImg src='https://firebasestorage.googleapis.com/v0/b/portfolio-66931.appspot.com/o/project-1.jpg?alt=media&token=09276661-5ca6-4e9c-aed0-292dbafa7d19'/>
                    <Card.Body className='text-center'>
                          
                        <div className="card-contect">
                            <h5>App Development</h5>
                            <p style={{fontSize:"16px"}}>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                            <Button>Details</Button>
                        </div>
                    </Card.Body>
                  </Card>
             </Col>
             <Col md={4}>
             <Card className='shadow-sm border-light'>
             <CardImg src='https://firebasestorage.googleapis.com/v0/b/portfolio-66931.appspot.com/o/project-1.jpg?alt=media&token=09276661-5ca6-4e9c-aed0-292dbafa7d19'/>
                    <Card.Body className='text-center'>
                          
                        <div className="card-contect">
                            <h5>App Development</h5>
                            <p style={{fontSize:"16px"}}>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                            <Button>Details</Button>
                        </div>
                    </Card.Body>
                  </Card>
             </Col>
            
          </Row>
       </Container>
    </>
  )
}

export default RecentProject