function simularMovimiento() {
    var movimiento = document.getElementById('movimiento').value;
  
    // Realizar simulación según el tipo de movimiento seleccionado
    switch (movimiento) {
      case 'rectilineo_uniforme':
        window.location.href = 'rectilineo_uniforme.html';
        break;
  
      case 'caida_libre':
        window.location.href = 'caida_libre.html';
        break;
  
      case 'rectilineo_acelerado':
        window.location.href = 'rectilineo_acelerado.html';
        break;
  
      case 'parabolico':
        window.location.href = 'parabolico.html';
        break;
  
      case 'circular':
        window.location.href = 'circular.html';
        break;
  
      default:
        console.log('Tipo de movimiento no válido');
        break;
    }
    
  }

//mostrar ejercicios
function mostrarSolucion(numeroEjercicio) {
  var solucion = document.getElementById(`solucion${numeroEjercicio}`);
  if (solucion.style.display === "none") {
    solucion.style.display = "block";
  } else {
    solucion.style.display = "none";
  }
}