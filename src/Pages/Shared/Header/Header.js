import { signOut } from 'firebase/auth';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Header = () => {
  const [user] = useAuthState(auth);
  const logOut=()=>{
    signOut(auth);
  }

  return (
    <div>
   <Navbar className='py-3 fw-bold shadow-sm' sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand as = {Link} to='/' className="primary-text">FURNITURE HOUSE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ms-auto'>
      <Nav.Link  as={Link}  to='/'>Home</Nav.Link>
      {
        user?
        
        <Nav.Link onClick={logOut} >Sign Out</Nav.Link>
        :
        <Nav.Link  as={Link} to='/login'>Login</Nav.Link>
        
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header