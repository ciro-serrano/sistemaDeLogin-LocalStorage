import { obtenerUsuarios, guardarUsuarios, guardarSesion, cerrarSesion } from "./data.js"; 
import { validarCamposVacios, validarFormatoEmail, normalizarEmail, emailYaExiste, compararPassword } from "./validaciones.js";


export function registrarUsuario(email, password){ 
    
    //PARTE 1 

    email = normalizarEmail(email)

    if(!validarCamposVacios(email,password)){
        return {exito : false , mensaje: "el email y contraseña son obligatorios"}
    }
    
    //PARTE 2 
    if(!validarFormatoEmail(email)){
        return {exito : false, mensaje: "formato de email no valido"}
    }
    //PARTE 3
    const arrayUsuarios = obtenerUsuarios()
    const usuarioExiste = emailYaExiste(email, arrayUsuarios)

    if (usuarioExiste){
        return{exito: false , mensaje : "el email ingresado ya existe"}
    }

    //PARTE 4 
    const usuario = {email: email , password: password}
    const usuarios = [...arrayUsuarios , usuario]

    guardarUsuarios(usuarios)

    return {exito: true, mensaje: "usuario creado correctamente"}
}

export function iniciarSesion(email, password){
    email = normalizarEmail(email)
    const usuarios = obtenerUsuarios()

    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email)

    if(!usuarioEncontrado){
        return {exito : false , mensaje: "email o contraseña ingreados son incorrecto"}
    }
    
    const passwordCoincide = compararPassword(password, usuarioEncontrado.password)
    
    if(!passwordCoincide){
        return{exito: false , mensaje : "email o contraseña ingresados son incorrectos"}
    }

    guardarSesion(usuarioEncontrado)

    return {exito : true , mensaje : "logueado correctamente"}
}

export function logout(){
    cerrarSesion()
    return {exito : true , mensaje: "sesion cerrada correctamente"}
}