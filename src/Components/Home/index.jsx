import { useEffect } from 'react';
import style from './style.module.css'
import Logo from '../../Imgs/Lima Logo.png'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Home (){

    useEffect(() => {
        const text = ["Desenvolvedor Front-End", "UX/UI Designer", "React Js", "CSS3", "HTML5", "JavaScript", "MySQL", "Php"];
    
        let index = 0;
        let isDeleting = false;
        let textIndex = 0;
        let speed = 100;
    
        const typeRight = () => {
          const typeright = document.getElementById("typingRight");
          if (!typeright) return; // Garante que o elemento existe antes de modificar
    
          const currentText = text[textIndex];
    
          if (!isDeleting && index <= currentText.length) {
            typeright.textContent = currentText.substring(0, index);
            index++;
            speed = 100;
          } else if (isDeleting && index >= 0) {
            typeright.textContent = currentText.substring(0, index);
            index--;
            speed = 90;
          }
    
          if (index > currentText.length) {
            isDeleting = true;
          }
    
          if (index === 0 && isDeleting) {
            isDeleting = false;
            textIndex = (textIndex + 1) % text.length; // Alterna entre os textos
          }
    
          setTimeout(typeRight, speed);
        };
    
        typeRight(); 
    
      }, []);

    return(
      <section className={style.Home}>
          <div className={style.typing} id="typingRight"><span></span></div>
        <div className={style.info} id='home'>
            <h1>Olá! Me chamo <span>Kauã Lima</span></h1>
            <p> Sou um desenvolvedor criativo e dedicado, com foco na construção de interfaces web incríveis. Apaixonado por tecnologia e por transformar ideias em soluções, estou sempre em busca de novos desafios que me impulsionem a evoluir. Acredito no poder do trabalho em equipe e estou comprometido em alcançar resultados sólidos com e para minha equipe. Eu, Kauã Lima, estou disposto a dar o meu melhor para o crescimento coletivo e o sucesso de todos. </p>
                <div className={style.btns}>
                <a className={style.buttonProj} href="/Currículo Front-end.pdf" target="_blank" rel="noopener noreferrer">Ver CV</a>

<div className={style.boxSocial}>
  <a href="https://github.com/KauaLima678" target="_blank" rel="noopener noreferrer" className={`${style.socialBtn} ${style.delay1}`}> 
    <FaGithub /> 
  </a>

  <a href="https://www.linkedin.com/in/kauãlima" target="_blank" rel="noopener noreferrer" className={`${style.socialBtn} ${style.delay2}`}> 
    <FaLinkedin /> 
  </a>

  <a href="https://wa.link/7o63dk" target="_blank" rel="noopener noreferrer" className={`${style.socialBtn} ${style.delay3}`}> 
    <FaWhatsapp /> 
  </a>

  <a href="https://www.instagram.com/http_kauazinblx/" target="_blank" rel="noopener noreferrer" className={`${style.socialBtn} ${style.delay4}`}> 
    <FaInstagram /> 
  </a>
</div>
                </div>
        </div>
        <img src={Logo} alt="" className={style.logo} />
    </section>
    );

}