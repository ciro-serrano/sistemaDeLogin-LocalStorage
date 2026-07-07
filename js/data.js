export function obtenerUsuarios() {
  //leemos el texto y lo convertimos a un array de nuevo, listo para usar
  const usuariosGuardados = localStorage.getItem("usuarios"); //leemos el array de usuarios
    if (!usuariosGuardados) {
    //verificamos que exista, y si no existe devolver un  array vacio, para que no explote la primera vez
    return [];
    } else {
    return JSON.parse(usuariosGuardados); // si existe , parseamos el array
    }
}

export function guardarUsuarios(usuarios) {
  //convierte el array a texto y lo guarda
  const usuarioGuardado = JSON.stringify(usuarios); //  convertimos el array a texto
  localStorage.setItem("usuarios", usuarioGuardado); //sobrescribimos el contenido de localstorage
}

export function obtenerSesion() {
  //unica funcion, leer y devolver
    const usuarioActivo = localStorage.getItem("sesion");
    if (usuarioActivo) {
    return JSON.parse(usuarioActivo);
    } else {
    return null;
    }
}

export function guardarSesion(usuario) {
  //ahora si escribe , recibe el objeto, y lo almacena en la key 'sesion'
    const usuarioActivo = JSON.stringify(usuario);
    localStorage.setItem("sesion", usuarioActivo);
}

export function cerrarSesion() {
    localStorage.removeItem("sesion");
}
