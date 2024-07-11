const mysql = require("mysql2");
const { propertiesText } = require("../utils/consoleFormat");

const bold = propertiesText.bold;
const green = propertiesText.green;
const blue = propertiesText.blue;
const magenta = propertiesText.magenta;
const reset = propertiesText.reset;

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
connection.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log(`
${green}${bold}Base de datos conectada💾:${reset}
    ${green}${bold}✔ ${magenta}Host:${reset}${blue} ${process.env.DB_HOST}
    ${green}${bold}✔ ${magenta}Usuario: ${reset}${blue}${process.env.DB_USER}
    ${green}${bold}✔ ${magenta}Puerto: ${reset}${blue}${process.env.DB_PORT}
    ${green}${bold}✔ ${magenta}Base de datos: ${reset}${blue}${process.env.DB_NAME}${reset}`);
});

module.exports = connection;
