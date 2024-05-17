import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";

export default function Login() {
  const [key, setKey] = useState("login");
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Container
        className=" align-items-center shadow-lg p-3 mb-5 bg-white rounded p-5 "
        style={{ maxWidth: 400 }}
      >
        <Row>
          <Col>
            <h4 className="text-center mb-3">Sistema Dashboard</h4>
            <Tabs
              id="tabs-login"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="w-100"
              justify
              fluid
            >
              <Tab
                eventKey="login"
                title="Login"
                className="border border-top-0 p-2"
              >
                <p className="text-center">Entre com sua conta</p>
                <FormLogin />
              </Tab>
              <Tab
                eventKey="register"
                title="Registro"
                className="border border-top-0 p-2"
              >
                <p className="text-center">Vamos fazer seu registro?</p>
                <FormRegister />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
