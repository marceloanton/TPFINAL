/**  * Genera 100 usuarios con datos falsos con el paquete Faker de NodeJS
 *  Autor: Marcelo Ruben Anton
 *  Asegurarse de tener el paquete Faker instalado y Mysql2 instalado
 *  npm install faker@5.5.3 && npm install mysql2
 * */
const mysql = require('mysql2');
const faker = require('faker');
const readline = require('readline');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'db_tpo_nodejs'
});

// Definimos las opciones para el tipo de usuario
const tipoUsuarioOpciones = ['Admin', 'SuperUsuario', 'Moderador', 'Editor', 'Usuario', 'Baneado', 'Suspendido', 'Eliminado'];

// Creamos el objeto de línea de comandos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* rl.question('¿Cual es el nombre de la tabla? ', (tableName) => {
    const nombreTabla = parseInt(tableName);
}); */
// Preguntamos al usuario cuántos usuarios quiere generar
rl.question('¿Cuántos usuarios desea generar? ', (usuarios) => {
    const numeroUsuarios = parseInt(usuarios);


    // Genera 100 usuarios con datos falsos
    const users = Array.from({ length: numeroUsuarios }, () => ({
        nombre: faker.name.findName(),
        apellido: faker.name.lastName(),
        dni: faker.datatype.number({ min: 10000000, max: 50000000 }).toString(),
        nombre_usuario: faker.internet.userName(),
        email: faker.internet.email(),
        contrasena: faker.internet.password(),
        numero_telefono: faker.phone.phoneNumberFormat().slice(0, 13),
        numero_celular: faker.phone.phoneNumberFormat().slice(0, 13),
        direccion: faker.address.streetAddress(),
        ciudad: faker.address.city(),
        provincia: faker.address.state(),
        pais: faker.address.country(),
        imagen: faker.random.arrayElement([]),
        fecha_registro: new Date().toISOString().slice(0, 19).replace('T', ' '),
        fecha_actualizacion: faker.date.recent(),
        tipo_usuario: faker.random.arrayElement(tipoUsuarioOpciones),
    }));


    // Inserta los datos falsos en la tabla de usuarios
    users.forEach((user) => {
        const query = 'INSERT INTO usuarios (nombre, apellido, dni, nombre_usuario, email, contrasena, numero_telefono, numero_celular, direccion, ciudad, provincia, pais, imagen, fecha_registro, fecha_actualizacion, tipo_usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        connection.query(query, Object.values(user), (err, result) => {
            if (err) {
                throw err;
            }
            console.log(`
Usuario insertado correctamente: ${result.insertId} - ${user.nombre} ${user.apellido}`);
        });

    });
    // Cerramos la conexión a la base de datos
    connection.end();

    // Cerramos el objeto de línea de comandos
    rl.close();
}, 100);
