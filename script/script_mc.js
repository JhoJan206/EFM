// Calculador de velocidad lineal
function calcularVelocidadLineal(event) {
    event.preventDefault();
    const velocidadAngular = parseFloat(document.getElementById("velocidadAngular").value);
    const radio = parseFloat(document.getElementById("radio").value);
  
    if (isNaN(velocidadAngular) || isNaN(radio)) {
      alert("Por favor, ingrese valores numéricos válidos.");
      return;
    }
  
    const velocidadLineal = velocidadAngular * radio;
  
    const resultadosDiv = document.getElementById("resultadosVelocidadLineal");
    resultadosDiv.innerHTML = `
      <h3>Resultados:</h3>
      <p>La velocidad lineal (v) es: ${velocidadLineal.toFixed(2)} m/s.</p>
    `;
  }
  
  // Calculador de velocidad angular
  function calcularVelocidadAngular(event) {
    event.preventDefault();
    const periodo = parseFloat(document.getElementById("periodo").value);
  
    if (isNaN(periodo)) {
      alert("Por favor, ingrese un valor numérico válido para el periodo (T).");
      return;
    }
  
    const velocidadAngular = 2 * Math.PI / periodo;
  
    const resultadosDiv = document.getElementById("resultadosVelocidadAngular");
    resultadosDiv.innerHTML = `
      <h3>Resultados:</h3>
      <p>La velocidad angular (ω) es: ${velocidadAngular.toFixed(2)} rad/s.</p>
    `;
  }
  
  // Calculador de periodo
  function calcularPeriodo(event) {
    event.preventDefault();
    const velocidadAngular_periodo = parseFloat(document.getElementById("velocidadAngular_periodo").value);
  
    if (isNaN(velocidadAngular_periodo)) {
      alert("Por favor, ingrese un valor numérico válido para la velocidad angular (ω).");
      return;
    }
  
    const periodo = 2 * Math.PI / velocidadAngular_periodo;
  
    const resultadosDiv = document.getElementById("resultadosPeriodo");
    resultadosDiv.innerHTML = `
      <h3>Resultados:</h3>
      <p>El periodo (T) es: ${periodo.toFixed(2)} segundos.</p>
    `;
  }
  
  // Calculador de frecuencia
  function calcularFrecuencia(event) {
    event.preventDefault();
    const periodo_frecuencia = parseFloat(document.getElementById("periodo_frecuencia").value);
  
    if (isNaN(periodo_frecuencia)) {
      alert("Por favor, ingrese un valor numérico válido para el periodo (T).");
      return;
    }
  
    const frecuencia = 1 / periodo_frecuencia;
  
    const resultadosDiv = document.getElementById("resultadosFrecuencia");
    resultadosDiv.innerHTML = `
      <h3>Resultados:</h3>
      <p>La frecuencia (f) es: ${frecuencia.toFixed(2)} Hz.</p>
    `;
  }
  
  // Calculador de aceleración centrípeta
  function calcularAceleracionCentripeta(event) {
    event.preventDefault();
    const velocidadAngular_ac = parseFloat(document.getElementById("velocidadAngular_ac").value);
    const radio_ac = parseFloat(document.getElementById("radio_ac").value);
  
    if (isNaN(velocidadAngular_ac) || isNaN(radio_ac)) {
      alert("Por favor, ingrese valores numéricos válidos.");
      return;
    }
  
    const aceleracionCentripeta = Math.pow(velocidadAngular_ac, 2) * radio_ac;
  
    const resultadosDiv = document.getElementById("resultadosAceleracionCentripeta");
    resultadosDiv.innerHTML = `
      <h3>Resultados:</h3>
      <p>La aceleración centrípeta (ac) es: ${aceleracionCentripeta.toFixed(2)} m/s².</p>
    `;
  }
  