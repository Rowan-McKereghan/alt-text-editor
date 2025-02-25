import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function NavbarDiv() {
    return (
    <Navbar className="bg-info-subtle border border-info-subtle py-0 mb-2">
        <Navbar.Brand className='py-0'>
            <img
            src="https://www.gutenberg.org/gutenberg/pg-logo-129x80.png"
            className="d-inline-block align-top"
            alt="PG LOGO"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <NavDropdown title="About">
                    <NavDropdown.Item>
                        Links Here
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Search & Browse">
                    <NavDropdown.Item>
                        Links Here
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Help">
                    <NavDropdown.Item>
                        Links Here
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

