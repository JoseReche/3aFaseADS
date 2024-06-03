import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col lg={4} sm={12}>
          <div>
            <h4>Sobre a empresa</h4>
            <p>Av Visconde de Taunay 666666</p>
          </div>
        </Col>
        <Col lg={8} sm={12}>
          <div>
            <h4>Redes sociais</h4>
            <p>
              <a href="//facebook.com" target="_blank">
                Facebook
              </a>
            </p>
            <p>Instagram</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
