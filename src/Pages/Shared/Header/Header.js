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
   <Navbar className='py-3 fw-bold secondery-bg' sticky='top'  collapseOnSelect expand="lg">
  <Container>
  <Navbar.Brand as = {Link} to='/' className="primary-text">FURNITURE HOUSE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='ms-auto'>
      <Nav.Link  as={Link}  to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/blogs' >Blogs</Nav.Link>
      {
        user?
        <>
        
        <Nav.Link as={Link} to='/manageInventory' >Manage Items</Nav.Link>
        <Nav.Link as={Link} to='/myItems' >My Items</Nav.Link>
        <Nav.Link as={Link} to='/addItem' >Add Item</Nav.Link>
        <Nav.Link onClick={logOut} >Logout</Nav.Link>
        </>
        :
        <Nav.Link  as={Link} to='/login'>Login</Nav.Link>
        
      }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header