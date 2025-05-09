import React from 'react'

export const Curriculum = () => {
  return (
    <div className="page">
      <div className="informationColumRight">
        <section className="experience">
          <h2 className="theme-title">Experiencia</h2>
          <div className="line"></div>
          <div className="itemExperience">
            <h3 className="theme-title">Marzo 2022 - Actualidad</h3>
            <h4 className="theme-title">UNICEN - Tandil, Buenos Aires, Argentina</h4>
            <h2 className="theme-title">Estudiante Avanzada en Programación</h2>
            <p className="theme-title">Estudiante de la carrera Técnicatura Universitaria en Desarrollo de Aplicaciones
              Informáticas. Tengo conocimientos en JAVA, HTML, CSS, Javascript, PHP, MySQL,
              PostgreSQL, Spring Boot, JUnit, TestNg, React, entre otros. Me apasiona el Frontend.</p>
          </div>
          <div className="itemExperience">
            <h3 className="theme-title">Septiembre 2012 - Actualidad</h3>
            <h4 className="theme-title">Escuelas Secundarias - Tandil, Buenos Aires, Argentina</h4>
            <h2 className="theme-title">Profesora de Matemática</h2>
            <p className="theme-title">Me desempeño como profesora de matemática en escuelas secundarias de
              gestión pública, en diferentes niveles, desde secundaria, adultos y terciario.
              También he realizado suplencias de Introducción a la Física y a la Química.
            </p>
          </div>
        </section>

        <section>
          <h2 className="theme-title">Resumen Profesional</h2>
          <div className="line"></div>
          <p className="profesional-sumary theme-title">
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
          <h2 className="theme-title">Habilidades Blandas</h2>
          <div className="line"></div>
          <div className="skills">
            <div>
              <h3 className="theme-title">Pensamiento lógico</h3>
              <h3 className="theme-title">Aprendizaje continuo</h3>
            </div>
            <div>
              <h3 className="theme-title">Communicación</h3>
              <h3 className="theme-title">Adaptabilidad</h3>
            </div>
            <div>
              <h3 className="theme-title">Liderazgo</h3>
              <h3 className="theme-title">Creatividad</h3>
            </div>
          </div>
        </section>

        <section className="hard-skills">
          <h2 className="theme-title">Habilidades duras</h2>
          <div className="line"></div>
          <div className="background-1 theme-shade"></div>
          <div className="background-2 theme-shade"></div>
          <div className="skills-container">
            <div className="skill">
              <h3 className="theme-title">HTML</h3>
              <img src="img/icons/html.svg" alt="HTML" />
            </div>
            <div className="skill">
              <h3 className="theme-title">CSS</h3>
              <img src="img/icons/css.svg" alt="CSS" />
            </div>
            <div className="skill">
              <h3 className="theme-title">JavaScript</h3>
              <img src="img/icons/javascript.svg" alt="JavaScript" />
            </div>
            <div className="skill">
              <h3 className="theme-title">Java</h3>
              <img src="img/icons/java.svg" alt="Java" />
            </div>
            <div className="skill">
              <h3 className="theme-title">PHP</h3>
              <img src="img/icons/php.svg" alt="PHP" />
            </div>
            <div className="skill">
              <h3 className="theme-title">Angular</h3>
              <img src="img/icons/angular.svg" alt="Angular" />
            </div>
            <div className="skill">
              <h3 className="theme-title">React</h3>
              <img src="img/icons/react.svg" alt="React" />
            </div>
          </div>
          <div className="skills-container">
            <div className="skill">
              <h3 className="theme-title">MySQL</h3>
              <img src="img/icons/mysql.svg" alt="MySQL" />
            </div>
            <div className="skill">
              <h3 className="theme-title">PostgreSQL</h3>
              <img src="img/icons/postgreSQL.svg" alt="PostgreSQL" />
            </div>
            <div className="skill">
              <h3 className="theme-title">Docker</h3>
              <img src="img/icons/docker.svg" alt="Docker" />
            </div>
            <div className="skill">
              <h3 className="theme-title">Spring Boot</h3>
              <img src="img/icons/springBoot.svg" alt="Spring Boot" />
            </div>
            <div className="skill">
              <h3 className="theme-title">JUnit</h3>
              <img src="img/icons/test.svg" alt="JUnit" />
            </div>
            <div className="skill">
              <h3 className="theme-title">TestNG</h3>
              <img src="img/icons/test.svg" alt="TestNG" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
