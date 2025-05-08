import React from 'react'

export const Header = () => {
  return (
    <header>
    <h1> Felicitas Aguerralde</h1>
    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        {console.log('Header component loaded')}
    </nav>
    </header>
  )
}
