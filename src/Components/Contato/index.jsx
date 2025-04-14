import { MdEmail } from "react-icons/md";
import style from "./style.module.css";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Contato() {

  return (
    <section className={style.contato}>
      <h2 className={style.title}>Contato</h2>

      <div className={style.botoesContato} id="contato">

        <a href="https://w.app/lima_dev"  target="_blank" rel="noopener noreferrer" className={style.whats}>
        <FaWhatsapp color="#fff" size={24}/>
        <span translate="no">WhatsApp</span>
        </a>
        <a href="mailto:kauablima26@gmail.com"  target="_blank" rel="noopener noreferrer" className={style.email}>
        <MdEmail color="#fff" size={24}/>
        <span translate="no">Email</span>
        </a>
        <a href="https://github.com/KauaLima678"  target="_blank" rel="noopener noreferrer" className={style.github}>
        <FaGithub color="#fff" size={24}/>
        <span translate="no">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/kauãlima"  target="_blank" rel="noopener noreferrer" className={style.linkedin}>
        <FaLinkedin color="#fff" size={24}/>
        <span translate="no">Linkedin</span>
        </a>
        <a href="https://www.instagram.com/http_kauazinblx/"  target="_blank" rel="noopener noreferrer" className={style.insta}>
        <FaInstagram color="#fff" size={24}/>
        <span translate="no">Instagram</span>
        </a>
            
      </div>
    </section>
  );
}
