// Lógica específica para el panel de admin.
document.addEventListener('DOMContentLoaded', () => {
    // Verificar el rol del usuario y redirigir si es necesario
    const token = localStorage.getItem('token');
    if (!token) {
        alert('No estás autenticado');
        window.location.href = '../../pages/login.html';
    } else {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.role !== 'admin') {
            alert('No tienes permiso para acceder a esta página');
            window.location.href = '../../index.html';
        }
    }
});

function createUser() {
    const createUser = async () => {
        const userData = {
            nombre: 'Nombre del Usuario',
            apellido: 'Apellido del Usuario',
            contrasena: 'password'
        };

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al crear el usuario');
            }

            const responseData = await response.json();
            console.log(responseData.message); // Mensaje de éxito del backend
        } catch (error) {
            console.error('Error al crear el usuario:', error.message);
            // Manejar el error en el frontend según sea necesario
        }
    };
    createUser();
    console.log('Create User');
}

function readUsers() {
    // Lógica para leer usuarios
    console.log('Read Users');
}

function updateUser() {
    // Lógica para actualizar un usuario
    console.log('Update User');
}

function deleteUser() {
    // Lógica para eliminar un usuario
    console.log('Delete User');
}
