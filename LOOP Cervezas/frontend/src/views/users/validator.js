const formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    let errores = [];

    let campoNombre = document.getElementsByName('firstName');

    if (campoNombre.value == '') {
        errores.push('El campo de nombre no puede estar vacío.')
    } else if (campoNombre.value.length < 2) {
        errores.push('El campo de nombre debe tener al menos 2 caracteres.')
    }

    let campoApellido = document.getElementsByName('lastName');

    if (campoApellido.value == '') {
        errores.push('El campo de apellido no puede estar vacío.')
    } else if (campoApellido.value.length < 2) {
        errores.push('El campo de apellido debe tener al menos 2 caracteres.')
    }

    let campoMail = document.getElementsByName('email');

    if (campoMail.value == '') {
        errores.push('El campo de email no puede estar vacío.')
    }

    let campoContraseña = document.getElementsByName('password');

    if (campoContraseña.value == '') {
        errores.push('El campo de contraseña no puede estar vacío.')
    } else if (campoContraseña.value.length < 8) {
        errores.push('El campo de contraseña debe tener al menos 8 caracteres.')
    }

    let campoName = document.getElementsByName('name');

    if (campoName.value == '') {
        errores.push('El campo de nombre de producto no puede estar vacío.')
    } else if (campoName.value.length < 5) {
        errores.push('El campo de nombre de producto debe tener al menos 5 caracteres.')
    }

    let campoDescripcion = document.getElementsByName('description');

    if (campoDescripcion.value == '') {
        errores.push('El campo de descripcion de producto no puede estar vacío.')
    } else if (campoDescripcion.value.length < 20) {
        errores.push('El campo de descripcion de producto debe tener al menos 20 caracteres.')
    }
})