import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends React.Component {
  render(){
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Search</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#features">Soon ...</Nav.Link>
              <Nav.Link href="#pricing">Soon...</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </>
    );
  }
 
}

export default NavBar;