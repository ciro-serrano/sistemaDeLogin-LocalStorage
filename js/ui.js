import { registrarUsuario, iniciarSesion, logout } from "./acciones.js";
import { obtenerSesion } from "./data.js";
export function manejarSubmitRegistro(event) {
  event.preventDefault();

  const email = document.getElementById("email-registro").value;
  const password = document.getElementById("password-registro").value;

  const res = registrarUsuario(email, password);

  mostrarNotificacion(res.exito, res.mensaje)
}

export function manejarSubmitLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;

  const res = iniciarSesion(email, password);

  mostrarNotificacion(res.exito, res.mensaje)
}

export function manejarClickLogout() {
  const res = logout();
  mostrarNotificacion(res.exito, res.mensaje)
  actualizarUI();
}

export function actualizarUI() {
  const res = obtenerSesion();
  const sesion = document.getElementById("zona-sesion");
  const formRegistro = document.getElementById("form-registro");
  const formLogin = document.getElementById("form-login");

  if (res) {
    sesion.style.display = "block";
    const usuarioActivo = document.getElementById("usuario-activo");
    usuarioActivo.textContent = res.email;

    formRegistro.style.display = "none";
    formLogin.style.display = "none";
  } else {
    sesion.style.display = "none";
    formRegistro.style.display = "block";
    formLogin.style.display = "block";
  }
}

//toastify Libreria

function mostrarNotificacion(exito, mensaje) {
  let background = null;
  if (exito) {
    background = "linear-gradient(to right, #00b09b, #96c93d)";
  } else {
    background = "linear-gradient(to right,rgb(187, 97, 2),rgb(201, 61, 61))";
  }
  Toastify({
    text: mensaje,
    duration: 2000,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "center", 
    stopOnFocus: true, 
    style: {
      background: background,
    },
  }).showToast();
}
