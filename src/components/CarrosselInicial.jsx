import { useState } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import imagemprin2 from "../img/cq5dam.resized.img.1680.large.time1712674989919.jpg";
import imagemprin3 from "../img/cq5dam.resized.img.585.low.time1621446964557.jpg";
import imagemprin4 from "../img/cq5dam.resized.img.585.low.time1711549631617.png";
function CarrosselInicial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item
        style={{
          backgroundImage: `url(${imagemprin2})`,
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          
          <p>Corra e aproveite.</p>
          <Button variant="outline-light">Saiba mais</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          backgroundImage: `url(${imagemprin4})`,
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          
          <p>Corra e aproveite.</p>
          <Button variant="outline-light">Saiba mais</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        style={{
          backgroundImage: `url(${imagemprin3})`,
        }}
        className={"car-item"}
      >
        <Carousel.Caption>
          
          <p>Corra e aproveite.</p>
          <Button variant="outline-light">Saiba mais</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrosselInicial;
