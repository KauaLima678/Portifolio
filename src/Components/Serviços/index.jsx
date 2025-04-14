import style from "./style.module.css";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

export default function Services() {

  useEffect(() => {
    ScrollReveal().reveal('.revealServices', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      easing: 'ease-in-out',
      interval: 200,
      reset: false
    });
  }, []);

  const servicos = [
    {
      id: 1,
      title: "Desenvolvimento Web",
      description:
        "Desenvolvimento de interfaces modernas, dinâmicas e responsivas utilizando HTML5, CSS3, JavaScript, React.js e React DOM. Estruturação em componentes reutilizáveis, com foco em performance, organização e navegação fluida através de roteamento eficiente.",
    },
    {
      id: 2,
      title: "UX/UI Design com Figma e Canva",
      description:
        "Criação de interfaces intuitivas, acessíveis e visualmente atraentes com foco na experiência do usuário. Desenvolvimento de protótipos navegáveis em Figma, com atenção aos detalhes de usabilidade, hierarquia visual, cores e tipografia. Apoio com Canva para elementos gráficos complementares e identidades visuais consistentes.",
    },
    {
      id: 3,
      title: "Banco de Dados com MySQL & MongoDB",
      description:
        "Criação, consumo e gerenciamento de bancos de dados relacionais com MySQL e não-relacionais com MongoDB. Estruturação de dados de forma eficiente, utilizando SQL para modelos tradicionais e documentos JSON para estruturas mais flexíveis. Integração com o front-end para exibição dinâmica de informações com segurança, organização e performance.",
    }, {
        id: 4,
        title: "Manutenção e Atualização de Código",
        description: "Aprimoramento contínuo de projetos existentes com foco em refatoração de código, correção de bugs e melhorias na performance e estrutura. Garantia de que o código esteja limpo, atualizado com as boas práticas e fácil de escalar ou manter em equipe."
    }
  ];

  return (
    <>
    <section className={style.services} id="servicos">
      <h2 className={style.title}>Meus Serviços</h2>
      <div className={style.gridServices}>
        {servicos.map ((servico, id) => (
            <div key={id} className={`${style.service} revealServices`}>
                <h2>{servico.title} </h2>
                <p>{servico.description}</p>
            </div>
        ))}
      </div>
    </section>
    </>
    
  );
}
