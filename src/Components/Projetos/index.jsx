import style from "./style.module.css";
import Hamburgueria from "../../Imgs/Hamburgueria.png";
import Jojo from "../../Imgs/Jojo.png";
import Spotify from "../../Imgs/Spotify.png";
import Nike from "../../Imgs/Nike.png";
import Landing from "../../Imgs/Ramen.js.png"
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

export default function Projetos() {

  useEffect(() => {
    ScrollReveal().reveal('.revealProjects', {
      duration: 2000,
      distance: '50px',
      origin: 'bottom',
      easing: 'ease',
      interval: 300,
      reset: false,
    });
  }, []);




  const projetos = [
    {
      id: 1,
      nome: "Sr. Burguer",
      descricao:
        "Projeto de fim de ano feito em PHP com funcionalidades de login, cadastro, atualizar pedidos e muito mais. Não responsiva.",
      imagem: Hamburgueria,
      link: "https://github.com/KauaLima678/Sr.-Burguer-Hamburgueria",
    },
    {
      id: 2,
      nome: "Jojo Page",
      descricao:
        "Minha primeira interface desenvolvida em React JS, colocando em prática meus conhecimentos adquiridos. Não responsiva.",
      imagem: Jojo,
      link: "https://projeto-jojo-react-mgd3ds9az-kaua-limas-projects-bac59c0b.vercel.app/",
    },
    {
      id: 3,
      nome: "Interface Spotify",
      descricao:
        "Interface desenvolvida em React JS para pôr em prática meus conhecimentos sobre componentização. Esta não é uma página funcional. Está interface não é responsiva.",
      imagem: Spotify,
      link: "https://projeto-react-spotify.vercel.app",
    },
    {
      id: 4,
      nome: "Page Nike",
      descricao:
        "Projeto desenvolvido em HTML, CSS e JS, colocando em prática meus conhecimentos sobre JavaScript e interfaces confortáveis. Este projeto não é responsivo.",
      imagem: Nike,
      link: "https://kaualima678.github.io/Nike/",
    }, {
      id: 4,
      nome: "Ramen.Js",
      descricao: "Landing Page desenvolvidda com HTML, CSS e jQuery a fim de praticar responsividade e efeitos visuais. Não funcional.",
      imagem: Landing,
      link: "https://kaualima678.github.io/Ramen.Js/"
    }
  ];

  return (
    <section className={style.projetos} id="projetos">
      <h2 className={style.title}>Projetos</h2>

      <div className={style.gradeProjetos}>
      {projetos.map((projeto, id) => (
    <div className={`${style.cardProjeto} revealProjects`} key={id}>
      <img src={projeto.imagem} alt={`Imagem do projeto ${projeto.nome}`} className={style.imgProjeto}/>
      <div className={style.infoProjeto}>
        <h3>{projeto.nome}</h3>
        <p>{projeto.descricao}</p>
        <a href={projeto.link} target="_blank" rel="noopener noreferrer">
          Ver projeto <span>→</span>
        </a>
      </div>
    </div>
  ))}
      </div>
    </section>
  );
}
