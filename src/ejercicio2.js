function calcular() {
    // Obtener los valores ingresados por el usuario
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const operacion = document.getElementById("operacion").value;
  
    let resultado;
  
    // Realizar la operación seleccionada
    switch (operacion) {
      case "suma":
        resultado = numero1 + numero2;
        break;
      case "resta":
        resultado = numero1 - numero2;
        break;
      case "multiplicacion":
        resultado = numero1 * numero2;
        break;
      case "division":
        resultado = numero1 / numero2;
        break;
      default:
        resultado = "Operación inválida";
    }
  
    // Mostrar el resultado en el DOM
    document.getElementById("resultado").textContent = "El resultado es: " + resultado;
  }