import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Sharde/Header/Header';
import SideNav from '../Pages/Sharde/SideNav/SideNav';

const Main = () => {
    return (
      <div>
        <Header></Header>
        <Container>
          <Row>
            <Col lg="3" className="d-none d-lg-block">
              
              <SideNav></SideNav>
            </Col>
            <Col lg="9">
              <Outlet></Outlet>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Main;