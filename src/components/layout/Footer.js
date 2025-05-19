import React from 'react';
import githubIcon from '../../assets/img/icon/github.svg';
import linkedinIcon from '../../assets/img/icon/linkedin.svg';
import mailIcon from '../../assets/img/icon/mail.svg';

export const Footer = () => {
  return (
    <footer>
        Portfolio de Felicitas Aguerralde &copy; 2025
        <div className='contact-icons-container'>
        <h5 className='contact-icon'>GitHub <img src={githubIcon} alt="GitHub" /><a href="https://github.com/FelicitasAguerralde" target="_blank" rel="noopener noreferrer"></a></h5>
        <h5 className='contact-icon'>E-mail <img src={mailIcon} alt="email" /><a href="mailto:felicitas.aguerrald@gmail.com" target="_blank" rel="noopener noreferrer"></a></h5>
        <h5 className='contact-icon'>LinkedIn <img src={linkedinIcon} alt="linkedin" /><a href="https://www.linkedin.com/in/felicitasaguerralde/" target="_blank" rel="noopener noreferrer"></a></h5>
      </div>
    </footer>
  )
}
