import React from 'react';
import githubIcon from '../../assets/img/icon/github.svg';
import mailIcon from '../../assets/img/icon/mail.svg';
import linkedinIcon from '../../assets/img/icon/linkedin.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer>
        Portfolio de Felicitas Aguerralde &copy; 2025
        <div className='contact-icons-container'>
        <h5 className='contact-icon'>GitHub <img src={githubIcon} alt="GitHub" /><Link href="https://github.com/FelicitasAguerralde" target="_blank" rel="noopener noreferrer"></Link></h5>
        <h5 className='contact-icon'>E-mail <img src={mailIcon} alt="email" /><Link href="mailto:felicitas.aguerrald@gmail.com" target="_blank" rel="noopener noreferrer"></Link></h5>
        <h5 className='contact-icon'>LinkedIn <img src={linkedinIcon} alt="linkedin" /><Link href="https://www.linkedin.com/in/felicitasaguerralde/" target="_blank" rel="noopener noreferrer"></Link></h5>
      </div>
    </footer>
  )
}
