import { Container } from "react-bootstrap";
import '../App.css';
import Carros from "../components/TimelineCarros";
import imagemprin from "../img/3-1-1024x576.jpg";
import imagemprin3 from "../img/BMW IX.jpg";
import imagemprin2 from "../img/BMW-X7-2024.jpg";

export default function TimelineCarros() {

  return (
    
    <Container style={{ height: "100%", paddingTop: 100  }}>
      
      <Carros
      title="BMW X6 M 2024"
      text="O X6 M Sport 2024 conta com sistema híbrido leve. O conjunto é composto por um motor 3.0 a gasolina e por um pequeno propulsor elétrico. O motor a combustão gera 369 cv de potência e 53 kgfm de torque, enquanto o elétrico auxilia com 12 cv e 20,4 kgfm."    
      price="R$ 340.000"
     img={imagemprin}
/>

    <div style={{ marginTop: '0px' }} />
    <Carros
    title="BMW X7 2024"
    text="O X7 2024 mede 5181 mm de comprimento, 2000 mm de largura, 1835 mm de altura e 3105 mm de entre-eixos, com porta-malas de 750 litros ou 326 com a terceira fileira de assentos em uso."    
    price="290.500"
    img={imagemprin2}
/>

    <div style={{ marginTop: '0px' }} />
    <Carros
    title="BMW iX"
    text="Com 619 cv de potência, tração integral e pacote completo de equipamentos e tecnologia."    
    price="560.000"
    img={imagemprin3}
/>
   
    </Container>
  );
}