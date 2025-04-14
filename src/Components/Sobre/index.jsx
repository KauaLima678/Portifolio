import style from './style.module.css';
import Eu from '../../Imgs/eu.jpg';
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

export default function Sobre() {


      useEffect(() => {
        ScrollReveal().reveal('.revealRight', {
          duration: 1000,
          distance: '500px',
          origin: 'right',
          easing: 'ease-in-out',
          reset: false, 
          interval: 200, 
        });
      }, []);

    return(
        <section className={style.sobreMim} id='sobre'>

        <h2 className={style.title}>Sobre mim</h2>

        <div className={style.sobre}>
            <img src={Eu} alt="Eu" className={style.imgSobre}/>

            <div className={`${style.contSobre} revealRight`}>
                <h2>Desenvolvedor com paixão por criar soluções Digitais</h2>
                <p>Sou um Desenvolvedor Web iniciante, em constante evolução, apaixonado por criar interfaces intuitivas e visualmente atraentes. Busco transformar ideias em soluções digitais eficientes, unindo design e funcionalidade para proporcionar a melhor experiência ao usuário.</p>
                <p>Minha abordagem une estética e usabilidade, criando interfaces visualmente confortáveis e intuitivas. Busco sempre alinhar design e funcionalidade para desenvolver soluções digitais que sejam atraentes, eficientes e acessíveis.</p>

                <div className={`${style.habilidades} revealRight`}>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span translate='no'>React Js</span>
                    <span>JavaScipt</span>
                    <span>MySQL</span>
                    <span translate='no'>PhP</span>
                </div>
            </div>
            
        </div>

    </section>
    );

}