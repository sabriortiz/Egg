// Espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtén la referencia al elemento <p> con el id "mensaje"
    let mensajeElement = document.getElementById("mensaje");
  
    // Cambia el contenido del elemento <p>
    mensajeElement.textContent = "El enlace entre HTML y JavaScript en el header ha sido exitoso!";

  console.log("¡Hola! Estas imprimiendo un mensaje por consola");
  var nombre = prompt("Por favor, ingresa tu nombre:");
  console.log(nombre + " este es un mensaje");
  // esto es aparte del curso
// document.write(nombre)
  let cartelSaludo = document.getElementById("saludo");
  cartelSaludo.textContent = "Bienvenido " + nombre;
});
