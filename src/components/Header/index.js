import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <section id="header">
      <Nav variant="pills">
        <div>
          <Nav.Item>
            <Nav.Link href="/">
              <h1>Moshe Gadol</h1>
            </Nav.Link>
          </Nav.Item>
        </div>
        <div>
          <NavDropdown title="Menu" id="nav-dropdown">
            <NavDropdown.Item href="#about">About Me</NavDropdown.Item>
            <NavDropdown.Item href="#portfolio">My Portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#contact">Contact Me</NavDropdown.Item>
            <NavDropdown.Item href="#resume">My Resume</NavDropdown.Item>
          </NavDropdown>
        </div>
      </Nav>
    </section>
  );
};

export default Header;
