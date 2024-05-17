import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="shadow-lg"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={require("../assets/images/lojapenhores.png")}
              alt="logo"
              style={{ width: "100px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Quem Somos</Nav.Link>
              <Nav.Link>Produtos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
