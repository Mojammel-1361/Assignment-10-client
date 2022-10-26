import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import SideNav from '../SideNav/SideNav';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, googleLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handelGoogleLogin =() =>{
        googleLogin(googleProvider)
        .then(result =>{
          console.log(user);
        })
        .catch(error => console.error(error))
  }

    return (
      <div className="mb-4">
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
          <Container>
            <Navbar.Brand>
              <Button variant="warning">
                <Link to="/">P-Language Course</Link>
              </Button>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Button onClick={handelGoogleLogin} variant="warning">
                  Google Login
                </Button>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link>{user?.displayName}</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  {user?.photoURL?
                  <Image style={{width:'30px'}} 
                  roundedCircle 
                  src={user.photoURL}
                  ></Image>
                  :
                  <FaUserAlt></FaUserAlt>
                  }
                </Nav.Link>
              </Nav>
              <div className="d-lg-none">
                <SideNav></SideNav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Header;