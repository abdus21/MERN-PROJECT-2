import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../pages/HowiWork.css';
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';

/* const SimpleHook = () => {
  useCountUp({ ref: 'counter', end: 1234567 });
  return <span id="counter" />;
};
 */
const HowiWork = () => {
  return (
    <>
      <section className='midle-bannar'>
        <div className='midle-bannarOvarly'>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={4}>
                          <div className='text-center' >
                          <h2> <CountUp className='text-light fw-bold' end={100} delay={2}/></h2>
                          <h4 style={{color:'white',margin:'auto'}}>Total Projects</h4>
                          <hr className='bg-white w-25 m-auto mt-2' />
                          </div>
                          
                            
                        </Col>
                        <Col md={4}>
                        <div className='text-center' >
                          <h2> <CountUp className='text-light fw-bold' end={90} delay={2}/></h2>
                          <h4 style={{color:'white'}}>Total Clients</h4>
                          <hr className='bg-white w-25 m-auto mt-2' />
                          </div>
                        </Col>
                        <Col md={4} className='d-flex  align-content-center justify-content-center'>
                           <Card className='w-100 mt-4'>
                            <Card.Body>
                               <div >
                               <h6>  How i Work</h6>
                               <p><span style={{display:'inline-block',marginRight:'10px'}}><i class='bx bx-check'></i></span>Requirement Gathering</p>

                               <p><span style={{display:'inline-block',marginRight:'10px'}}><i class='bx bx-check'></i></span>System Analysis</p>

                               <p><span style={{display:'inline-block',marginRight:'10px'}}><i class='bx bx-check'></i></span>Coding Testing</p>

                               <p><span style={{display:'inline-block',marginRight:'10px'}}><i class='bx bx-check'></i></span>Implementation</p>
                               </div>
                            </Card.Body>
                           </Card>
                        </Col>
                    </Row>
                </Container>
        </div>
      
      </section>
    </>
  )
}

export default HowiWork