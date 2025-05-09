import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className="logo"><span>F</span>
      <h3> Felicitas Aguerralde Developer</h3>
      </div>
    
    <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/services">Servicios</Link></li>
            <li><Link to="/curriculum">Curriculum</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
        </ul>
        {console.log('Header component loaded')}
    </nav>
    </header>
  )
}
