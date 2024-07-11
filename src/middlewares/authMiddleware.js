const db = require('../config/database');

const authenticateUser = (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'No estás autenticado' });
    }

    const query = 'SELECT * FROM usuarios WHERE id_usuario = ?';
    db.query(query, [req.session.userId], (err, results) => {
        if (err) return res.status(500).json({ message: 'Error al obtener el usuario', err });

        if (results.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' });

        req.user = results[0];  // Almacenamos el usuario autenticado en req.user
        next();
    });
};

module.exports = {
    authenticateUser,
};
