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
import item from '../assets/img/icon/item.svg'
import teacher1 from '../assets/img/collage/teacher-1.jpg';
import teacher10 from '../assets/img/collage/teacher-10.JPG';
import teacher11 from '../assets/img/collage/teacher-11.jpg';
import teacher2 from '../assets/img/collage/teacher-2.jpg';
import teacher3 from '../assets/img/collage/teacher-3.jpg';
import teacher4 from '../assets/img/collage/teacher-4.jpg';
import teacher5 from '../assets/img/collage/teacher-5.jpg';
import teacher6 from '../assets/img/collage/teacher-6.jpg';
import teacher7 from '../assets/img/collage/teacher-7.jpg';
import teacher8 from '../assets/img/collage/teacher-8.JPG';
import teacher9 from '../assets/img/collage/teacher-9.jpg';


export const Curriculum = () => {

  const imagesTeacher = [
    { id: 1, src: teacher1, alt: 'Imagen 1' },
    { id: 2, src: teacher2, alt: 'Imagen 2' },
    { id: 3, src: teacher3, alt: 'Imagen 3' },
    { id: 4, src: teacher4, alt: 'Imagen 4' },
    { id: 5, src: teacher5, alt: 'Imagen 5' },
    { id: 6, src: teacher6, alt: 'Imagen 6' },
    { id: 7, src: teacher7, alt: 'Imagen 7' },
    { id: 8, src: teacher8, alt: 'Imagen 8' },
    { id: 9, src: teacher9, alt: 'Imagen 9' },
    { id: 10, src: teacher10, alt: 'Imagen 10' },
    { id: 11, src: teacher11, alt: 'Imagen 11' },
    { id: 12, src: teacher1, alt: 'Imagen 1' },
    { id: 13, src: teacher2, alt: 'Imagen 2' },
    { id: 14, src: teacher3, alt: 'Imagen 3' },
    { id: 15, src: teacher4, alt: 'Imagen 4' },
    { id: 16, src: teacher5, alt: 'Imagen 5' },
    { id: 17, src: teacher6, alt: 'Imagen 6' },
    { id: 18, src: teacher7, alt: 'Imagen 7' },
    { id: 19, src: teacher8, alt: 'Imagen 8' },
    { id: 20, src: teacher9, alt: 'Imagen 9' },
    { id: 21, src: teacher10, alt: 'Imagen 10' },
    { id: 22, src: teacher11, alt: 'Imagen 11' },
  ]
  return (
    <div className="page-curriculum">
        <section className="experience">
        <span className="three-points"></span>
          <h1>Experiencia</h1>
          <div className="line"></div>
          <div className="itemExperience">
            <h5>Marzo 2022 - Actualidad</h5>
            <h5>UNICEN - Tandil, Buenos Aires, Argentina</h5>
            <h4>Estudiante Avanzada en Programación</h4>
            <ul>
              <li><img src={item} alt="item" className="item-icon" />Estudiante de la carrera Técnicatura Universitaria en Desarrollo de Aplicaciones.</li>
              <li><img src={item} alt="item" className="item-icon" />Lenguajes de programación: Java, JavaScript, PHP </li>
              <li><img src={item} alt="item" className="item-icon" />Frontend: HTML, CSS, JavaScript, React</li>
              <li><img src={item} alt="item" className="item-icon" />Backend y Frameworks: PHP, Spring Boot</li>
              <li><img src={item} alt="item" className="item-icon" />Base de datos: MySQL, PostgreSQL</li>
              <li><img src={item} alt="item" className="item-icon" />Testing: JUnit, TestNG</li>
            </ul>
          </div>
          <div className="itemExperience">
            <h5>Septiembre 2012 - Actualidad</h5>
            <h5>Escuelas Secundarias - Tandil, Buenos Aires, Argentina</h5>
            <h4>Profesora de Matemática</h4>
            <ul>
              <li><img src={item} alt="item" className="item-icon" />Me desempeño como profesora de matemática en escuelas secundarias de gestión pública en el nivel secundario</li>
              <li><img src={item} alt="item" className="item-icon" />También he realizado suplencias de Introducción a la Física y a la Química en niel secundario y de Matemática en nivel adulto y terciario</li>
            </ul>
            <Collage images={imagesTeacher}/>
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
