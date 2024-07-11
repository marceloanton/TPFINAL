document.addEventListener('DOMContentLoaded', function () {
    const userTableBody = document.getElementById('user-list');
    const editarUsuarioModal = new bootstrap.Modal(document.getElementById('editarUsuarioModal'), {
        keyboard: false
    });
    const editarUsuarioForm = document.getElementById('editarUsuarioForm');
    const userIdInput = document.getElementById('userId');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const dniInput = document.getElementById('dni');
    const emailInput = document.getElementById('email');
    const rolInput = document.getElementById('rol');

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
                    <td>${user.email}</td>
                    <td>${user.rol}</td>
                    <td>
                        <button class="btn btn-sm btn-warning" onclick="abrirEditarUsuarioModal(${user.id_usuario})">Editar</button>
                        <button class="btn btn-sm btn-danger" onclick="eliminarUsuario(${user.id_usuario})">Eliminar</button>
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

    // Función para abrir el modal de edición de usuario
    async function abrirEditarUsuarioModal(userId) {
        try {
            // Realizar solicitud GET para obtener detalles del usuario por ID
            const response = await fetch(`/api/users/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener los detalles del usuario');
            }

            const user = await response.json();

            // Rellenar el formulario con los detalles del usuario
            userIdInput.value = user.id_usuario;
            nombreInput.value = user.nombre;
            apellidoInput.value = user.apellido;
            dniInput.value = user.dni;
            emailInput.value = user.email;
            rolInput.value = user.rol;

            // Abrir el modal
            editarUsuarioModal.show();
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    // Función para actualizar el usuario
    async function actualizarUsuario(event) {
        event.preventDefault();

        try {
            const userId = userIdInput.value;
            const updatedUser = {
                nombre: nombreInput.value,
                apellido: apellidoInput.value,
                dni: dniInput.value,
                email: emailInput.value,
                rol: rolInput.value
            };

            const response = await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser)
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el usuario');
            }

            // Cerrar el modal y recargar la lista de usuarios
            editarUsuarioModal.hide();
            fetchUserList();
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    // Escuchar el envío del formulario de edición de usuario
    editarUsuarioForm.addEventListener('submit', actualizarUsuario);

    // Función para eliminar un usuario
    async function eliminarUsuario(userId) {
        try {
            const confirmation = confirm('¿Estás seguro de que deseas eliminar este usuario?');
            if (!confirmation) {
                return;
            }

            const response = await fetch(`/api/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el usuario');
            }

            // Recargar la lista de usuarios
            fetchUserList();
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    // Exponer funciones para poder llamarlas desde el HTML
    window.abrirEditarUsuarioModal = abrirEditarUsuarioModal;
    window.eliminarUsuario = eliminarUsuario;
});
