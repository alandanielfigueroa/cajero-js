class Registro {
  constructor(usuario, contrasena, nombreUsuario, apellidoUsuario, nacimiento) {
    this.usuario = usuario;
    this.contrasena = contrasena;
    this.nombreUsuario = nombreUsuario;
    this.apellidoUsuario = apellidoUsuario;
    this.nacimiento = nacimiento;
  }
}
window.onload = function () {
  cargarUsuario();
};
let usuarios = [];
function Registrar() {
  let usuario = document.getElementById(`usuario`).value;
  let contrasena = document.getElementById(`contrasena`).value;
  let nombreUsuario = document.getElementById(`nombreUsuario`).value;
  let apellidoUsuario = document.getElementById(`apellidoUsuario`).value;
  let nacimiento = document.getElementById(`nacimiento`).value;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuario === usuarios[i].usuario) {
      MostrarMensaje(`Usuario existente`, 'red');
      return;
    }
    window.location.href = `MenuPrincipal.html`;
  }
  Limpiar();
  let nuevoUsuario = new Registro(
    usuario,
    contrasena,
    nombreUsuario,
    apellidoUsuario,
    nacimiento,
  );
  usuarios.push(nuevoUsuario);

  guardarUsuarios();
  MostrarMensaje(`Usuario creado correctamente`, `green`);
  setTimeout(() => {}, 2000);
}

function Limpiar() {
  document.getElementById(`usuario`).value = '';
  document.getElementById(`contrasena`).value = '';
  document.getElementById(`nombreUsuario`).value = '';
  document.getElementById(`apellidoUsuario`).value = '';
  document.getElementById(`nacimiento`).value = '';
}
function MostrarMensaje(texto, color) {
  let mensaje = document.getElementById(`mensaje`);
  mensaje.textContent = texto;
  mensaje.style.color = color;
  setTimeout(() => {
    mensaje.textContent = '';
  }, 2000);
}
function guardarUsuarios() {
  localStorage.setItem(`usuarios`, JSON.stringify(usuarios));
}
function cargarUsuario() {
  const usuariosGuardados = localStorage.getItem('usuarios');
  if (usuariosGuardados) {
    usuarios = JSON.parse(usuariosGuardados);
  } else {
    usuarios = [];
  }
  console.log(usuarios.length);
  for (let i = 0; i < usuarios.length; i++) console.log(usuarios[i]);
}
