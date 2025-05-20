require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const app = express();

// ============= CONFIGURACIÓN INICIAL =============
const PORT = process.env.PORT || 5000;

// Verificar variables de entorno
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error(
    "Error: Las variables de entorno EMAIL_USER y EMAIL_PASS son requeridas"
  );
  process.exit(1);
}

// ============= MIDDLEWARE =============
// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// JSON parser
app.use(express.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "../public")));

// Logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// ============= CONFIGURACIÓN DE CORREO =============
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true,
  maxConnections: 1,
  maxMessages: 3,
  rateDelta: 1000,
  rateLimit: 3,
  debug: true,
  logger: true,
});

// Verificar conexión del transporter
transporter.verify(function (error, success) {
  if (error) {
    console.error("Error al verificar el transporter:", error);
  } else {
    console.log("Servidor de correo listo para enviar mensajes");
  }
});

// ============= DATOS =============
const works = [
  {
    id: 1,
    title: "Cuatro en Linea",
    image: "/img/work1.png",
    url: "https://cuatroenlineaproyect.netlify.app",
    tecnologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Desarrollo web",
    description:
    "Página web de juegos en linea con una sección en la que se puede jugar el juego Cuatro en Linea on-line. Esta sección se creo utilizando un cuadro de Canvas, además se le añadió sonidos y efectos visuales para mejorar la experiencia del usuario. Además se utilizó un diseño responsive para que se pueda ver en cualquier dispositivo.",
  },
  {
    id: 2,
    title: "Spidey",
    image: "/img/work2.png",
    url: "https://spideyproyect.netlify.app/",
    tecnologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Desarrollo web",
    description:
      "Página web de un personaje de Marvel, Spiderman, con información sobre el personaje, sus series, peliculas y videojuegos. Se utilizaron las reglas UI/UX para la disposición de los elementos de la página, creando efectos visuales en los personajes mediante spreetSheet y animaciones keyframes con CSS.",
  },
  {
    id: 3,
    title: "Viajes Compartidos",
    image: "/img/work3.png",
    url: "https://viajescompartidosproyect.netlify.app",
    tecnologies: ["Angular", "ApiRest", "Bootstrap"],
    category: "Desarrollo web",
    description:
      "Página web de reserva de viajes compartidos. Se crearon dos ApiRest, una para los viajes disponibles y otra para los autos cargados. Se utilizó Bootstrap para agilizar el desarrollo frontend. Además se utilizó un diseño responsive para que se pueda ver en cualquier dispositivo.",
  },
  {
    id: 4,
    title: "Yoga y Pilates",
    image: "/img/work4.png",
    url: "https://yogaproyect.netlify.app/",
    tecnologies: ["HTML5", "CSS3", "JavaScript"],
    category: "Desarrollo web",
    description:
      "Página web desarrollada en la materia Web 2. Consta de un formulario de inscripción a las clases de yoga y pilates con validación por código captcha desarrollado en Javascript, y un panel de adminstrador que permite editar y eliminar las inscripciones. Además se utilizó un diseño resposive desarrollado con la técnica mobile first.",
  },
  {
    id: 5,
    title: "Popcorn Film",
    image: "/img/work5.png",
    url: "https://www.google.com",
    tecnologies: ["React", "CSS3", "JavaScript"],
    category: "Desarrollo web",
    description:
      "Página web de colección de películas favoritas, desarrollada en el curso de Udemy 'Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+'. Cuenta con una sección para guardar las características de las películas, así como un buscador por título.",
  },
  {
    id: 6,
    title: "Trabajo 6",
    image: "/img/work6.png",
    url: "https://www.google.com",
    tecnologies: ["React"],
    category: "Desarrollo web",
    description: "Descripción del trabajo 6",
  },
];

const worksBackend = [
  {
    id: 1,
    title: "Monopatines",
    image: "/img/worksBackend1.png",
    url: "https://github.com/FelicitasAguerralde/ARQUITECTURAS_WEB/tree/main/Microservicios_TPE",
    tecnologies: ["Spring Boot", "MySQL", "Docker", "Swagger"],
    category: "Arquitecturas web",
    description:
    "Aplicación web para la gestión de monopatines y paradas con una arquitectura de microservicios. Se utilizó Spring Boot para el desarrollo del backend y MySQL para la base de datos. Además se utilizó Docker para la contenerización de la aplicación.",
  },
  {
    id: 2,
    title: "Facturación",
    image: "/img/worksBackend2.png",
    url: "https://github.com/FelicitasAguerralde/ARQUI_Integrador_1_Grupo_5",
    tecnologies: ["Java", "MySQL", "Hibernate"],
    category: "Arquitecturas web",
    description:
    "Creación de esquema, carga de datos desde archivos CSV usando JDBC y consultas avanzadas SQL. Implementación de diferentes enfoques de persistencia de datos en Java, utilizando bases de datos relacionales (Derby y MySQL) y patrones de diseño como DAO y JPA/Hibernate."
  },
  {
    id: 3,
    title: "Registro de alumnos",
    image: "/img/worksBackend3.png",
    url: "https://github.com/FelicitasAguerralde/ARQUITECTURAS_WEB/tree/main/integrador_2",
    tecnologies: ["Java", "MySQL", "Hibernate"],
    category: "Arquitecturas web",
    description:
"Implementación de un diseño de registro de estudiantes mediante Servicios Rest y Spring Boot. Testeo de la aplicación con Postman."  
},
{
  id: 4,
  title: "Registro de alumnos",
  image: "/img/worksBackend4.png",
  url: "https://github.com/FelicitasAguerralde/ARQUITECTURAS_WEB/tree/main/integrador_3",
  tecnologies: ["Spring Boot", "ApiRest", "Postman"],
  category: "Arquitecturas web",
  description:
  "Desarrollo de un sistema de registro de alumnos en una universidad. Se utilizó Java para el desarrollo del backend y MySQL para la base de datos. Además se utilizó Hibernate para la persistencia de datos."
},
{
  id: 5,
  title: "Asignaciones",
  image: "/img/worksBackend5.png",
  url: "https://github.com/FelicitasAguerralde/GRUPO_71_PROG_3_TPE",
  tecnologies: ["Java"],
  category: "Algoritmos",
  description:
"Implementación de los algoritmos de backtracking y greedy para la asignación de tareas a procesadores."
},
{
  id: 6,
  title: "Sistema de encuestas",
  image: "/img/worksBackend6.png",
  url: "https://github.com/FelicitasAguerralde/PROG_2_TP_3_Sistema_Encuestas/tree/master",
  tecnologies: ["Java"],
  category: "Programación orientada a objetos",
  description:
  "Desarrollo de un sistema de encuestas mediante clases y objetos en Java."
}
];
// ============= RUTAS =============
// Ruta de prueba
app.get("/api/test", (req, res) => {
  res.json({ message: "El servidor está funcionando correctamente" });
});

// Obtener trabajos
app.get("/api/works", (req, res) => {
  res.json(works);
});

app.get("/api/worksBackend", (req, res) => {
  res.json(worksBackend);
});

// Enviar correo
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

// ============= INICIAR SERVIDOR =============
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  console.log("Configuración CORS:", {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  });
});
