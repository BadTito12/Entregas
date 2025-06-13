// Definir el array de objeto, cada curso se representa con un id
const cursos = [
  { id: 1, nombre: "JavaScript Inicial", precio: 3000 },
  { id: 2, nombre: "HTML y CSS", precio: 2500 },
  { id: 3, nombre: "React Básico", precio: 4000 },
  { id: 4, nombre: "PHP Intermedio", precio: 5500 },
];

// Se declaran variables para guardar los elementos seleccionados por el usuario
let seleccionados = [];
let total = 0;

// Funcion para mostrar los cursos disponibles usando alert
function mostrarCursos() {
  let mensaje = "Cursos disponibles:\n";
  cursos.forEach((curso) => {
    mensaje += `${curso.id}. ${curso.nombre} - $${curso.precio}\n`;
  });

  // Se muestran los cursos por alert
  alert(mensaje);
}

// Funcion que registra el curso elegido por el usuario
function registrarCurso(listaCursos, listaSeleccionados, totalActual) {
  const opcion = parseInt(
    prompt(
      "Ingrese el número del curso:\n1. JavaScript Inicial\n2. HTML y CSS\n3. React Básico\n4. PHP Intermedio"
    )
  );

  let cursoElegido;

  // Utilizo switch para verificar si la opciones son validas
  switch (opcion) {
    case 1:
    case 2:
    case 3:
    case 4:
      cursoElegido = listaCursos.find((curso) => curso.id === opcion);
      break;
    default:
      alert("Opción inválida. Intente nuevamente.");
      return totalActual;
  }

  // Agrega el curso elegido a la lista de seleccionados y actualiza el total
  listaSeleccionados.push(cursoElegido);
  totalActual += cursoElegido.precio;

  alert(
    `¡Felicidades, te inscribiste a "${cursoElegido.nombre}".\nTotal acumulado: $${totalActual}`
  );
  return totalActual;
}

// Muestra el resumen final con los cursos seleccioandos y el total a pagar
function mostrarResumen(cursosSeleccionados, totalFinal) {
  if (cursosSeleccionados.length === 0) {
    alert("No seleccionaste ningún curso.");
    return;
  }

  let resumen = "Resumen de Inscripción:\n\n";
  cursosSeleccionados.forEach((curso) => {
    resumen += `- ${curso.nombre} ($${curso.precio})\n`;
  });
  resumen += `\nTotal a pagar: $${totalFinal}`;

  alert(resumen);
}

// Funcion principal para ejecutar el simulador
function ejecutarSimulador() {
  alert("¡Bienvenido al simulador de Inscripción!");
  mostrarCursos();

  let continuar = true;

  // Bucle para permitir inscribirse en mas de un curso
  while (continuar) {
    total = registrarCurso(cursos, seleccionados, total);
    continuar = confirm("¿Desea inscribirse en otro curso?");
  }

  // Muestra el resumen final
  mostrarResumen(seleccionados, total);
}

// Llama a la funcion principal para iniciar el simulador
ejecutarSimulador();
