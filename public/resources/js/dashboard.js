document.addEventListener('DOMContentLoaded', function () {
    const userTableBody = document.getElementById('user-list');
    const editarUsuarioModal = document.getElementById('editarUsuarioModal');
    const editarUsuarioForm = document.getElementById('editarUsuarioForm');
    const crearUsuarioModal = document.getElementById('crearUsuarioModal');
    const crearUsuarioForm = document.getElementById('crearUsuarioForm');
    const userIdInput = document.getElementById('userId');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const dniInput = document.getElementById('dni');
    const nombreUsuarioInput = document.getElementById('nombre_usuario');
    const emailInput = document.getElementById('email');
    const contrasenaInput = document.getElementById('contrasena');
    const numeroTelefonoInput = document.getElementById('numero_telefono');
    const numeroCelularInput = document.getElementById('numero_celular');
    const direccionInput = document.getElementById('direccion');
    const ciudadInput = document.getElementById('ciudad');
    const provinciaInput = document.getElementById('provincia');
    const paisInput = document.getElementById('pais');
    const imagenInput = document.getElementById('imagen');
    const rolInput = document.getElementById('rol');

    // Toast de Bootstrap para mensajes de éxito o error
    const toastEl = document.querySelector('.toast');
    const toast = new bootstrap.Toast(toastEl);

    // Función para cargar la lista de usuarios desde el backend
    async function fetchUserList() {
        try {
            const response = await fetch('/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener la lista de usuarios');
            }

            const data = await response.json();

            // Limpiar tabla antes de agregar nuevos datos
            userTableBody.innerHTML = '';

            // Iterar sobre cada usuario y agregarlo a la tabla
            data.forEach(user => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${user.id_usuario}</td>
                    <td>${user.nombre}</td>
                    <td>${user.apellido}</td>
                    <td>${user.dni}</td>
                    <td>${user.nombre_usuario}</td>
                    <td>${user.email}</td>
                    <td>
                        ${user.imagen ?
                        `<img src="${user.imagen}" alt="Avatar" width="50">` :
                        `<img src="../../resources/images/user/default.gif" alt="Avatar" width="50">`}
                    </td>
                    <td>${user.rol}</td>
                    <td>
                        <button class="mdi mdi-grease-pencil btn btn-sm btn-warning" onclick="abrirEditarUsuarioModal(${user.id_usuario})"></button>
                        <button class="mdi mdi-delete-forever btn btn-sm btn-danger" onclick="confirmarEliminarUsuario(${user.id_usuario}, '${user.apellido}', '${user.nombre}')"></button>
                    </td>
                `;
                userTableBody.appendChild(tr);
            });
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    // Llamar a la función para cargar la lista de usuarios al cargar la página
    fetchUserList();

    // Función para crear un nuevo usuario
    async function crearUsuario(event) {
        event.preventDefault();

        const nuevoUsuario = {
            nombre: nombreCrear.value,
            apellido: apellidoCrear.value,
            dni: dniCrear.value,
            nombre_usuario: nombreUsuarioCrear.value,
            email: emailCrear.value,
            contrasena: contrasenaCrear.value,
            numero_telefono: numeroTelefonoCrear.value,
            numero_celular: numeroCelularCrear.value,
            direccion: direccionCrear.value,
            ciudad: ciudadCrear.value,
            provincia: provinciaCrear.value,
            pais: paisCrear.value,
            imagen: imagenCrear.value,
            rol: rolCrear.value,
        };

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoUsuario),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error al crear el usuario:', errorData); // Depuración
                throw new Error('Error al crear el usuario');
            }

            console.log('Usuario creado con éxito'); // Depuración

            // Limpiar el formulario después de la creación
            limpiarFormularioCrear();

            // Ocultar el modal de creación si está abierto
            $(crearUsuarioModal).modal('hide');

            // Recargar la lista de usuarios
            fetchUserList();
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    // Función para limpiar el formulario de creación después de la creación
    function limpiarFormularioCrear() {
        nombreCrear.value = '';
        apellidoCrear.value = '';
        dniCrear.value = '';
        nombreUsuarioCrear.value = '';
        emailCrear.value = '';
        contrasenaCrear.value = '';
        numeroTelefonoCrear.value = '';
        numeroCelularCrear.value = '';
        direccionCrear.value = '';
        ciudadCrear.value = '';
        provinciaCrear.value = '';
        paisCrear.value = '';
        imagenCrear.value = '';
        rolCrear.value = '';
    }

    // Event listener para el formulario de creación de usuario
    crearUsuarioForm.addEventListener('submit', crearUsuario);


    // Función para abrir el modal de edición de usuario
    window.abrirEditarUsuarioModal = async function (userId) {
        try {
            // Realizar solicitud GET para obtener detalles del usuario por ID
            const response = await fetch(`/api/users/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener detalles del usuario');
            }

            const user = await response.json();

            // Rellenar el formulario de edición con los detalles del usuario
            userIdInput.value = user.id_usuario;
            nombreInput.value = user.nombre;
            apellidoInput.value = user.apellido;
            dniInput.value = user.dni;
            nombreUsuarioInput.value = user.nombre_usuario;
            emailInput.value = user.email;
            numeroTelefonoInput.value = user.numero_telefono;
            numeroCelularInput.value = user.numero_celular;
            direccionInput.value = user.direccion;
            ciudadInput.value = user.ciudad;
            provinciaInput.value = user.provincia;
            paisInput.value = user.pais;
            imagenInput.value = user.imagen;
            rolInput.value = user.rol;

            // Mostrar el modal
            $(editarUsuarioModal).modal('show');
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    // Función para actualizar el usuario
    async function actualizarUsuario(event) {
        event.preventDefault();

        const userId = userIdInput.value;
        const updatedUser = {
            nombre: nombreInput.value,
            apellido: apellidoInput.value,
            dni: dniInput.value,
            nombre_usuario: nombreUsuarioInput.value,
            email: emailInput.value,
            contrasena: contrasenaInput.value,
            numero_telefono: numeroTelefonoInput.value,
            numero_celular: numeroCelularInput.value,
            direccion: direccionInput.value,
            ciudad: ciudadInput.value,
            provincia: provinciaInput.value,
            pais: paisInput.value,
            imagen: imagenInput.value,
            rol: rolInput.value,
        };

        try {
            const response = await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error al actualizar el usuario:', errorData); // Depuramos
                throw new Error('Error al actualizar el usuario');
            }

            // Mostrar el toast de éxito
            toastEl.classList.remove('bg-danger');
            toastEl.classList.add('bg-success');
            toast.show();

            console.log('Usuario actualizado con éxito'); // Depuramos

            // Ocultar el modal
            $(editarUsuarioModal).modal('hide');

            // Recargar la lista de usuarios
            fetchUserList();
        } catch (error) {
            console.error('Error:', error.message);

            // Mostrar el toast de error
            toastEl.classList.remove('bg-success');
            toastEl.classList.add('bg-danger');
            toast.show();
        }
    }

    // Asignar el evento submit al formulario de edición
    editarUsuarioForm.addEventListener('submit', actualizarUsuario);

    // Seguimos con las demas funciones para actualizar el usuario
});

// Función para eliminar un usuario
async function eliminarUsuario(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el usuario');
        }

        // Recargar la lista de usuarios después de eliminar
        fetchUserList();
    } catch (error) {
        console.error('Error:', error.message);
    }
};
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
