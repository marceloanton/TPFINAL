const express = require('express');

const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

const routesConfig = (app) => {
    const apiRouter = express.Router();

    // Autenticación
    apiRouter.use('/auth', authRoutes);

    // Usuarios
    apiRouter.use('/users', userRoutes);

    // Configuramos la ruta base para nuestra API
    app.use('/api', apiRouter);
};

module.exports = routesConfig;
