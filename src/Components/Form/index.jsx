import { useRef, useState } from 'react';
import style from './style.module.css'
import emailjs from '@emailjs/browser';


export default function Contact(){

    const [statusMessage, setStatusMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('service_em7yqhh', 'template_u13sf0p', form.current, 'g_H8VzXu9X0PWLl-s')
          .then((result) => {
            setStatusMessage('Mensagem enviada com sucesso!');
            form.current.reset();
          }, (error) => {
            setStatusMessage('Ocorreu um erro. Tente novamente.');
          });
      };

    return(
        <section className={style.contact}>
            <h1 className={style.titleContact} id='Contato'>Fale comigo</h1>
            
            <form ref={form}  onSubmit={sendEmail}>
                <div className={style.groupInputs}>
                    <div className={style.boxInput}>
                        <input type="text" name='name' placeholder='Nome Completo' required />
                        <input type="email" name='email' placeholder='E-mail' required />
                        <input type="text" name='phone' placeholder='Numero de Telefone' />
                        <input type="text" name='title' placeholder='Assunto' />
                    </div>

                    <div className={style.groupInput2}>
                        <textarea name="message" id="" cols={30} rows={10} placeholder='Mensagem' required ></textarea>
                        <button type='submit' className={style.btn}>Enviar Mensagem</button>

                        {statusMessage && <p className={style.statusMessage}>{statusMessage}</p>}
                        <input type="hidden" name="time" value={new Date().toLocaleString()} />
                    </div>
                </div>
            </form>

        </section>
    );
}