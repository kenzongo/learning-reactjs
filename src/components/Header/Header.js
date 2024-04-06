import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" className="bg-body-tertiary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={`/`} className='nav-link'>Home</NavLink>
                        <NavLink to={`users`} className='nav-link'>User</NavLink>
                        <NavLink to={`admins`} className='nav-link'>Admin</NavLink>
                        {/* <Nav.NavLink href="/">Home</Nav.NavLink>
                        <Nav.NavLink href="users">User</Nav.NavLink>
                        <Nav.NavLink href="admins">Admin</Nav.NavLink> */}
                    </Nav>
                    <Nav>
                        <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Log out</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">User Info</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;