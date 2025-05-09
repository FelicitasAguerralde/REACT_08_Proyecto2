import React from "react";
import { Link } from "react-router-dom";
export const Index = () => {
  return (
    <div className="index">
      <h1>
        ¡Hola! Soy Felicitas Aguerralde, una{" "}
        <strong>desarrolladora de software </strong>
        apasionada por crear soluciones digitales innovadoras.
      </h1>
      <h2>
        Con un enfoque en el desarrollo web moderno y una mente analítica, me
        especializo en construir aplicaciones intuitivas y eficientes que
        resuelven problemas reales. Mi objetivo es combinar la creatividad con
        la tecnología para desarrollar experiencias digitales que marquen la
        diferencia. Siempre en constante aprendizaje, me mantengo actualizada
        con las últimas tendencias y mejores prácticas en el desarrollo de
        software. Te ayudo acrear tu sitio o aplicación web, tener más
        visibilidad y relevancia en internet.
        <Link to="/contact"> Contactame!!!</Link>
      </h2>
      <section className="last-works">
        <h2 className="heading">Mis últimos proyectos</h2>
        <p>
          Estos son algunos de los proyectos de desarrollo web que he realizado
          en los últimos meses.
        </p>
      </section>
    </div>
  );
};
