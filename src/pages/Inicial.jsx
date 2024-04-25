import { Card } from "react-bootstrap";
import "../App.css";
import CardCustomizado from "../components/CardCustomizado";

import imagemprin from "../img/serie-3-3840x2160.png";
export default function Inicial() {
  return (
    <Card style={{ height: "100%", paddingTop: 100}}>
      <CardCustomizado
  title="Bem-vindo à nova era da BMW!"
  text="Estamos animados em apresentar a BMW , uma empresa dedicada a impulsionar a inovação e moldar o futuro da mobilidade. Aqui, investimos em startups visionárias que estão transformando o setor automotivo e além, com tecnologias que elevam a experiência de dirigir e exploram novas fronteiras da mobilidade elétrica, inteligência artificial e veículos autônomos. Junte-se a nós nesta jornada emocionante rumo à mobilidade do amanhã!"
  img={imagemprin}
  title2 = "BMW X3"
  text2 = "O BMW X3 oferece oportunidades ilimitadas e uma expressão marcante de presença e liberdade. Logo à primeira vista, o veículo impressiona, com a sua aparência esportiva, conquistando com uma emocionante experiência ao dirigir. Graças à sua capacidade de direção parcialmente autônoma e ao sistema inteligente de tração nas quatro rodas BMW xDrive, o veículo oferece máximo conforto ao dirigir, tanto dentro como fora das pistas."

/>
    </Card>
    
  );
}
