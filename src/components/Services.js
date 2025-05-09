import React from "react";

export const Services = () => {
  return (
    <div className="page">
      <h1>Servicios</h1>
      <section className="services">
        <article className="service">
          <h2>Diseño web</h2>
          <p>
            Diseño de sitios web atractivos y funcionales para tu negocio.
          </p>
        </article>
        <article className="service">
          <h2>Desarrollo web</h2>
          <p>
            Creación de aplicaciones web modernas acorde a tus requerimientos.
          </p>
        </article>
        <article className="service">
          <h2>Posicionamiento web</h2>
          <p>
            Mejoramos la visibilidad de tu sitio web en los motores de búsqueda
            para que más personas puedan encontrarlo.
          </p>
        </article>
      </section>
    </div>
  );
};
