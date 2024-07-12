
// Función para hacer una solicitud al servidor
function fetchData(url, options = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(options.method || 'GET', url);

        // Configurar cabeceras si es necesario
        if (options.headers) {
            for (const [key, value] of Object.entries(options.headers)) {
                xhr.setRequestHeader(key, value);
            }
        }

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = () => reject(xhr.statusText);

        xhr.send(options.body);
    });
}

// Función para verificar la sesión y manejar redirecciones
function checkSessionAndFetchData(url, options = {}) {
    fetchData(url, options)
        .then(response => {
            // Procesar la respuesta exitosa
            //console.log('Respuesta exitosa:', response);
        })
        .catch(error => {
            // Manejar errores de red o errores HTTP
            console.error('Error al procesar la solicitud:', error);
            if (error === 'Unauthorized') {
                // Redirigir al usuario a la página de inicio de sesión o a otra página
                window.location.href = '/index.html'; // Cambia esto según tu configuración
            }
        });
}


// Vemos si tenemos acceso a nuestro fech
checkSessionAndFetchData('/api/users', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}); 
