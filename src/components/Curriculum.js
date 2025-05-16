import React from "react";
import student1 from "../assets/img/collage/student-1.jpg";
import student2 from "../assets/img/collage/student-2.jpg";
import student3 from "../assets/img/collage/student-3.jpg";
import student4 from "../assets/img/collage/student-4.jpg";
import student5 from "../assets/img/collage/student-5.jpg";
import teacher1 from "../assets/img/collage/teacher-1.jpg";
import teacher10 from "../assets/img/collage/teacher-10.JPG";
import teacher11 from "../assets/img/collage/teacher-11.jpg";
import teacher2 from "../assets/img/collage/teacher-2.jpg";
import teacher3 from "../assets/img/collage/teacher-3.jpg";
import teacher4 from "../assets/img/collage/teacher-4.jpg";
import teacher5 from "../assets/img/collage/teacher-5.jpg";
import teacher6 from "../assets/img/collage/teacher-6.jpg";
import teacher7 from "../assets/img/collage/teacher-7.jpg";
import teacher8 from "../assets/img/collage/teacher-8.JPG";
import teacher9 from "../assets/img/collage/teacher-9.jpg";
import angularIcon from "../assets/img/icon/angular.svg";
import cssIcon from "../assets/img/icon/css.svg";
import dockerIcon from "../assets/img/icon/docker.svg";
import htmlIcon from "../assets/img/icon/html.svg";
import javaIcon from "../assets/img/icon/java.svg";
import javascriptIcon from "../assets/img/icon/javascript.svg";
import mysqlIcon from "../assets/img/icon/mysql.svg";
import phpIcon from "../assets/img/icon/php.svg";
import postgresqlIcon from "../assets/img/icon/postgreSQL.svg";
import reactIcon from "../assets/img/icon/react.svg";
import springBootIcon from "../assets/img/icon/springBoot.svg";
import testIcon from "../assets/img/icon/test.svg";
import { Collage } from "./Collage.js";
import { Link } from "react-router-dom";
import backgroundExperience from "../assets/img/background-experience.jpg";

