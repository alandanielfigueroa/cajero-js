function iniciarSesion() {
  let usuarioIntento = document.getElementById(`usuario`).value;
  let contrasenaIntento = document.getElementById(`contrasena`).value;
  let usuarioActual = null;
  for (let i = 0; i < usuarios.length; i++) {
    if (
      usuarios[i].usuario === usuarioIntento &&
      usuarios[i].contrasena === contrasenaIntento
    ) {
      usuarioActual = usuarios[i];
      break;
    }
  }

  if (usuarioActual) {
    MostrarMensaje(`Bienvenido`, `Green`);
    window.location.href = `MenuOperaciones.html`;
  } else {
    MostrarMensaje(`Error dato incorrecto`, `red`);
  }
}
