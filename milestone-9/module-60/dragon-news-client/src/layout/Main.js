import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  return (
        <div>
            <Header></Header>
        <container>
            <Row>
            <Col lg='2'>
                <LeftSideNav></LeftSideNav>
            </Col>
            <Col lg='7'>
                <Outlet></Outlet>
            </Col>
            <Col lg='3'>
                <RightSideNav></RightSideNav>
            </Col>
            </Row>
        </container>
        <Footer></Footer> 
        </div>
  );
};

export default Main;
