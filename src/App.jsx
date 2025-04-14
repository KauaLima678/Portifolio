import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projetos from "./Components/Projetos";
import Services from "./Components/Serviços";
import Sobre from "./Components/Sobre";
import Contato from "./Components/Contato";
import { useEffect } from "react";
import Contact from "./Components/Form";
import Footer from "./Components/Footer";

function App() {

  useEffect(() => {

    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    })

  },)

  return (
    

    <>
      <Header />
      <Home />
      <Projetos />
      <Services />
      <Sobre />
      <Contact />
      <Footer />

      <div className="cursor"></div>
    </>
  );
}

export default App;
