import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = (props) => {

  const { pages = [], setCurrentPage } = props;

  return (
    <div>
      <NavDropdown title="Menu" id="nav-dropdown">
        <NavDropdown.Item onClick={ () => setCurrentPage(pages[0]) }>About Me</NavDropdown.Item>
        <NavDropdown.Item onClick={ () => setCurrentPage(pages[1]) }>My Portfolio</NavDropdown.Item>
        <NavDropdown.Item onClick={ () => setCurrentPage(pages[2]) }>My Skills</NavDropdown.Item>
        <NavDropdown.Item onClick={ () => setCurrentPage(pages[3]) }>Contact Me</NavDropdown.Item>
        <NavDropdown.Item onClick={ () => setCurrentPage(pages[4]) }>My Resume</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default Navbar;
