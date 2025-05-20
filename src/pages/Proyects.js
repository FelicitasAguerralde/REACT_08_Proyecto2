import React, { useEffect, useState } from "react";
import angularIcon from "../assets/img/icon/angular.svg";
import apiRestIcon from "../assets/img/icon/apiRest.svg";
import bootstrapIcon from "../assets/img/icon/bootstrap.svg";
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
import swaggerIcon from "../assets/img/icon/swagger.svg";
import hibernateIcon from "../assets/img/icon/hibernate.svg";
import testIcon from "../assets/img/icon/test.svg";
import postmanIcon from "../assets/img/icon/postman.svg";
import ButtonLink from "../components/ui/Button";

export const Proyects = () => {
  const [works, setWorks] = useState([]);
  const [worksBackend, setWorksBackend] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const technologyIcons = {
    HTML5: htmlIcon,
    CSS3: cssIcon,
    JavaScript: javascriptIcon,
    Java: javaIcon,
    PHP: phpIcon,
    Angular: angularIcon,
    React: reactIcon,
    MySQL: mysqlIcon,
    PostgreSQL: postgresqlIcon,
    Docker: dockerIcon,
    "Spring Boot": springBootIcon,
    JUnit: testIcon,
    TestNG: testIcon,
    ApiRest: apiRestIcon,
    Bootstrap: bootstrapIcon,
    Swagger: swaggerIcon,
    Hibernate: hibernateIcon,
    Postman: postmanIcon,
  };

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/works");
        if (!response.ok) {
          throw new Error("Error al obtener los trabajos");
        }
        const data = await response.json();
        setWorks(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  useEffect(() => {
    const fetchWorksBackend = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/worksBackend");
        if (!response.ok) {
          throw new Error("Error al obtener los trabajos");
        }
        const data = await response.json();
        setWorksBackend(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWorksBackend();
  }, []);

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevenir loop infinito
    e.target.src = "/placeholder.jpg"; // Imagen por defecto
    console.error("Error al cargar la imagen:", e.target.src);
  };

  if (loading) {
    return <div className="page">Cargando trabajos...</div>;
  }

  if (error) {
    return <div className="page">Error: {error}</div>;
  }

  return (
    <div className="page">
      <span className="three-points"></span>
      <h3>Mis Proyectos</h3>
      <h4>Desarrollo web:</h4>
      <section className="proyects-container">
        {works.map((work) => (
          <article key={work.id} className="proyect-item">
            <h4>{work.title}</h4>
            <div className="image-container">
              <img
                src={`http://localhost:5000${work.image}`}
                alt={work.title}
                onError={handleImageError}
                loading="lazy"
              />
            </div>
            <p className="proyect-item-description">{work.description}</p>
            <div className="proyect-item-description-container">
              <div className="proyect-item-tecnologies">
                {work.tecnologies.map((tech, index) => (
                  <img
                    key={index}
                    src={technologyIcons[tech]}
                    alt={tech}
                    title={tech}
                    className="tech-icon"
                  />
                ))}
              </div>
              <p className="proyect-item-category">{work.category}</p>
              {work.url && (
                <ButtonLink
                  to={work.url}
                  className="button"
                  external={true}
                >
                  Ver proyecto
                </ButtonLink>
              )}
            </div>
          </article>
        ))}
      </section>
      <h4>Desarrollo backend:</h4>
      <section className="proyects-container">
        {worksBackend.map((workBackend) => (
          <article key={workBackend.id} className="proyect-item">
            <h4>{workBackend.title}</h4>
            <div className="image-container">
              <img
                src={`http://localhost:5000${workBackend.image}`}
                alt={workBackend.title}
                onError={handleImageError}
                loading="lazy"
              />
            </div>
            <p className="proyect-item-description">{workBackend.description}</p>
            <div className="proyect-item-description-container">
              <div className="proyect-item-tecnologies">
                {workBackend.tecnologies.map((tech, index) => (
                  <img
                    key={index}
                    src={technologyIcons[tech]}
                    alt={tech}
                    title={tech}
                    className="tech-icon"
                  />
                ))}
              </div>
              <p className="proyect-item-category">{workBackend.category}</p>
              {workBackend.url && (
                <ButtonLink
                  to={workBackend.url}
                  className="button"
                  external={true}
                >
                  Ver proyecto
                </ButtonLink>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
