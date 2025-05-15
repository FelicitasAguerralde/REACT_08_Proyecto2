import React from "react";
import { Link } from "react-router-dom";
import asterisk from "../assets/img/asterisk.svg";
import profile from "../assets/img/profile.jpg";

export const Index = () => {
  return (
    <div className="index">
      <section className="about-me">
        <aside className="column-left">
          <h3>Sobre Mí</h3>
          <img src={asterisk} alt="aterisco" className="asterisk"/>
          <p>
            ¡Hola! Soy Felicitas Aguerralde, una {" "}
            <strong>desarrolladora de software </strong>
            apasionada por crear soluciones digitales innovadoras.
          </p>
        </aside>
        <aside className="column-right">
          <img src={profile} alt="Felicitas Aguerralde" />
          <h2>Introducción</h2>
          <p>
            Con un enfoque en el desarrollo web moderno y una mente analítica,
            me especializo en construir aplicaciones intuitivas y eficientes que
            resuelven problemas reales. Mi objetivo es combinar la creatividad
            con la tecnología para desarrollar experiencias digitales que
            marquen la diferencia. Siempre en constante aprendizaje, me mantengo
            actualizada con las últimas tendencias y mejores prácticas en el
            desarrollo de software. Te ayudo acrear tu sitio o aplicación web,
            tener más visibilidad y relevancia en internet.
          </p>
          <div className="arrow-unicode">
            <Link to="/aboutme">→</Link>
          </div>
        </aside>
      </section>
    </div>
  );
};
