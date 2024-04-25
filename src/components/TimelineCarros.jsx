import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import ScrollReveal from "scrollreveal";
import '../App.css';

export default function Carros(props) {
    useEffect(() => {
      ScrollReveal().reveal(".card-title", {
        origin: "left",
        distance: "100px",
        scale: 0.9,
        delay: 400,
      });
      ScrollReveal().reveal(".card-text", {
        origin: "right",
        distance: "100px",
        scale: 0.9,
        delay: 400,
      });
    }, []);
  
    return (
    
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col lg={6} sm={12}>
            <Card>
              {props?.img && (
                <>
                  <Card.Img
                    variant="top"
                    src={props.img}
                    style={{ position: "relative" }}
                  />
                  <a
                    href="https://wa.me/47991518118?text=Olá!"
                    target="_blank"
                    rel="noreferrer"
                  >
                  </a>
                </>
              )}
  
              <Card.Body className="text-center"
                >
                <Card.Title className="card-title">{props.title}</Card.Title>
                <Card.Text className="card-text">{props.text}</Card.Text>
                {props.price && <Card.Text className="card-price my-3 h3 text-primary font-weight-bold">{props.price}</Card.Text>}
                <Button variant="primary">Ver Parcelas</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      
    );
  }