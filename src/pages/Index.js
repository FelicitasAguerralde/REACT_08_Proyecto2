import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/img/profile.jpg";
import work1 from "../assets/img/work1.png";
import work2 from "../assets/img/work2.png";
import work3 from "../assets/img/work3.png";
import work4 from "../assets/img/work4.png";
import arrow from "../assets/img/icon/arrow.svg";
import { Header } from "../components/layout/Header";

export const Index = () => {
  return (
    <>
      <Header />
      <div className="index">
        <section className="about-me">
          <aside className="column-left">
            <span className="three-points"></span>
            <h3>Sobre Mi</h3>
            <p>
              ¡Hola! Soy Felicitas Aguerralde, una{" "}
              <strong>desarrolladora de software </strong>
              apasionada por crear soluciones digitales innovadoras. Te invito a
              conocerme.
            </p>
          </aside>
          <aside className="column-right">
            <img src={profile} alt="Felicitas Aguerralde" />
            <h2>Introducción</h2>
            <p>
              Con un enfoque en el desarrollo web moderno y una mente analítica,
              me especializo en construir aplicaciones intuitivas y eficientes
              que resuelven problemas reales. Mi objetivo es combinar la
              creatividad con la tecnología para desarrollar experiencias
              digitales que marquen la diferencia. Siempre en constante
              aprendizaje, me mantengo actualizada con las últimas tendencias y
              mejores prácticas en el desarrollo de software. Te ayudo acrear tu
              sitio o aplicación web, tener más visibilidad y relevancia en
              internet.
            </p>
            <div className="arrow-right">
              <Link to="/aboutme">
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </aside>
        </section>
        <section className="my-works">
          <span className="three-points"></span>
          <h3>Mis Proyectos</h3>
          <p>
            Te invito a conocer mis proyectos. Algunos de ellos fueron
            realizados para trabajos prácticos de la carrera y otros son
            proyectos de cursos en los que me he capacitado para el uso de
            nuevas tecnologías. En cada proyecto podrás ver una breve
            descripción y las tecnologías utilizadas, además podrás acceder a la
            página de cada proyecto.
          </p>
          <div className="my-works-container">
            <img src={work1} alt="work1" />
            <img src={work2} alt="work2" />
            <img src={work3} alt="work3" />
            <img src={work4} alt="work4" />
          </div>
          <div className="arrow-right">
            <Link to="/proyects">
              <img src={arrow} alt="arrow" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
