import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import SideNav from '../SideNav/SideNav';
import { FaUserAlt } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


const Header = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user?.displayName}
    </Tooltip>
  );

  const { user, googleLogin, logOut } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handelGoogleLogin =() =>{
        googleLogin(googleProvider)
        .then(result =>{
          console.log(user);
        })
        .catch(error => console.error(error))
  }

  const handelLogOut = () =>{
      logOut()
      .then(() => {})
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
              </Nav>

              <Nav>
                <Nav.Link>
                  {user?.uid ? (
                    <>
                      <Button
                        onClick={handelLogOut}
                        variant="warning"
                        size="sm"
                      >
                        Logout
                      </Button>{" "}
                      <span>{user?.displayName}</span>
                    </>
                  ) : (
                    <>
                      <Button variant="warning">
                        <Link bg="" to="/login">
                          Login
                        </Link>
                      </Button>{" "}
                      <Button variant="warning">
                        <Link to="/register">Register</Link>
                      </Button>{" "}
                    </>
                  )}
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  {user?.photoURL ? (
                    <OverlayTrigger
                      placement="left"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <Image
                        style={{ width: "30px" }}
                        roundedCircle
                        src={user.photoURL}
                      ></Image>
                    </OverlayTrigger>
                  ) : (
                    <FaUserAlt></FaUserAlt>
                  )}
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