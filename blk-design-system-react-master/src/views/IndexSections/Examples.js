/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section section-examples" data-background-color="black">
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <div className="space-50" />
      <Container className="text-center">
      <h2 className="title">Featured Bands</h2>
        <Row>
          <Col sm="6">
            <Link to="band1-page">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/roopage.PNG")}
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="band1-page"
              tag={Link}
            >
              Kangaroo Court
            </Button>
          </Col>
          <Col sm="6">
            <Link to="band2-page">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/4x4page.PNG")}
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="band2-page"
              tag={Link}
            >
              4x4 Animal Style
            </Button>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col sm="6">
            <Link to="band3-page">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/strokespage.PNG")}
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="band3-page"
              tag={Link}
            >
              The Strokes
            </Button>
          </Col>
          <Col sm="6">
            <Link to="band4-page">
              <img
                alt="..."
                className="img-raised"
                src={require("assets/img/horsepage.PNG")}
              />
            </Link>
            <Button
              className="btn-simple btn-round"
              color="primary"
              to="band4-page"
              tag={Link}
            >
              Horsegirl
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
