const bcrypt = require('bcrypt');
const db = require('../config/database');

// Función para autenticar sin token JWT
// Función para autenticar sin token JWT
const login = async (req, res) => {
    const { nombreUsuarioOEmail, contrasena } = req.body;

    try {
        // Buscar usuario por nombre de usuario o email en la base de datos MySQL
        const [rows] = await pool.execute(
            'SELECT * FROM usuarios WHERE nombre_usuario = ? OR email = ?',
            [nombreUsuarioOEmail, nombreUsuarioOEmail]
        );

        const user = rows[0]; // Tomar el primer resultado

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        const isMatch = await bcrypt.compare(contrasena, user.contrasena);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciales inválidas' });
        }

        // Devolver datos del usuario sin token
        res.status(200).json({
            id: user.id_usuario,
            nombre: user.nombre,
            apellido: user.apellido,
            email: user.email,
            nombre_usuario: user.nombre_usuario,
            dni: user.dni,
            numero_telefono: user.numero_telefono,
            numero_celular: user.numero_celular,
            direccion: user.direccion,
            ciudad: user.ciudad,
            provincia: user.provincia,
            pais: user.pais,
            imagen: user.imagen,
            fecha_registro: user.fecha_registro,
            fecha_actualizacion: user.fecha_actualizacion,
            rol: user.rol
        });

    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

const register = async (req, res) => {
    const {
        nombre, apellido, dni, nombre_usuario, email, contrasena,
        numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, rol
    } = req.body;

    // Validaciones de los datos recibidos
    // ...

    try {
        // Verificar si el correo electrónico o nombre de usuario ya están registrados
        const queryCheckEmail = 'SELECT * FROM usuarios WHERE email = ?';
        db.query(queryCheckEmail, [email], async (err, resultsEmail) => {
            if (err) {
                return res.status(500).json({ message: 'Error al verificar el usuario', err });
            }

            if (resultsEmail.length > 0) {
                return res.status(400).json({ message: 'El correo electrónico ya está registrado' });
            }

            const queryCheckUsername = 'SELECT * FROM usuarios WHERE nombre_usuario = ?';
            db.query(queryCheckUsername, [nombre_usuario], async (err, resultsUsername) => {
                if (err) {
                    return res.status(500).json({ message: 'Error al verificar el usuario', err });
                }

                if (resultsUsername.length > 0) {
                    return res.status(400).json({ message: 'El nombre de usuario ya está registrado' });
                }

                // Si todo está correcto, procedemos a crear el usuario
                const hashedPassword = await bcrypt.hash(contrasena, 10);
                const queryCreateUser = `
                    INSERT INTO usuarios 
                    (nombre, apellido, dni, nombre_usuario, email, contrasena, numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, rol, fecha_actualizacion) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
                `;
                const values = [
                    nombre, apellido, dni, nombre_usuario, email, hashedPassword,
                    numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, rol
                ];

                // Ejecución de la consulta para crear el usuario
                db.query(queryCreateUser, values, (err, result) => {
                    if (err) {
                        console.error('Error al crear el usuario:', err);
                        return res.status(500).json({ message: 'Error al crear el usuario', err });
                    }
                    res.status(201).json({ message: 'Usuario creado exitosamente' });
                });
            });
        });
    } catch (err) {
        console.error('Error al hashear la contraseña:', err);
        res.status(500).json({ message: 'Error al hashear la contraseña', err });
    }
};

const logout = (req, res) => {
    // Implementar la lógica para logout si es necesario
    res.status(200).json({ message: 'Logout successful' });
};

module.exports = {
    login,
    register,
    logout
};
