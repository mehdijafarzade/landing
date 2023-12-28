import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function BasicExample() {
  return (
    <div className='divm'>
    <Navbar expand="md" className="bg-lite">
      <Container>
        <Navbar.Brand className='mnavbar' href="#home">بلاگ آموزش آشپزی</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">خانه</Nav.Link>
            <Nav.Link href="#link">مقالات</Nav.Link>
            <NavDropdown className='nnavbar' title="بیشتر" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">خانه</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                مقالات
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">آموزش سریع</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                درباره ما
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;