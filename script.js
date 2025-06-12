const cursos = [
  { id: 1, nombre: "Javascript Inicial", precio: 3000 },
  { id: 2, nombre: "HTML y CSS", precio: 2500 },
  { id: 3, nombre: "React Basico", precio: 4000 },
  { id: 4, nombre: "PHP Intermedio", precio: 5500 },
];

let selecionados = [];
let total = 0;

function mostrarCursos() {
  let mensaje = "Cursos disponibles:\n";
  cursos.forEach((curso) => {
    mensaje += `${curso.id}, ${curso.nombre} - $${curso.precio}\n`;
  });
  alert(mensaje);
}

function registrarCurso(listaCursos, listaSelecionados, totalActual) {
  const opcion = parseInt(prompt("Ingrese el numero del curso:\n1. Javascritp Inicial\n2. HTML y CSS\n3. React Basico\n4. PHP Intermedio"));

  let cursoElegido; 

  switch(opcion) {
    case 1: 
    case 2: 
    case 3:
    case 4:
      cursoElegido = listaCursos.find(curso => curso.id === opcion);
      break;
      default:
        alert("Opcion invalida. Intente nuevamente.");
        return totalActual;
  }
  listaSelecionados.push(cursoElegido);
  totalActual += cursoElegido.precio;
  alert(`!Felicidades, te inscribiste a"${cursoElegido.nombre}". \nTotal acumulado: $${totalActual}` );
  return totalActual;
}

