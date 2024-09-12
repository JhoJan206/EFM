function mostrarSolucion(numeroEjercicio) {
  var solucion = document.getElementById(`solucion${numeroEjercicio}`);
  if (solucion.style.display === "none") {
    solucion.style.display = "block";
  } else {
    solucion.style.display = "none";
  }
}