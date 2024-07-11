document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const errorMessages = document.querySelectorAll('.error-message');

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nombreUsuario = document.getElementById('nombre_usuario').value;
        const email = document.getElementById('email').value;
        const contrasena = document.getElementById('contrasena').value;

        resetErrorMessages();

        let isValid = true;

        if (!validateNombreUsuario(nombreUsuario)) {
            isValid = false;
            displayErrorMessage('Nombre de usuario debe tener al menos 6 caracteres', 'nombreUsuarioError');
        }

        if (!validateEmail(email)) {
            isValid = false;
            displayErrorMessage('Correo electrónico inválido', 'emailError');
        }

        if (!validateContrasena(contrasena)) {
            isValid = false;
            displayErrorMessage('Contraseña debe tener al menos 6 caracteres', 'contrasenaError');
        }

        if (isValid) {
            try {
                const response = await fetch('/api/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre_usuario: nombreUsuario,
                        email: email,
                        contrasena: contrasena
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    if (response.status === 400) {
                        displayErrorMessage(data.message);
                    } else {
                        alert('Error en el servidor');
                    }
                    return;
                }

                alert('Usuario registrado exitosamente');
                window.location.href = '../../index.html'; // Redirigir al usuario al login

            } catch (error) {
                console.error('Error al registrar:', error);
                alert('Error al registrar el usuario');
            }
        }
    });

    function displayErrorMessage(message, id) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
        errorElement.classList.add('active');
    }

    function resetErrorMessages() {
        errorMessages.forEach(error => {
            error.textContent = '';
            error.classList.remove('active');
        });
    }

    function validateNombreUsuario(nombreUsuario) {
        return nombreUsuario.length >= 6;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateContrasena(contrasena) {
        return contrasena.length >= 6;
    }
});
