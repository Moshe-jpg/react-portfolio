import React from "react";
import Nav from "react-bootstrap/Nav";

const Header = (props) => {
  return (
    <section id="header">
      <Nav variant="pills">
        <div>
          <Nav.Item>
            <Nav.Link href="https://moshe-jpg.github.io/react-portfolio/">
              <h1>Moshe Gadol</h1>
            </Nav.Link>
          </Nav.Item>
        </div>
        {props.children}
      </Nav>
    </section>
  );
};

export default Header;
