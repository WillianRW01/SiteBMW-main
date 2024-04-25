import '../App.css';
import Sobre from "../components/Sobre";
import imagem from "../img/R (1) 1.jpg";

export default function Inicial() {
  return (
    <div >
       
      <Sobre
        title="Quem somos"
        text="uma marca que é sinônimo de luxo, desempenho e inovação. Fundada em 1916, a BMW tem uma longa história de criação de veículos que definem o padrão em termos de design, tecnologia e desempenho.

        Nossa missão é criar máquinas de condução definitivas que proporcionam uma experiência de condução inigualável. Com uma gama diversificada de produtos, desde sedans de luxo e SUVs até supercarros de alto desempenho, a BMW tem algo para todos os entusiastas do automobilismo. "
        img= {imagem}
        
     />
    </div>
  );
}
