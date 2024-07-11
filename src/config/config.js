// Funcion para buscar un puerto disponible que nos de el OS
function buscarPuertoDisponible() {
    const server = require('http').createServer();
    server.listen(0);
    const port = server.address().port;
    server.close();
    return port;
}
