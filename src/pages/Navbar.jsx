import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarapp() {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: '#ffe6f0' }}>
        <Container fluid>
          <Navbar.Brand href="/">
            <span style={{ fontWeight: 'bold', color: '#d63384' }}>MyBrand</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ color: '#d63384' }}>
                Home
              </Nav.Link>
              <Nav.Link href="#designs" style={{ color: '#d63384' }}>
                Designs
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
              
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarapp;
