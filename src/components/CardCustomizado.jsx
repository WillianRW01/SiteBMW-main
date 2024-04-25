import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import ScrollReveal from "scrollreveal";
import "../App.css";
import CarrosselInicial from "./CarrosselInicial.jsx";
export default function CardCustomizado(props) {
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
    <Card>
  <Card>
    {props?.img && (
        <>
            <Card.Img
                variant="top"
                src={props.img}
                style={{ position: "relative", overflow:'hidden' }}
            />
            <Row id="home" >
                <Col lg={12} sm={12} style={{backgroundColor:'transparent', color:'white', overflow:'hidden', paddingTop: 100}}>
                  <Row>
                  <br style={{color:'white'}}></br>
                  </Row>
                  <Row style={{fontSize:'20px', justifyContent: 'center', textAlign: 'center'}}>
                      <div style={{display: "flex", fontSize:'20px', textAlign: 'center', flexDirection: 'row', alignItems: 'center'}}>
                          <div style={{marginRight: '10px'}}>Puro</div>
                          <div style={{fontSize:'35px', fontFamily:'fantasy', fontWeight: 'bold', marginRight: '10px'}}>Prazer</div>
                          <div>de Dirigir</div>
                      </div>
                  </Row>



                  <Row style={{fontSize:'20px'}}>
                      BMW 320i GP e 320i Sport GP.
                  </Row>
                  <Row>
                  <Button variant="outline-light">Saiba mais</Button>{' '}
                  </Row>
                
                </Col>
            </Row>
        </>
    )}
</Card>

    <Container>
        <Col lg={12} sm={12}>
          <Card
            style={{
              background: " #FFFFFF",
              marginTop: "10vh",
              overflow: "hidden",
              border: 'none'
            }}
          >
          <Card.Body
          style={{ height: "auto", textAlign: "center", border: "black", overflow:'hidden' }}
        >
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text className="card-text">{props.text}</Card.Text>
            
          <Container fluid>
          <Container>
            <CarrosselInicial></CarrosselInicial>
          </Container>
        </Container>
        </Card.Body>
          
          </Card>
        </Col>
        <Row>
          <Col lg={12} sm={12}>
          <Card
              style={{ height: "70vh", textAlign: "center", border: "black", overflow:'hidden' }}
            >
              <Card.Title className="card-title">{props.title2}</Card.Title>
              <Card.Text className="card-text">{props.text2}</Card.Text>
            </Card>
          </Col>
        </Row>
</Container>
</Card>
  );
}

