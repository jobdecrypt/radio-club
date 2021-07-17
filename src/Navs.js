import React from "react";
import { HashRouter as Router, Switch, NavLink, Route } from "react-router-dom";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logos from "./logo.svg";

import Members from "./Members";
import Qso from "./Qso";
import Radiofy from "./Radiofy";
import App from "./App";

function Navs() {
  return (
    <>
      <Router>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">
              <img
                alt=""
                src={logos}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              I-ARC
            </Navbar.Brand>
            <Navbar.Toggle expand="lg" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/members/">
                  Members
                </Nav.Link>
                <Nav.Link as={NavLink} to="/qso/">
                  QSO
                </Nav.Link>
                <Nav.Link as={NavLink} to="/radiofy/">
                  Learn
                </Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title="Links" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    href="https://www.facebook.com/groups/1397300856954046"
                    target="_blank"
                  >
                    Facebook
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://www.qrz.com/" target="_blank">
                    QRZ
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="https://www.para.org.ph/"
                    target="_blank"
                  >
                    PARA
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/qso">
            <Qso />
          </Route>
          <Route path="/radiofy">
            <Radiofy />
          </Route>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Navs;
