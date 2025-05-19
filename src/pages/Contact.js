import React, { useState } from 'react';
import '../index.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (status === 'error') {
      setStatus('');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('enviando');
    setErrorMessage('');

    //console.log('Enviando datos:', formData);

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      //console.log('Respuesta del servidor:', response.status);

      const data = await response.json();
      //console.log('Datos recibidos:', data);

      if (response.ok) {
        setStatus('exitoso');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      //console.error('Error completo:', error);
      setStatus('error');
      setErrorMessage('No se pudo conectar con el servidor. Por favor, verifica que el servidor esté corriendo en http://localhost:5000');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-title">
      <span className="three-points"></span>
      <h3>Contacto</h3>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Escribe tu mensaje aquí..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'enviando'}
          className={status === 'enviando' ? 'sending' : ''}
        >
          {status === 'enviando' ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {status === 'exitoso' && (
          <p className="success-message">
            ¡Mensaje enviado exitosamente! Te responderemos a la brevedad.
          </p>
        )}
        {status === 'error' && (
          <p className="error-message">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
};
