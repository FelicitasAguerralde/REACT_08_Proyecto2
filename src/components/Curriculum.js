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

export const Curriculum = () => {
  return (
    <div className="page">
        <section className="experience">
          <h2 className="heading">Experiencia</h2>
          <div className="line"></div>
          <div className="itemExperience">
            <h3 className="heading">Marzo 2022 - Actualidad</h3>
            <h4 className="heading">UNICEN - Tandil, Buenos Aires, Argentina</h4>
            <h2 className="heading">Estudiante Avanzada en Programación</h2>
            <p className="heading">Estudiante de la carrera Técnicatura Universitaria en Desarrollo de Aplicaciones
              Informáticas. Tengo conocimientos en JAVA, HTML, CSS, Javascript, PHP, MySQL,
              PostgreSQL, Spring Boot, JUnit, TestNg, React, entre otros. Me apasiona el Frontend.</p>
          </div>
          <div className="itemExperience">
            <h3 className="heading">Septiembre 2012 - Actualidad</h3>
            <h4 className="heading">Escuelas Secundarias - Tandil, Buenos Aires, Argentina</h4>
            <h2 className="heading">Profesora de Matemática</h2>
            <p className="heading">Me desempeño como profesora de matemática en escuelas secundarias de
              gestión pública, en diferentes niveles, desde secundaria, adultos y terciario.
              También he realizado suplencias de Introducción a la Física y a la Química.
            </p>
          </div>
        </section>

        <section>
          <h2 className="heading">Resumen Profesional</h2>
          <div className="line"></div>
          <p className="profesional-sumary heading">
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
          <h2 className="heading">Habilidades Blandas</h2>
          <div className="line"></div>
          <div className="skills">
            <div>
              <h3 className="heading">Pensamiento lógico</h3>
              <h3 className="heading">Aprendizaje continuo</h3>
            </div>
            <div>
              <h3 className="heading">Communicación</h3>
              <h3 className="heading">Adaptabilidad</h3>
            </div>
            <div>
              <h3 className="heading">Liderazgo</h3>
              <h3 className="heading">Creatividad</h3>
            </div>
          </div>
        </section>

        <section className="hard-skills">
          <h2 className="heading">Habilidades duras</h2>
          <div className="line"></div>
          <div className="background-1 theme-shade"></div>
          <div className="background-2 theme-shade"></div>
          <div className="skills-container">
            <div className="skill">
              <h3 className="heading">HTML</h3>
              <img src={htmlIcon} alt="HTML" />
            </div>
            <div className="skill">
              <h3 className="heading">CSS</h3>
              <img src={cssIcon} alt="CSS" />
            </div>
            <div className="skill">
              <h3 className="heading">JavaScript</h3>
              <img src={javascriptIcon} alt="JavaScript" />
            </div>
            <div className="skill">
              <h3 className="heading">Java</h3>
              <img src={javaIcon} alt="Java" />
            </div>
            <div className="skill">
              <h3 className="heading">PHP</h3>
              <img src={phpIcon} alt="PHP" />
            </div>
            <div className="skill">
              <h3 className="heading">Angular</h3>
              <img src={angularIcon} alt="Angular" />
            </div>
            <div className="skill">
              <h3 className="heading">React</h3>
              <img src={reactIcon} alt="React" />
            </div>
          </div>
          <div className="skills-container">
            <div className="skill">
              <h3 className="heading">MySQL</h3>
              <img src={mysqlIcon} alt="MySQL" />
            </div>
            <div className="skill">
              <h3 className="heading">PostgreSQL</h3>
              <img src={postgresqlIcon} alt="PostgreSQL" />
            </div>
            <div className="skill">
              <h3 className="heading">Docker</h3>
              <img src={dockerIcon} alt="Docker" />
            </div>
            <div className="skill">
              <h3 className="heading">Spring Boot</h3>
              <img src={springBootIcon} alt="Spring Boot" />
            </div>
            <div className="skill">
              <h3 className="heading">JUnit</h3>
              <img src={testIcon} alt="JUnit" />
            </div>
            <div className="skill">
              <h3 className="heading">TestNG</h3>
              <img src={testIcon} alt="TestNG" />
            </div>
          </div>
        </section>
      </div>
  )
}
