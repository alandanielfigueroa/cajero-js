let saldoInicial = 0;
let saldoUsuarios = [];
function SeleccionarOperacion() {
  let operacionSeleccionada = document.getElementById(`operaciones`).value;
  switch (operacionSeleccionada) {
    case `deposito`:
      window.location.href = `deposito.html`;
      function Depositar() {
        let deposito = Number(document.getElementById(`deposito`).value);
      }
      break;
    case `retiro`:
      window.location.href = `retiro.html`;

      break;
    case `consulta`:
      window.location.href = `consulta.html`;
      break;
  }
}
