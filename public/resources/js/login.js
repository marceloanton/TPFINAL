document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            const nombreUsuarioOEmail = document.getElementById('nombreUsuarioOEmail').value;
            const contrasena = document.getElementById('contrasena').value;

            try {
                const response = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ nombreUsuarioOEmail, contrasena })
                });

                if (!response.ok) {
                    throw new Error('Credenciales inválidas');
                }

                const data = await response.json();

                // Aquí manejas la respuesta según los datos que recibas
                console.log('Datos del usuario:', data);

                // Redirigir al dashboard o página principal después del login
                window.location.href = '../../dashboard.html';

            } catch (error) {
                console.error('Error:', error.message);
                alert('Error al iniciar sesión');
            }
        });
    }
});
