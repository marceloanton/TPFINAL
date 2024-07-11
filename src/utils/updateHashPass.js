const bcrypt = require('bcrypt');
const db = require('../config/database');

async function hashAllPasswords() {
    try {
        // Obtener todos los usuarios de la base de datos
        const query = `SELECT id_usuario, contrasena FROM usuarios`;
        db.query(query, async (err, results) => {
            if (err) {
                console.error('Error al obtener los usuarios:', err);
                return;
            }

            // Iterar sobre cada usuario
            for (const user of results) {
                // Verificar si la contraseña ya está hasheada
                if (user.contrasena && !user.contrasena.startsWith('$2b$')) {
                    // Si no está hasheada, hashearla
                    const hashedPassword = await bcrypt.hash(user.contrasena, 10);

                    // Actualizar la base de datos con la contraseña hasheada
                    const updateQuery = `UPDATE usuarios SET contrasena = ? WHERE id_usuario = ?`;
                    db.query(updateQuery, [hashedPassword, user.id_usuario], (updateErr) => {
                        if (updateErr) {
                            console.error(`Error al actualizar la contraseña para el usuario con ID ${user.id_usuario}:`, updateErr);
                        } else {
                            console.log(`Contraseña actualizada correctamente para el usuario con ID ${user.id_usuario}`);
                        }
                    });
                }
            }
        });
    } catch (error) {
        console.error('Error al hashear las contraseñas:', error);
    }
}

// Ejecutar el script
hashAllPasswords();
