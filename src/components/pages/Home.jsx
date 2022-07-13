import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Charts from './Charts'
import Cours from './Cours'
import './Home.css'
import HowiWork from './HowiWork'
import RecentProject from './RecentProject'
import Service from './Service'
const Home = () => {

  return (
    <>
       <section className='bannar-section'>
         <div className="bannarOverlay d-flex align-items-center text-center justify-content-center">
             <div className="bannar-content">
                <h1>SOFTWARE ENGINEER</h1>
                <h4>MERN Stack Developer</h4>
                <Button>More info</Button>
             </div>          
         </div>
       </section>
    <Container>
      <Row>
         <Col md={12}>
           <Service />
         </Col>
         <Col md={12}>
           <Charts />
         </Col>
      </Row>
    </Container>
    <HowiWork />
    <Container>
      <Row>
         <Col md={12}>
          <RecentProject/>
         </Col>
         <Col md={12}>
           <Cours />
         </Col>
         <Col md={12}></Col>
      </Row>
    </Container>





    </>
  )
}

export default Home