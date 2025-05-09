import React from 'react'

export const Contact = () => {
  return (
    <div className="page">
      <h1>Contacto</h1>
      <form className='contact' action="mailto:felicitas.aguerralde@gmail.com" method="post" enctype="text/plain">
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Apelldo' />
        <input type='email' placeholder='Email' />
        <textarea placeholder='Mensaje'></textarea>
        <button type='submit' value="enviar">Enviar</button>
      </form>
    </div>
  )
}
