require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Middleware para logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Verificar variables de entorno
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error(
    "Error: Las variables de entorno EMAIL_USER y EMAIL_PASS son requeridas"
  );
  process.exit(1);
}

// Mostrar la configuración (sin mostrar la contraseña completa)
console.log("Configuración de correo:", {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS ? "Configurada" : "No configurada",
  passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0,
});

// Configuración del transporter de nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true, // Mantener la conexión abierta
  maxConnections: 1,
  maxMessages: 3,
  rateDelta: 1000,
  rateLimit: 3,
  debug: true,
  logger: true,
});

// Verificar la conexión del transporter
transporter.verify(function (error, success) {
  if (error) {
    console.error("Error al verificar el transporter:", error);
  } else {
    console.log("Servidor de correo listo para enviar mensajes");
  }
});

// Endpoint para enviar correo
app.post("/api/send-email", async (req, res) => {
  console.log("--- INICIO /api/send-email ---");
  console.log("Recibida petición de envío de correo:", req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.log("Error: Campos faltantes en la petición");
    console.log("--- FIN /api/send-email (campos faltantes) ---");
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  const mailOptions = {
    from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Nuevo mensaje de ${name}`,
    text: `\n      Nombre: ${name}\n      Email: ${email}\n      Mensaje: ${message}\n    `,
    html: `\n      <h3>Nuevo mensaje de contacto</h3>\n      <p><strong>Nombre:</strong> ${name}</p>\n      <p><strong>Email:</strong> ${email}</p>\n      <p><strong>Mensaje:</strong></p>\n      <p>${message}</p>\n    `,
  };

  console.log("Opciones de correo preparadas:", mailOptions);

  try {
    console.log("Intentando enviar correo...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado exitosamente:", info);
    console.log("--- FIN /api/send-email (éxito) ---");
    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    console.error("Error completo al enviar el correo:", error);
    console.error("Stack trace:", error.stack);
    console.error("Detalles del error:", {
      code: error.code,
      command: error.command,
      responseCode: error.responseCode,
      response: error.response,
    });
    console.log("--- FIN /api/send-email (error) ---");
    res.status(500).json({
      error: "Error al enviar el correo",
      details: error.message,
      code: error.code,
    });
  }
});

// Ruta de prueba
app.get("/api/test", (req, res) => {
  res.json({ message: "El servidor está funcionando correctamente" });
});

// Endpoint para obtener los trabajos
app.get("/api/works", (req, res) => {
  const works = [
    {
      id: 1,
      title: "Cuatro en Linea",
      image: "/images/work1.png",
      url: "https://www.google.com",
      tecnologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Desarrollo web",
      description:
        "Página web de juegos en linea con una sección en la que se puede jugar el juego Cuatro en Linea on-line. Esta sección se creo utilizando un cuadro de Canvas, además se le añadió sonidos y efectos visuales para mejorar la experiencia del usuario. Además se utilizó un diseño responsive para que se pueda ver en cualquier dispositivo.",
    },
    {
      id: 2,
      title: "Spidey",
      image: "/images/work2.png",
      url: "https://www.google.com",
      tecnologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Desarrollo web",
      description:
        "Página web de un personaje de Marvel, Spiderman, con información sobre el personaje, sus series, peliculas y videojuegos. Se utilizaron las reglas UI/UX para la disposición de los elementos de la página, creando efectos visuales en los personajes mediante spreetSheet y animaciones keyframes con CSS.",
    },
    {
      id: 3,
      title: "Viajes Compartidos",
      image: "/images/work3.png",
      url: "https://www.google.com",
      tecnologies: ["Angular", "ApiRest", "Bootstrap"],
      category: "Desarrollo web",
      description: "Página web de reserva de viajes compartidos. Se crearon dos ApiRest, una para los viajes disponibles y otra para los autos cargados. Se utilizó Bootstrap para agilizar el desarrollo frontend. Además se utilizó un diseño responsive para que se pueda ver en cualquier dispositivo.",

    },
    {
      id: 4,
      title: "Yoga y Pilates",
      image: "/images/work4.png",
      url: "https://www.google.com",
      tecnologies: ["HTML5", "CSS3", "JavaScript"],
      category: "Desarrollo web",
      description: "Página web desarrollada en la materia Web 2. Consta de un formulario de inscripción a las clases de yoga y pilates con validación por código captcha desarrollado en Javascript, y un panel de adminstrador que permite editar y eliminar las inscripciones. Además se utilizó un diseño resposive desarrollado con la técnica mobile first.",
    },
    {
      id: 5,
      title: "Popcorn Film",
      image: "/images/work5.png",
      url: "https://www.google.com",
      tecnologies: ["React", "CSS3", "Javascript"],
      category: "Desarrollo web",
      description: "Página web de colección de películas favoritas, desarrollada en el curso de Udemy 'Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+'. Cuenta con una sección para guardar las características de las películas, así como un buscador por título.",
    },
    {
      id: 6,
      title: "Trabajo 6",
      image: "/images/work6.png",
      url: "https://www.google.com",
      tecnologies: ["React", "Node.js", "Express"],
      category: "Desarrollo web",
      description: "Descripción del trabajo 6",
    },
  ];

  res.json(works);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  console.log("Configuración CORS:", {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  });
});
