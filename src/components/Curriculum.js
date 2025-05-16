import React from 'react'
import angularIcon from '../assets/img/icon/angular.svg'
import cssIcon from '../assets/img/icon/css.svg'
import dockerIcon from '../assets/img/icon/docker.svg'
import htmlIcon from '../assets/img/icon/html.svg'
import javaIcon from '../assets/img/icon/java.svg'
import javascriptIcon from '../assets/img/icon/javascript.svg'
import mysqlIcon from '../assets/img/icon/mysql.svg'
import phpIcon from '../assets/img/icon/php.svg'
import postgresqlIcon from '../assets/img/icon/postgreSQL.svg'
import reactIcon from '../assets/img/icon/react.svg'
import springBootIcon from '../assets/img/icon/springBoot.svg'
import testIcon from '../assets/img/icon/test.svg'
import {Collage} from './Collage.js'

export const Curriculum = () => {
  return (
    <div className="page-curriculum">
        <section className="experience">
        <span className="three-points"></span>
          <h1>Experiencia</h1>
          <div className="line"></div>
          <div className="itemExperience">
            <h4>Marzo 2022 - Actualidad</h4>
            <h4>UNICEN - Tandil, Buenos Aires, Argentina</h4>
            <h2>Estudiante Avanzada en Programación</h2>
            <p>Estudiante de la carrera Técnicatura Universitaria en Desarrollo de Aplicaciones
              Informáticas. Tengo conocimientos en JAVA, HTML, CSS, Javascript, PHP, MySQL,
              PostgreSQL, Spring Boot, JUnit, TestNg, React, entre otros. Me apasiona el Frontend.</p>
          </div>
          <div className="itemExperience">
            <h4>Septiembre 2012 - Actualidad</h4>
            <h4>Escuelas Secundarias - Tandil, Buenos Aires, Argentina</h4>
            <h2>Profesora de Matemática</h2>
            <p>Me desempeño como profesora de matemática en escuelas secundarias de
              gestión pública, en diferentes niveles, desde secundaria, adultos y terciario.
              También he realizado suplencias de Introducción a la Física y a la Química.
            </p>
            <Collage />
          </div>
        </section>

        <section>
        <span className="three-points"></span>
          <h3>Resumen Profesional</h3>
          <div className="line"></div>
          <p>
            Soy estudiante de desarrollo de aplicaciones informáticas con experiencia en Java,
            Spring Boot y bases de datos SQL. Tengo todas las materias aprobadas y solo me quedan
            2 finales y las prácticas. Busco aplicar mis conocimientos en un entorno profesional
            donde pueda seguir creciendo y aportando soluciones innovadoras. Soy una persona muy comprometida con todo lo que hago.
            Me gusta aprender y estoy abierta a nuevas oportunidades. Por mi experiencia en la
            docencia, soy buena comunicándome.
            Me caracterizo por ponerme al hombro el equipo con el que debo trabajar, marcando
            objetivos, organizando, consensuando ideas y estando abierta al aprendizaje constante.
            Te invito a conocer mi pasantía: github.com/FelicitasAguerralde                        
          </p>
        </section>

        <section>
        <span className="three-points"></span>
          <h3>Habilidades Blandas</h3>
          <div className="line"></div>
          <div className="skills">
            <div>
              <h4>Pensamiento lógico</h4>
              <h4>Aprendizaje continuo</h4>
            </div>
            <div>
              <h4>Communicación</h4>
              <h4>Adaptabilidad</h4>
            </div>
            <div>
              <h4>Liderazgo</h4>
              <h4>Creatividad</h4>
            </div>
          </div>
        </section>

        <section className="hard-skills">
        <span className="three-points"></span>
          <h3>Habilidades duras</h3>
          <div className="line"></div>
          <div className="background-1 theme-shade"></div>
          <div className="background-2 theme-shade"></div>
          <div className="skills-container">
            <div className="skill">
              <h4>HTML</h4>
              <img src={htmlIcon} alt="HTML" />
            </div>
            <div>
              <h4 className="heading">CSS</h4>
              <img src={cssIcon} alt="CSS" />
            </div>
            <div className="skill">
              <h4>JavaScript</h4>
              <img src={javascriptIcon} alt="JavaScript" />
            </div>
            <div className="skill">
              <h4>Java</h4>
              <img src={javaIcon} alt="Java" />
            </div>
            <div className="skill">
              <h4>PHP</h4>
              <img src={phpIcon} alt="PHP" />
            </div>
            <div className="skill">
              <h4>Angular</h4>
              <img src={angularIcon} alt="Angular" />
            </div>
            <div className="skill">
              <h4>React</h4>
              <img src={reactIcon} alt="React" />
            </div>
          </div>
          <div className="skills-container">
            <div className="skill">
              <h4>MySQL</h4>
              <img src={mysqlIcon} alt="MySQL" />
            </div>
            <div className="skill">
              <h4>PostgreSQL</h4>
              <img src={postgresqlIcon} alt="PostgreSQL" />
            </div>
            <div className="skill">
              <h4>Docker</h4>
              <img src={dockerIcon} alt="Docker" />
            </div>
            <div className="skill">
              <h4>Spring Boot</h4>
              <img src={springBootIcon} alt="Spring Boot" />
            </div>
            <div className="skill">
              <h4>JUnit</h4>
              <img src={testIcon} alt="JUnit" />
            </div>
            <div className="skill">
              <h4>TestNG</h4>
              <img src={testIcon} alt="TestNG" />
            </div>
          </div>
        </section>
      </div>
  )
}
