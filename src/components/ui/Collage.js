import React from 'react';

export const Collage = ({ images, isStudent = false }) => {
  return (
    <section className={`collage-section ${isStudent ? 'collage-student' : ''}`}>
      <div className="collage-carousel-container">
        <div className="collage-row row1">
          {images.map((image) => (
            <div key={`row1-${image.id}`} className="collage-item">
              <img 
                src={image.src} 
                alt={image.alt}
                className="collage-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};