import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const Albums = () => {
  // Dados fictícios ou estado para álbuns podem ser colocados aqui

  return (
    <Container>
      <Row className="g-4">
        {/* Mapeie seus dados de álbuns e renderize os cartões */}
        <Col>
          <Card>
            <Card.Img variant="top" src="url-da-imagem-placeholder" />
            <Card.Body>
              <Card.Title>Título do Álbum</Card.Title>
              <Card.Text>Esta é uma breve descrição do álbum.</Card.Text>
              <Button variant="primary">Ouvir</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Albums;
