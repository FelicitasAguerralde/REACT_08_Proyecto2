require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Middleware para logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Verificar variables de entorno
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('Error: Las variables de entorno EMAIL_USER y EMAIL_PASS son requeridas');
  process.exit(1);
}

// Mostrar la configuración (sin mostrar la contraseña completa)
console.log('Configuración de correo:', {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS ? 'Configurada' : 'No configurada',
  passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0
});

// Configuración del transporter de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  pool: true, // Mantener la conexión abierta
  maxConnections: 1,
  maxMessages: 3,
  rateDelta: 1000,
  rateLimit: 3,
  debug: true,
  logger: true
});

// Verificar la conexión del transporter
transporter.verify(function(error, success) {
  if (error) {
    console.error('Error al verificar el transporter:', error);
  } else {
    console.log('Servidor de correo listo para enviar mensajes');
  }
});

// Endpoint para enviar correo
app.post('/api/send-email', async (req, res) => {
  console.log('--- INICIO /api/send-email ---');
  console.log('Recibida petición de envío de correo:', req.body);
  
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.log('Error: Campos faltantes en la petición');
    console.log('--- FIN /api/send-email (campos faltantes) ---');
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  const mailOptions = {
    from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${name}`,
    text: `\n      Nombre: ${name}\n      Email: ${email}\n      Mensaje: ${message}\n    `,
    html: `\n      <h3>Nuevo mensaje de contacto</h3>\n      <p><strong>Nombre:</strong> ${name}</p>\n      <p><strong>Email:</strong> ${email}</p>\n      <p><strong>Mensaje:</strong></p>\n      <p>${message}</p>\n    `
  };

  console.log('Opciones de correo preparadas:', mailOptions);

  try {
    console.log('Intentando enviar correo...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado exitosamente:', info);
    console.log('--- FIN /api/send-email (éxito) ---');
    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error completo al enviar el correo:', error);
    console.error('Stack trace:', error.stack);
    console.error('Detalles del error:', {
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      response: error.response
    });
    console.log('--- FIN /api/send-email (error) ---');
    res.status(500).json({ 
      error: 'Error al enviar el correo',
      details: error.message,
      code: error.code
    });
  }
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
  res.json({ message: 'El servidor está funcionando correctamente' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  console.log('Configuración CORS:', {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  });
}); 