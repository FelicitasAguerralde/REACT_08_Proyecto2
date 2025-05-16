import React from 'react';
import teacher1 from '../assets/img/collage/teacher-1.jpg';
import teacher2 from '../assets/img/collage/teacher-2.jpg';
import teacher3 from '../assets/img/collage/teacher-3.jpg';
import teacher4 from '../assets/img/collage/teacher-4.jpg';
import teacher5 from '../assets/img/collage/teacher-5.jpg';
import teacher6 from '../assets/img/collage/teacher-6.jpg';
import teacher7 from '../assets/img/collage/teacher-7.jpg';
import teacher8 from '../assets/img/collage/teacher-8.JPG';
import teacher9 from '../assets/img/collage/teacher-9.jpg';
import teacher10 from '../assets/img/collage/teacher-10.JPG';
import teacher11 from '../assets/img/collage/teacher-11.jpg';

const images = [
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
];

export const Collage = () => {
  return (
    <section className="collage-section">
      <div className="collage-carousel-container">
        <div className="collage-row row1">
          {images.map(image => (
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