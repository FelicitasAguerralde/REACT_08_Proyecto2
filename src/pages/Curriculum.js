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
import { Collage } from "../components/ui/Collage";
import Skill from "../components/ui/IconPill";

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
        <h3>Experiencia</h3>
        <h5>Marzo 2022 - Actualidad</h5>
        <h4>Estudiante Avanzada en Programación</h4>
        <h5>UNICEN - Tandil, Buenos Aires, Argentina</h5>
        <p>
          Soy estudiante de la carrera{" "}
          <strong>
            Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas{" "}
          </strong>
          de la Universidad Nacional del Centro de la Provinicia de Buenos Aire
          en la ciudad de Tandil, Prov. Buenos Aires, Argentina.
        </p>
        <p>
          Actualmente tengo todas las cursadas aprobadas, adeudo dos finales y
          estoy próxima a realizar las prácticas profesionales con un proyecto
          de una página web de turismo de una ciudad vecina a Tandil.
        </p>
        <Collage images={imagesStudent} isStudent={true} />
        <h5>Septiembre 2012 - Actualidad</h5>
        <h4>Profesora de Matemática</h4>
        <h5>Escuelas Secundarias - Tandil, Buenos Aires, Argentina</h5>
        <p>
          Me desempeño como <strong>profesora de matemática</strong> desde el
          año 2012 en escuelas secundarias de gestión pública en el nivel
          secundario. También he realizado suplencias de Introducción a la
          Física y a la Química en nivel secundario, y de Matemática en nivel
          adulto y terciario.
        </p>
        <Collage images={imagesTeacher} />
      </section>

      <section className="soft-skills">
        <span className="three-points"></span>
        <h3>Habilidades Blandas</h3>
        <div className="skills">
          <div>
            <Skill name="Pensamiento lógico" isIcon={false} />
            <Skill name="Aprendizaje continuo" isIcon={false} />
          </div>
          <div>
            <Skill name="Comunicación" isIcon={false} />
            <Skill name="Adaptabilidad" isIcon={false} />
          </div>
          <div>
            <Skill name="Liderazgo" isIcon={false} />
            <Skill name="Creatividad" isIcon={false} />
          </div>
        </div>
      </section>

      <section className="hard-skills">
        <span className="three-points"></span>
        <h3>Habilidades duras</h3>
        <div className="hard-skills-container">
          <Skill name="HTML" icon={htmlIcon} />
          <Skill name="CSS" icon={cssIcon} />
          <Skill name="JavaScript" icon={javascriptIcon} />
          <Skill name="Java" icon={javaIcon} />
          <Skill name="PHP" icon={phpIcon} />
          <Skill name="Angular" icon={angularIcon} />
          <Skill name="React" icon={reactIcon} />
          <Skill name="MySQL" icon={mysqlIcon} />
          <Skill name="PostgreSQL" icon={postgresqlIcon} />
          <Skill name="Docker" icon={dockerIcon} />
          <Skill name="Spring Boot" icon={springBootIcon} />
          <Skill name="JUnit" icon={testIcon} alt="JUnit" />
          <Skill name="TestNG" icon={testIcon} alt="TestNG" />
        </div>
      </section>
      <a
        href={`${process.env.PUBLIC_URL}/downloads/CV_FelicitasAguerralde.pdf`}
        download="CV_FelicitasAguerralde.pdf"
      >
        <p>Descargar curriculum</p>
      </a>
    </div>
  );
};
