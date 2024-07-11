require('dotenv').config();

const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const { propertiesText } = require('./src/utils/consoleFormat');
const { buscarPuertoDisponible } = require('./src/config/config');

const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');

// Formato para imprimir un mensaje de log con color
const bold = propertiesText.bold;
const red = propertiesText.red;
const yellow = propertiesText.yellow;
const green = propertiesText.green;
const blue = propertiesText.blue;
const reset = propertiesText.reset;

// Configuramos el puerto desde el archivo .env o utilizamos el primer puerto disponible que nos de el OS
const port = process.env.API_PORT || buscarPuertoDisponible();

// Configuramos la carpeta 'public' para los archivos estáticos de la aplicación
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);

    // Manejo del error 404 (Recurso no encontrado)
    if (err.status === 404) {
        res.status(404).sendFile(path.join(__dirname, 'public', '404.html'), { root: __dirname });
    } else if (err.status === 500) {
        // Manejo del error 500 (Error interno del servidor)
        res.status(500).sendFile(path.join(__dirname, 'public', '500.html'), { root: __dirname });
    } else {
        // Si no se conoce el error, se manda al siguiente middleware
        next(err);
    }
});

// Middleware para análisis de JSON y URL codificada
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Este es el control de sesiones
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));

// Rutas de autenticación
app.use('/api/auth', authRoutes);
// Rutas de usuario
app.use('/api/users', userRoutes);

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`
${green}${bold}API iniciada en:${reset}
    ${green}${bold}✔ ${red}Puerto:${reset} ${blue}${port}${reset}
    ${green}${bold}✔ ${red}URL:${reset} ${yellow}http://localhost:${port}/api${reset}`);
});
