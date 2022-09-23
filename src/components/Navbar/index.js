import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = (props) => {

  const { pages = [], setCurrentPage } = props;

  return (
    <div>
      <NavDropdown title="Menu" id="nav-dropdown">
        <NavDropdown.Item href="#about" onClick={ () => setCurrentPage(pages[0]) }>About Me</NavDropdown.Item>
        <NavDropdown.Item href="#portfolio" onClick={ () => setCurrentPage(pages[1]) }>My Portfolio</NavDropdown.Item>
        <NavDropdown.Item href="#contact" onClick={ () => setCurrentPage(pages[2]) }>Contact Me</NavDropdown.Item>
        <NavDropdown.Item href="#resume" onClick={ () => setCurrentPage(pages[3]) }>My Resume</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default Navbar;
