import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Navi() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TheAutomobilezone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            

            <Nav.Link href="#pricing"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
            
            <form class="d-flex" >
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-danger" type="submit">Search</button>

                </form>
                <div class="mx-2">
                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#loginModal">Log In</button>
                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#signupModal">Sign Up</button>
                </div>
          </Nav>
        </Container>
      </Navbar>
     </>
  );
}

export default Navi;