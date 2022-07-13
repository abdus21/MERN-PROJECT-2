import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Cours = () => {
  return (
    <>
      <Container className='py-4'>
        <Row>
            <Col md={12}>
                <h4 className='text-center text-primary fw-bold'>OUR COURSES</h4>
            </Col>
            <Col md={6} className='my-3'>
                <Row>
                    <Col md={6}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-66931.appspot.com/o/course-1.jpg?alt=media&token=667f2be3-781e-46ad-aea4-c8629091aba0" alt="" />
                    </Col>
                    <Col md={6}>
                      <h6 className='fw-bold'>Web Development</h6>
                      <p style={{fontSize:"14px"}}>I build native and cross platfrom mobile app for your business app for your business</p>
                      <a style={{textDecoration:"none"}} href="">Details</a>
                    </Col>
                </Row>
            </Col>
            <Col md={6} className='my-3'>
            <Row>
                <Col md={6}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-66931.appspot.com/o/course-1.jpg?alt=media&token=667f2be3-781e-46ad-aea4-c8629091aba0" alt="" />
                </Col>
                <Col md={6}>
                  <h6 className='fw-bold'>Web Development</h6>
                  <p style={{fontSize:"14px"}}>I build native and cross platfrom mobile app for your business app for your business</p>
                  <a style={{textDecoration:"none"}} href="">Details</a>
                </Col>
                </Row>
            </Col>
            <Col md={6} className='my-3'>
            <Row>
                <Col md={6}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-66931.appspot.com/o/course-1.jpg?alt=media&token=667f2be3-781e-46ad-aea4-c8629091aba0" alt="" />
                </Col>
                <Col md={6}>
                  <h6 className='fw-bold'>Web Development</h6>
                  <p style={{fontSize:"14px"}}>I build native and cross platfrom mobile app for your business app for your business</p>
                  <a style={{textDecoration:"none"}} href="">Details</a>
                </Col>
                </Row>
            </Col>
            <Col md={6} className='my-3'>
            <Row>
                <Col md={6}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-66931.appspot.com/o/course-1.jpg?alt=media&token=667f2be3-781e-46ad-aea4-c8629091aba0" alt="" />
                </Col>
                <Col md={6}>
                  <h6 className='fw-bold'>Web Development</h6>
                  <p style={{fontSize:"14px"}}>I build native and cross platfrom mobile app for your business app for your business</p>
                  <a style={{textDecoration:"none"}} href="">Details</a>
                </Col>
                </Row>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Cours