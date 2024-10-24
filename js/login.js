// Definición de funciones

/// Función para validar el registro
const validarRegistro = (usuario, contrasena, telefono, direccion, dni) => {
    // Validación del nombre de usuario
    if (!usuario || usuario.length < 5) {
        alert('El nombre de usuario debe tener al menos 5 caracteres.');
        return false;
    }

    // Validación de la contraseña
    const contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d){9,}$/;
    if (!contrasenaRegex.test(contrasena)) {
        alert('La contraseña debe tener al menos 9 caracteres, incluyendo letras y números.');
        return false;
    }

    // Validación del teléfono (solo números)
    const telefonoRegex = /^\d+$/;
    if (!telefonoRegex.test(telefono)) {
        alert('El teléfono solo puede contener números.');
        return false;
    }

    // Validación de la dirección, solo verificar que no esté vacía
    if (!direccion) {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    // Validación del documento (solo números)
    if (!dni || !telefonoRegex.test(dni)) {
        alert('El documento solo puede contener números.');
        return false;
    }

    return true;
}


function generarId() {
    let id = localStorage.getItem('idUsuario') || '0';
    id = parseInt(id) + 1;
    localStorage.setItem('idUsuario', id.toString());
    return id;
}

// Event listener para el formulario de registro
// Event listener para el formulario de registro
document.getElementById('formularioRegistro').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('regUsuario').value;
    const contrasena = document.getElementById('regContrasena').value;
    const telefono = document.getElementById('regTelefono').value;
    const direccion = document.getElementById('regDireccion').value;
    const dni = document.getElementById('regDNI').value;

    if (validarRegistro(usuario, contrasena, telefono, direccion, dni)) {
        const nuevoUsuario = {
            id: generarId(),
            usuario,
            contrasena,
            telefono,
            direccion,
            dni
        };
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Usuario registrado exitosamente.');
        document.getElementById('formularioRegistro').reset();
    }
});


document.getElementById('formularioInicioSesion').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('loginUsuario').value;
    const contrasena = document.getElementById('loginContrasena').value;

    console.log('Usuario ingresado:', usuario);
    console.log('Contraseña ingresada:', contrasena);

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    console.log('Usuarios en localStorage:', usuarios);

    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);

    if (usuarioEncontrado) {
        sessionStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));
        alert('Inicio de sesión exitoso.');
        document.getElementById('formularioInicioSesion').reset();
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});
