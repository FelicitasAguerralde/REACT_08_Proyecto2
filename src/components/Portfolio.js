import React, { useEffect, useState } from 'react';

export const Portfolio = () => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/works');
        if (!response.ok) {
          throw new Error('Error al obtener los trabajos');
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

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevenir loop infinito
    e.target.src = '/placeholder.jpg'; // Imagen por defecto
    console.error('Error al cargar la imagen:', e.target.src);
  };

  if (loading) {
    return <div className="page">Cargando trabajos...</div>;
  }

  if (error) {
    return <div className="page">Error: {error}</div>;
  }

  return (
    <div className="page">
      <h2 className="heading">Portfolio</h2>
      <section className="works-container">
        {works.map((work) => (
          <article key={work.id} className='work-item'>
            <h2>{work.title}</h2>
            <div className="image-container">
              <img 
                src={work.image} 
                alt={work.title} 
                onError={handleImageError}
                loading="lazy"
              />
            </div>
            <p>{work.description}</p>
            <p>{work.tecnologies.join(', ')}</p>
            <p>{work.category}</p>
            <div className='work-item-a'>
            <a href={work.url} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