export const Curriculum = () => {
  const imagesTeacher = [
    { id: 1, src: teacher1, alt: "Imagen 1" },
    { id: 2, src: teacher2, alt: "Imagen 2" },
    { id: 3, src: teacher3, alt: "Imagen 3" },
    { id: 4, src: teacher4, alt: "Imagen 4" },
    { id: 5, src: teacher5, alt: "Imagen 5" },
    { id: 6, src: teacher6, alt: "Imagen 6" },
    { id: 7, src: teacher7, alt: "Imagen 7" },
    { id: 8, src: teacher8, alt: "Imagen 8" },
    { id: 9, src: teacher9, alt: "Imagen 9" },
    { id: 10, src: teacher10, alt: "Imagen 10" },
    { id: 11, src: teacher11, alt: "Imagen 11" },
    { id: 12, src: teacher1, alt: "Imagen 1" },
    { id: 13, src: teacher2, alt: "Imagen 2" },
    { id: 14, src: teacher3, alt: "Imagen 3" },
    { id: 15, src: teacher4, alt: "Imagen 4" },
    { id: 16, src: teacher5, alt: "Imagen 5" },
    { id: 17, src: teacher6, alt: "Imagen 6" },
    { id: 18, src: teacher7, alt: "Imagen 7" },
    { id: 19, src: teacher8, alt: "Imagen 8" },
    { id: 20, src: teacher9, alt: "Imagen 9" },
    { id: 21, src: teacher10, alt: "Imagen 10" },
    { id: 22, src: teacher11, alt: "Imagen 11" },
  ];

  const imagesStudent = [
    { id: 1, src: student1, alt: "Imagen 1" },
    { id: 2, src: student2, alt: "Imagen 2" },
    { id: 3, src: student3, alt: "Imagen 3" },
    { id: 4, src: student4, alt: "Imagen 4" },
    { id: 5, src: student5, alt: "Imagen 5" },
    { id: 6, src: student1, alt: "Imagen 1" },
    { id: 7, src: student2, alt: "Imagen 2" },
    { id: 8, src: student3, alt: "Imagen 3" },
    { id: 9, src: student4, alt: "Imagen 4" },
    { id: 10, src: student5, alt: "Imagen 5" },
  ];

  return (
    <div className="page-curriculum">
      <section className="experience">
        <span className="three-points"></span>
        <img
          src={backgroundExperience}
          alt="backgroundExperience"
          className="background-experience"
        />
        <h1>Experiencia</h1>
        <div className="line"></div>
        <div className="item-experience">
          <h5>Marzo 2022 - Actualidad</h5>
          <h4>Estudiante Avanzada en Programación</h4>
          <h5>UNICEN - Tandil, Buenos Aires, Argentina</h5>
          <div className="description description-student">
            <Collage images={imagesStudent} isStudent={true} />
            <ul>
              <li>
                Estudiante de la carrera Técnicatura Universitaria en{" "}
                <strong>Desarrollo de Aplicaciones Informáticas</strong>
              </li>
              <li>
                Lenguajes de programación:
                <strong> Java, JavaScript, PHP</strong>
              </li>
              <li>
                Frontend: <strong>HTML, CSS, JavaScript, React</strong>
              </li>
              <li>
                Backend y Frameworks:<strong> PHP, Spring Boot</strong>
              </li>
              <li>
                Base de datos:<strong> MySQL, PostgreSQL</strong>
              </li>
              <li>
                Testing:<strong> JUnit, TestNG</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="item-experience">
          <h5>Septiembre 2012 - Actualidad</h5>
          <h4>Profesora de Matemática</h4>
          <h5>Escuelas Secundarias - Tandil, Buenos Aires, Argentina</h5>
          <div className="description">
            <ul>
              <li>
                Me desempeño como <strong>profesora de matemática </strong> en
                escuelas secundarias de gestión pública en el nivel secundario
              </li>
              <li>
                También he realizado suplencias de Introducción a la Física y a
                la Química en nivel secundario, y de Matemática en nivel adulto
                y terciario
              </li>
            </ul>
            <Collage images={imagesTeacher} />
          </div>
        </div>
      </section>

      <section className="summary">
        <span className="three-points"></span>
        <h1>RESUMEN PROFESIONAL</h1>
        <h4>Desarrolladora Full-Stack en Formación</h4>
        <p>
          Estudiante avanzada de Desarrollo de Aplicaciones | Java, Spring Boot,
          SQL
        </p>
        <div>
          <section>
            <h3>Experiencia Técnica</h3>
            <ul>
              <li>Desarrollo de aplicaciones con Java, Spring Boot</li>
              <li>Bases de datos relacionales (MySQL, PostgreSQL)</li>
              <li>Frontend con React, HTML/CSS, JavaScript</li>
            </ul>
          </section>

          <section>
            <h3>Objetivo Profesional</h3>
            <p>
              Integrar un equipo profesional donde pueda contribuir con mis
              habilidades técnicas y aprender de proyectos desafiantes.
            </p>
          </section>

          <section>
            <h3>Fortalezas</h3>
            <ul>
              <li>Compromiso y pasión por la programación</li>
              <li>Habilidades de comunicación y trabajo en equipo</li>
              <li>Enfoque en soluciones eficientes y escalables</li>
            </ul>
          </section>
        </div>

        <Link to="https://github.com/relicitasAguerralde" target="_blank">
          <h4>Ver Mi Curriculum en GitHub</h4>
        </Link>
      </section>

      <section className="soft-skills">
        <span className="three-points"></span>
        <h3>Habilidades Blandas</h3>
        <div className="skills">
          <div>
            <h5>Pensamiento lógico</h5>
            <h5>Aprendizaje continuo</h5>
          </div>
          <div>
            <h5>Communicación</h5>
            <h5>Adaptabilidad</h5>
          </div>
          <div>
            <h5>Liderazgo</h5>
            <h5>Creatividad</h5>
          </div>
        </div>
      </section>

      <section className="hard-skills">
        <span className="three-points"></span>
        <h3>Habilidades duras</h3>
        <div className="hard-skills-container">
          <div className="skill">
            <h5>HTML <img src={htmlIcon} alt="HTML" /></h5>
          </div>
          <div>
            <h5>CSS <img src={cssIcon} alt="CSS" /></h5>
          </div>
          <div className="skill">
            <h5>JavaScript <img src={javascriptIcon} alt="JavaScript" /></h5>
          </div>
          <div className="skill">
            <h5>Java <img src={javaIcon} alt="Java" /></h5> 
          </div>
          <div className="skill">
            <h5>PHP <img src={phpIcon} alt="PHP" /></h5> 
          </div>
          <div className="skill">
            <h5>Angular <img src={angularIcon} alt="Angular" /></h5>
          </div>
          <div className="skill">
            <h5>React <img src={reactIcon} alt="React" /></h5>
          </div>
          <div className="skill">
            <h5>MySQL <img src={mysqlIcon} alt="MySQL" /></h5> 
          </div>
          <div className="skill">
            <h5>PostgreSQL <img src={postgresqlIcon} alt="PostgreSQL" /></h5>
          </div>
          <div className="skill">
            <h5>Docker <img src={dockerIcon} alt="Docker" /></h5>
          </div>
          <div className="skill">
            <h5>Spring Boot <img src={springBootIcon} alt="Spring Boot" /></h5>
          </div>
          <div className="skill">
            <h5>JUnit <img src={testIcon} alt="JUnit" /></h5>
          </div>
          <div className="skill">
            <h5>TestNG <img src={testIcon} alt="TestNG" /></h5>
          </div>
        </div>
      </section>
    </div>
  );
};
