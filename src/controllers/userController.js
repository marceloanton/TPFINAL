
const bcrypt = require('bcrypt');
const db = require('../config/database');

const getUsers = (req, res) => {
  const query = 'SELECT * FROM usuarios';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al recibir los usuarios', err });
    res.status(200).json(results);
  });
};

const getUser = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM usuarios WHERE id_usuario = ?';
  db.query(query, [id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error al recibir el usuario', err });
    if (results.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(results[0]);
  });
};

const createUser = async (req, res) => {
  const {
    nombre, apellido, dni, nombre_usuario, email, contrasena,
    numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, rol
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    const query = 'INSERT INTO usuarios (nombre, apellido, dni, nombre_usuario, email, contrasena, numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, rol, fecha_actualizacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())';
    const values = [nombre, apellido, dni, nombre_usuario, email, hashedPassword, numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, rol];

    db.query(query, values, (err, result) => {
      if (err) return res.status(500).json({ message: 'Error al crear el usuario', err });
      res.status(201).json({ message: 'Usuario creado' });
    });
  } catch (err) {
    res.status(500).json({ message: 'Error al hashear la contraseña', err });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    nombre, apellido, dni, nombre_usuario, email, contrasena,
    numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, rol
  } = req.body;

  try {
    const hashedPassword = contrasena ? await bcrypt.hash(contrasena, 10) : null;
    const query = 'UPDATE usuarios SET nombre = ?, apellido = ?, dni = ?, nombre_usuario = ?, email = ?, contrasena = COALESCE(?, contrasena), numero_telefono = ?, numero_celular = ?, direccion = ?, ciudad = ?, provincia = ?, pais = ?, imagen = ?, rol = ?, fecha_actualizacion = NOW() WHERE id_usuario = ?';
    const values = [nombre, apellido, dni, nombre_usuario, email, hashedPassword, numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, rol, id];

    db.query(query, values, (err, result) => {
      if (err) return res.status(500).json({ message: 'Error al actualizar el usuario', err });
      res.status(200).json({ message: 'Usuario actualizado' });
    });
  } catch (err) {
    res.status(500).json({ message: 'Error al hashear la contraseña', err });
  }
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM usuarios WHERE id_usuario = ?';

  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Error al eliminar el usuario', err });
    res.status(200).json({ message: 'Usuario eliminado' });
  });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
