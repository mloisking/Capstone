import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Bootstrap() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      <br />
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Container>
      <Row><Col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quia libero voluptate cupiditate eos magni sequi perspiciatis commodi doloribus rem, consequatur corrupti sit blanditiis iste laboriosam tempora necessitatibus iure. Enim.</p>
        </Col>
        <Col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nulla molestiae doloremque voluptatibus possimus eius vel deserunt praesentium libero. Odio molestiae similique vel reprehenderit, sed quis sequi corrupti consequatur error!</p>
        </Col>
        <Col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nulla molestiae doloremque voluptatibus possimus eius vel deserunt praesentium libero. Odio molestiae similique vel reprehenderit, sed quis sequi corrupti consequatur error!</p>
        </Col>
        <Col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, nulla molestiae doloremque voluptatibus possimus eius vel deserunt praesentium libero. Odio molestiae similique vel reprehenderit, sed quis sequi corrupti consequatur error!</p>
        </Col>
      </Row>
      <Row>
        <Col lg={9}>1 of 2</Col>
        <Col lg={3}>2 of 2</Col>
      </Row>
      <Row>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
    </>
  )
}