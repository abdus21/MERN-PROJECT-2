import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../Form/Form.css'

const MyForm = () => {
  return (
    <>
    <Container className='my-5'>
       <Row>
          <Col md={5}>
            <h4 style={{fontSize:'23px',fontWeight:'600'}}>Quick Connect</h4>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicTextarea">
            <Form.Label>Message</Form.Label>
            <textarea name="" className='form-control' style={{height:'100px'}} id="Message" placeholder='Message'></textarea>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
    </Form>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className='mt-5'>
             <h4 style={{fontSize:'23px',fontWeight:'600'}}>Discuss Now</h4>
             <p>Noakhali,shuborn chor</p>
             <p><i class='bx bx-envelope bx-fade-left' ></i> yy5841453@gmail.com</p>
             <p><i class='bx bx-mobile'></i> 01933445</p>
             
          </Col>
       </Row>
    </Container>
       
    </>
  )
}

export default MyForm