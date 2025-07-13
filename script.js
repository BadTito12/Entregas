class Curso {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const cursos = [
  new Curso(1, "Pastelería Inicial", 3000),
  new Curso(2, "Cocina Básica", 2500),
  new Curso(3, "Panadería Básica", 4400),
  new Curso(4, "Bartender", 6000),
  new Curso(5, "Cafetería", 5500),
];

// Limpiar localStorage cada vez que se refresque la página
localStorage.removeItem("inscripciones");

// Iniciar array vacío
let inscripciones = [];

const form = document.getElementById("formulario");
const resumen = document.getElementById("resumen");

function guardarEnStorage(nombre, cursosSeleccionados) {
  cursosSeleccionados.forEach((curso) => {
    const nuevaInscripcion = {
      nombre,
      curso: curso.nombre,
      precio: curso.precio,
    };
    inscripciones.push(nuevaInscripcion);
  });

  localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
}

function renderizarResumen() {
  resumen.innerHTML = "<h2> Inscripciones:</2>";
  let total = 0;

  inscripciones.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = `${item.nombre} - ${item.curso} ($${item.precio})`;
    resumen.appendChild(div);
    total += item.precio;
  });

  const totalDiv = document.createElement("div");
  totalDiv.innerHTML = `
<hr>
<p><strong>Total a papar:</strong> $${total}</p>
<p><strong>!Gracias por su compra!</strong></p>
`;
  resumen.appendChild(totalDiv);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();

  // Obtener todos los cursos seleccionados del select múltiple
  const opcionesSeleccionadas = Array.from(
    document.getElementById("curso").selectedOptions
  );
  const idsCursos = opcionesSeleccionadas.map((option) =>
    parseInt(option.value)
  );

  const cursosSeleccionados = cursos.filter((curso) =>
    idsCursos.includes(curso.id)
  );

  if (!nombre || cursosSeleccionados.length === 0) {
    alert("Por favor completá tu nombre y seleccioná al menos un curso.");
    return;
  }

  guardarEnStorage(nombre, cursosSeleccionados);
  renderizarResumen();
  form.reset();
});

// No cargamos nada en renderizarResumen porque borramos todo al recargar
