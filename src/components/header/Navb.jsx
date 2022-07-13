import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/image/logo.png'
import NavDropdown from 'react-bootstrap/NavDropdown';
import  '../header/Nav.css'
import {Link} from 'react-router-dom'



const Navb = () => {
  
  return (
    <>




    <Navbar sticky="top"className='navbar-primary'   expand="lg">
      <Container fluid className="justify-content-center">
      <Navbar.Brand className='navBrand' variant="light"> 
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <Link  to='/'>Abdus Samad</Link>
           
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="ml-5" id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link className='navlink nav-link'> <Link to='/'>Home</Link> </Nav.Link>
            <Nav.Link className='navlink nav-link' > <Link to='/Service'>SERVICES</Link></Nav.Link>
            <Nav.Link className='navlink nav-link' ><Link to='/cources'>COURCES</Link></Nav.Link>
            <Nav.Link className='navlink nav-link'><Link to='/portfolio'>PORTFOLIO</Link></Nav.Link>
            <Nav.Link className='navlink nav-link' ><Link to='/contact'>CONTACT</Link></Nav.Link>
            <Nav.Link className='navlink nav-link' ><Link to='/about'>ABOUT</Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    





    </>
  )
}

export default Navb
