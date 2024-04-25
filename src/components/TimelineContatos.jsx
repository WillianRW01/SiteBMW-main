import React, { useState } from "react";
import { Card, Container, Tab, Tabs } from "react-bootstrap";
import "../App.css";

function TimelineContatos() {
  const [key, setKey] = useState("contato");

  return (
    <Card
      style={{
        backgroundColor: "white",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <Card.Title
        style={{ color: "#000000", textAlign: "center", fontSize: "24px" }}
      >
        Contatos
      </Card.Title>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="contato" title="Entre em Contato">
          <Container
            style={{
              marginTop: "20px",
              padding: "20px",
              border: "1px solid #ccc",
            }}
          >
            <Card.Body>
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="nome"
                    className="form-label"
                    style={{ fontSize: "18px" }}
                  >
                    Nome
                  </label>
                  <input type="text" className="form-control" id="nome" />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                    style={{ fontSize: "18px" }}
                  >
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="telefone"
                    className="form-label"
                    style={{ fontSize: "18px" }}
                  >
                    Telefone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="telefone"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="endereco"
                    className="form-label"
                    style={{ fontSize: "18px" }}
                  >
                    Endereço
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="endereco"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="cidade"
                    className="form-label"
                    style={{ fontSize: "18px" }}
                  >
                    Cidade
                  </label>
                  <input type="text" className="form-control" id="cidade" />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="problema"
                    className="form-label"
                    style={{ fontSize: "18px" }}
                  >
                    Seu Problema
                  </label>
                  <textarea
                    className="form-control"
                    id="problema"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ fontSize: "18px" }}
                >
                  Enviar
                </button>
              </form>
            </Card.Body>
          </Container>
        </Tab>
      </Tabs>
    </Card>
  );
}

export default TimelineContatos;
