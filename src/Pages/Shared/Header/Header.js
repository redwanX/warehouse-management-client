import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
   <Navbar className='py-3 fw-bold shadow' sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand as = {Link} to='/' className="primary-text">FURNITURE HOUSE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ms-auto'>
      <Nav.Link  as={Link}  to='/'>Home</Nav.Link>
      <Nav.Link  as={Link} to='/about'>About</Nav.Link>
      <Nav.Link  as={Link} to='/blogs'>Blogs</Nav.Link>
      <Nav.Link  as={Link} to='/blogs'>Login</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header