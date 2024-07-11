const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../config/database');

// Ruta de login
router.post('/login', (req, res) => {
    const { nombreUsuarioOEmail, contrasena } = req.body;

    const query = 'SELECT * FROM usuarios WHERE email = ? OR nombre_usuario = ?';
    db.query(query, [nombreUsuarioOEmail, nombreUsuarioOEmail], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Error al obtener el usuario', err });

        if (results.length === 0) return res.status(404).json({ message: 'Error al iniciar sesión' });

        const user = results[0];
        const isMatch = await bcrypt.compare(contrasena, user.contrasena);

        if (!isMatch) return res.status(400).json({ message: 'Error al iniciar sesión' });

        // Iniciar sesión
        req.session.user = {
            id: user.id_usuario,
            nombreUsuario: user.nombre_usuario,
            email: user.email,
        };

        res.json({ message: 'Inicio de sesión exitoso', user: req.session.user });
    });
});

// Ruta de logout
router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).json({ message: 'Error al cerrar sesión' });
        res.json({ message: 'Sesión cerrada exitosamente' });
    });
});

module.exports = router;
