const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middlewares/authenticate');

// Crear usuario - ruta pública
router.post('/', userController.createUser);

// Rutas que requieren autenticación
router.get('/', authenticate, userController.getUsers);
router.get('/:id', authenticate, userController.getUser);
router.put('/:id', authenticate, userController.updateUser);
router.delete('/:id', authenticate, userController.deleteUser);

module.exports = router;
