// Formulario
var formulario = document.getElementById("form")

// Botón enviar
var enviarConsulta = document.getElementById("enviarConsulta")

// Botón eliminar
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"

// Función de envío de consulta
enviarConsulta.addEventListener("click", function (event) {

  event.preventDefault();

  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  } else {
    n.classList.remove("error");
  }

  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  } else {
    e.classList.remove("error");
  }

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    console.log("pasa");
    agregarInvitado(nombre, edad, nacionalidad);
  } else {
    console.log("No paso");
  }
});

// Función de agregar invitado
function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)


  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var spanDesc = document.createElement("span")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    spanDesc.textContent = valor

    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(spanDesc)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  var corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}