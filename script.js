class Curso {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const cursos = [
  new Curso(1, "Pasteleria Inicial", 3000),
  new Curso(2, "Cocina Basica", 2500),
  new Curso(3, "Panaderia Basica", 4400),
  new Curso(4, "Bartender", 6000),
  new Curso(5, "Cafeteria", 5500),
];

let inscripciones = JSON.parse(localStorage.getItem("inscripciones")) || [];

const form = document.getElementById("formulario");
const resumen = document.getElementById("resumen");

function guardarEnStorage(nombre, curso) {
  const nuevaInscripcion = {
    nombre,
    curso: curso.nombre,
    precio: curso.precio
  };
}

inscripciones.push(nuevaInscripcion);
localStorage.setItem("inscripciones", JSON.stringify(inscripciones));

function renderizarResumen() {
  resumen.innerHTML = "<h2>Inscripciones:</h2>";
  inscripciones.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = `${item.nombre} - ${item.curso} ($${item.precio})`;
    resumen.appendChild(div);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const idcursos = parseInt(document.getElementById("cursos").value);
  const cursosSeleccionado = cursos.find(cursos => cursos.id === idcursos);

  guardarEnStorage(nombre, cursosSeleccionado);
  renderizarResumen()
  form.reset();
});

renderizarResumen();