import {
  manejarSubmitRegistro,
  manejarSubmitLogin,
  manejarClickLogout,
  actualizarUI,
} from "./ui.js";

const formRegistro = document.getElementById("form-registro");

formRegistro.addEventListener("submit", manejarSubmitRegistro);

const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", manejarSubmitLogin);

const btnCerrarSesion = document.getElementById("cerrar-sesion");

btnCerrarSesion.addEventListener("click", manejarClickLogout);

actualizarUI();
