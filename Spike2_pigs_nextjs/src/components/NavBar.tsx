import Link from "next/link";
import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    // <div>
    //   <nav>
    //     <Link href="/">home</Link> | <Link href="/hi">hi</Link>
    //   </nav>
    // </div>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">NextJS APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link href="/searchProduct" as={Link}>
              search Product
            </Nav.Link>
            <Nav.Link href="/product" as={Link}>
              Products menu
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/clientSideRender" as={Link}>
                CSR
              </NavDropdown.Item>
              <NavDropdown.Item href="/serverSideRender" as={Link}>
                SSR
              </NavDropdown.Item>
              <NavDropdown.Item href="/staticSiteGeneration" as={Link}>
                SSG
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
