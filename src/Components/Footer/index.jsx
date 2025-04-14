import style from './style.module.css'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer(){

    return(

        <footer>
            <div className={style.boxSocial}>
                <a href="https://github.com/KauaLima678" target="_blank" className={style.socialBtn}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/kauãlima" target="_blank" className={style.socialBtn}> <FaLinkedin /> </a>
                <a href="https://wa.link/7o63dk" target="_blank" className={style.socialBtn}> <FaWhatsapp /> </a>
                <a href="https://www.instagram.com/http_kauazinblx/" target="_blank" className={style.socialBtn}> <FaInstagram /> </a>
            </div>
          
            <div className={style.boxCopyright}>
            <p>&copy; 2025 Kauã Lima | Portifólio Online - Todos os direitos reservados.</p>
            </div>
        </footer>

    );
}
