/**
 * Calcula los puntos de una respuesta según el tiempo transcurrido.
 * 
 * @param {boolean} esCorrecta - Si la respuesta fue acertada o no.
 * @param {number} segundos - El tiempo que tardó en responder (en segundos).
 * @returns {number} Los puntos asignados (10, 7, 5, 3 o 0).
 */
function calcularPuntos(esCorrecta, segundos) {
  // Si respondió mal o tardó más de 90 segundos, no suma puntos
  if (!esCorrecta || segundos > 90) {
    return 0;
  }

  // De 0 a 10 segundos
  if (segundos <= 10) {
    return 10;
  }
  
  // De 11 a 30 segundos
  if (segundos <= 30) {
    return 7;
  }
  
  // De 31 a 60 segundos
  if (segundos <= 60) {
    return 5;
  }
  
  // De 61 a 90 segundos
  if (segundos <= 90) {
    return 3;
  }

  return 0;
}

module.exports = { calcularPuntos };
