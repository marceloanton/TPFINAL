// controllers/dashboardController.js
const userController = require('./userController');

// Función para obtener datos del dashboard para administradores
const getAdminDashboardData = async (req, res) => {
    try {
        // Verificamos si el usuario tiene rol de administrador
        if (req.user.rol !== 'admin') {
            return res.status(403).json({ message: 'Acceso denegado' });
        }

        // Le ponemos las cositas del Administrador

        res.json({
            message: 'Dashboard de Administrador',
            user: req.user  // El usuario autenticado está disponible en req.user
        });
    } catch (error) {
        console.error('Error al obtener datos del dashboard de administrador:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Función para obtener datos del dashboard para usuarios
const getUserDashboardData = async (req, res) => {
    try {
        // Obtener datos específicos del usuario utilizando el userController
        const user = await userController.getUserById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Le ponemos las cositas del usuario

        res.json({
            message: 'Dashboard de Usuario',
            user: {
                id: user.id_usuario,
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.email,
                // Otros campos del usuario según necesites
            }
        });
    } catch (error) {
        console.error('Error al obtener datos del dashboard de usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getAdminDashboardData,
    getUserDashboardData,
};
