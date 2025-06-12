// // // Declaracion de variables

// // // let nombre = "Martin";
// // // let edad = 27;
// // // let ciudad = "Buenos aires";

// // // console.log(nombre);
// // // console.log(edad);
// // // console.log(ciudad);


// // // Ejercicios de suma

// // // let numero1 = 10;
// // // let numero2 = 15;
// // // let numero3 = 35
// // // let suma = numero1 + numero2 + numero3 ;

// // // console.log("la suma es:", suma);



// // // actualizar variables

// // // let contador = 0;
// // // contador = contador + 1;
// // // contador += 1;
// // // contador++;

// // // console.log("contador:", contador);



// // // ejercicios de intercambio de valores

// // // let a = 5;
// // // let b = 10;

// // // let temp = a;
// // // a = b;
// // // b = temp;

// // // console.log("a:", a); //tiene que ser 10
// // // console.log("b:", b); //tiene que ser 5

// // // Concatenar texto
// // // crea variables nombre y apellido y luego crea una variable nombreCompleto que contenga ambos

// // // let nombre = "Martin";
// // // let apellido = "Fonseca";
// // // let nombreCompleto = nombre + " " + apellido;

// // // console.log("Nombre Completo:", nombreCompleto);


// // // Vamos con los tipos de datos

// // // String: Tipo de datos en el que son textos si se guardan en ""
// // let nombre = "Martin"

// // // Number: Tipo de datos que son numeros, invluyen enteros y decimales
// // let edad = 27;
// // let pl = 3.14;

// // // Boolean: Tipo de datos en el que estos pueden ser verdaderos "True" o falsos "False"
// // let esMayorDeEdad = true;
// // let esMenordeEdad = false;

// // // undefined: Son variables que se declaran sin valor
// // let resultado;
// // console.log(resultado); // Al no tener un valor automaticamente da como underfined

// // // Null: representa "ningun valor" intencionalmente
// // let datos = null;

// // // objet: Es un tipo de dato que almacena datos complejos que te permite almacenar colecciones de datos y entidades mas comolejas meduante pares clave-valor
// // let persona = {
// //     nombre: "Martin",
// //     edad: "27"
// // };

// // // array: Un array (arreglo) es un tipo de dato especial que permite almacenar una lista ordenada de valores, los valores pueden ser de cualquier tipo: numeros, strings, objetos, funciones, etc
// // let frutas = ["manzana", "banana", "pera"];
// // console.log(frutas)

// // Ejercjcios para identificar los tipos de datos
// // let texto = "hola";                //string
// // let numero = 42;                   //number
// // let booleano = false;              //boolean
// // let sinDeFinir;                    //undefined
// // let nulo = null;                   //object
// // let arreglo = [1, 2, 3];           //object
// // let objeto = {clave: "valor"};     //object

// // console.log(typeof texto);
// // console.log(typeof nombre);
// // console.log(typeof booleano);
// // console.log(typeof sinDeFinir);
// // console.log(typeof nulo);
// // console.log(typeof arreglo);
// // console.log(typeof objeto);

// // Cambiar tipo de una variable de texto a numero y viceversa
// let numero = 100;
// let numeroComoTexto = String(numero);

// let texto = "123";
// let textoComoNumero = Number(texto);

// console.log(typeof numeroComoTexto);        //string
// console.log(typeof textoComoNumero);        //number


// // Condicionales: Aquellas acciones que se realizan dependiendo de que si un codigo es verdaderio o falso
//  if (condicion) {
//     // Codigo que se aplica si es la condicion correcta
//  }

//  if (condicion) {
//     // codigo que se aplica si es la condicion verdadera
//      } else {
//         // codigo que se aplica si la condicion es falsa
//     }

// if (condicion) {
//     // codigo que se aplica si es la condicion verdadera
// } else if (condicion2) {
//      // codigo que se aplica si la condicion2 es verdadera
// } else {
//      // codigo que se aplica si ninguna de las condiciones es verdadera
// }

// let calificacion = 75;

// if (calificacion >= 90) {
//     console.log("Excelente");
// } else if (calificacion >=70) {
//     console.log("Bueno");
// } else {
//     console.log("Necesitas estudiar mas");
// }


//  for (let i = 0; i <101; i++) {
//     console.log('numero: ' + i );
//  }

// ciclos por repeticion
// for (let 1 = 0; i < 5; i++)


// ciclos por condicionales

// funcion sirve para agrupar bloques de codigo que realizan tareas especificas facilitando la organizacion en el codigo
// ejemplo

//  function saludar (nombre, edad) {
//      console.log("Hola " + nombre);
//      console.log("Tu edad es " + edad + "estas viejo jubilate")
//  }
//  saludar("Martin", 27);


// function agregarLibro(titulo, autor) {
//     return { titulo, autor};
// }

// function mostrarDetalleLibro(libro) {
//     console.log(`Titulo: ${libro.titulo}, Autor: ${libro.autor}`);
// }

// let libro1 = agregarLibro ("1984", "George Owell");

// mostrarDetalleLibro(libro1)

// =========================================================================================================

// Método	Descripción
// push()	Agrega un elemento al final
// pop()	Elimina el último elemento
// shift()	Elimina el primer elemento
// unshift()	Agrega un elemento al inicio
// length	Devuelve la cantidad de elementos
// forEach()	Ejecuta una función para cada elemento
// map()	Crea un nuevo array con los resultados de una función
// filter()	Crea un nuevo array con los elementos que cumplan una condición
// find()	Devuelve el primer elemento que cumpla una condición
// includes()	Verifica si un valor existe en el array
// indexOf()	Devuelve el índice de un elemento (o -1 si no existe)


// Arrays permiten almacenar diferente tipos de datos, sean trings, numericos o booleanos
// Su forma de organizacion comienza desde el 0 y de esta manera se suele llamar por medio de console

// const array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array)

// const arrayString = ["Hola", "Letra", "Numeros", "alfabeto", "frutas", "condicionales"]
// console.log(arrayString[4]) //Colocando las llaves y el numero de la ubicacion de la variable es como se suelen llamar en consola

// const boolean = [true, false, true, false, true, false];
// console.log(boolean)

// const arrayMixto = [1, 2, 3, "hola", "letra", "numero", true, false, true, false]
// console.log(arrayMixto)

// Con la propiedad (for) crear bucles que nos ayudara a recorrer un array
// Con la propiedad (length) podemos acceder facilmente a una propiedad del array sin tener que realizar codigos de mas

// const numeros = [ 10, 20, 30, 40, 50, 60];
// for (let i = 0; i < numeros.length; i++) {  // Con for se inicializa el bucle empezando desde el valor 0 y con length se recorre el array desde el 0 al 4 que son las variables dentro del array
//     console.log(numeros[i]);
// }

// En el array existen varios metodos que nos permiten modificar nuestro array
// existen 4 que son Push, Pop, Shift y Unshift

// Push: El metodo push añade uno o mas elementos de un array, este metodo pude modificar el array original y devuelve la nueva longitud del arrar
// Ejemplo del metodo push:
// let frutas = ['manzana', 'pera'];
// frutas.push('naranjas'); //El push añade un elemento al array y al momento de llamarlo en consola se agrefa al array
// console.log(frutas);

// Pop: El metodo pop elimina el ultimo elemento del arrary y lo devuelve, cambia la longitud del array
// ejemplo del metodo pop
// let frutas = ['manzanas', 'pera', 'bananas', 'naranjas'];
// let frutaEliminada = frutas.pop(); //Creamos una variable con el elemento que se va eliminar que en este caso es 'naranjas' ya que es el ultimo en nuestro array
// console.log(frutaEliminada); //llamamos por consola el elemento que eliminamos con la variable nueva
// console.log(frutas) //Llamamos al array sin el ultimo elemento que eliminamos con el pop


// Shitf: el metodo shift elimina el primer elemento del array y lo devuelve desplazando todos los elementos restantes a una posicion inferior.
// Ejemplo del metodo shift

// let frutas = ['manzanas',  'bananas', 'naranjas'];
// let primeraFruta = frutas.shift(); //creamos la variable para definir el metodo shift que eliminara el primer elemento
// console.log(primeraFruta); // llamamos por consola la variable que creamos para eliminar el primer elemento
// console.log(frutas); //llamamos el array con el primer elemento eliminado y los demas elementos desplazados

// Unshift: El metodo unshift añade uno o mas elementos al inicio del array y lo devuelve a la longiud del array

// let frutas = ['bananas', 'naranja']; //Se define el array con dos elementos
// frutas.unshift('manzanas'); //se llama el array agregando el unshift y se agrega el valor del nuevo elemento
// console.log(frutas); //Se llama en consola el array con el nuevo elemento agregado

// Existen dos metodos de busquedas en el array que son 'indexof' y 'include' que nos permite la busqueda precisa de elementos

// IndexOf: Devueve el primer indice en el que se puede encontrar un elemento en el array, es util para localizar la posicion exacta de un elemento y es sensible al tipo de dato lo que puede diferecianr entre string, numeros y los demaas

// let nombres = ['Ana', 'Juan', 'Carlos', 'Marta'];
// let indice = nombres.indexOf('Carlos') //Creamos una variable "indice" en el cual le agrebamos el valor el nombre del array y le colocamos el metodo para que busque el elemento que deseamos
// console.log(indice); // Al llamar a consola colocamos la variable que creamos en el parametro que nos dara de resultado la busqueda que hemos realizado

//Include: Este metodo determina si el aray contiene un determinado elemento devolviendo true o false, este metodo no proporciona la posicion del elemento pero nos confima su existencia, lo que es ideal para condiones y verificaciones rapidas

// let frutas = ['manzana', 'naranja', 'banana'];
// let contiene = frutas.includes('naranja'); // Creamos una variable para validar nuestro array y le damos como valor un elemento de nuestro array
// console.log(contiene); //La salida nos dara true ya que estamos verificando si en el array existe o no el elemento "naranja"

//Existen dos metodos para ordenar el array que son el Reverse y el Sort

//Sort: Nos permite organizar nuestro array, puede ser de mayor a menor o de menor a mayor, nos organiza el codigo mediante una funcion flecha que puede hacer la comparativas entre elementos y nos organiza limpiamente el codigo

// let numero = [1,50,200,40,2];

// numero.sort((a,b)=>a-b);
// console.log(numero)


// let palabras = ["Auto", "Programacion", "Zorro", "Bananas"]
// palabras.sort((a,b)=> a.localeCompare(b)); //Con localeCompare lo que hacemos es que la palabras mayusculas y minusculas se puedan comparar devolviendo commo resultado un orden en el array
// console.log(palabras);

// // Al cambiar de mayuscula a minuscula cambia la posicion de los elementos porque las palabras con mayuscula se expresan de primero y despues con la minusculas

//Reverse: Con este metodo se invierte el orden de los elementos de un array

// let numero = [1,50,200,40,2];

// numero.reverse();   //Agregamos a nuestro array el metodo reverse, tambien funciona con tipos de entrada strings
// console.log(numero);

// Metodo join: Es una herramienta que nos permite convertir un array en una cadena de texto, permitiendo especificar un separador entre los elementos, pueden ser coma (,) o ('')
//Ejemplo con coma(default)
// let colores = ['Rojo', 'Verde', 'Azul'];
// let resultado = colores.join(); //Al no agregarle un separador automaticamente se concatenan los elementos
// console.log(resultado); //resultado "Rojo, Verde, Azul"

// //Ejemplo con separador de espacio
// let nombres = ['Ana', 'Juan', 'Carlos'];
// let listaNombres = nombres.join(' ');
// console.log(listaNombres); //resultado "Ana Juan Carlos"

// //Ejemplo con guion
// let elementos = ['Hidrogeno', 'Oxigeno', 'Carbono'];
// let formula = elementos.join('-');
// console.log(formula); // resultado "Hidrogeno-Oxigeno-Carbono"

// // Ejemplo con separador vacio
// let letras = ['J', 'A', 'V', 'A'];
// let palabra = letras.join('');
// console.log(palabra);


// Objetos literales es una coleccion de pares de clave-valor encerrados entre llaves{}. Cada clave esta separa de su valor correspondiente por dos puntos (:) y los pares de clave-valor estan separados ente si por comas
// const persona = {
//     nombre: 'Juam',
//     apellid: 'fernandez',
//     edad: 30,
//     ciudad: 'Buenos Aires'
// };

// Método / Propiedad	Descripción`
// objeto.propiedad	Accede a una propiedad
// objeto['propiedad']	Otra forma de acceder
// Object.keys(obj)	Devuelve un array con las claves del objeto
// Object.values(obj)	Devuelve un array con los valores
// Object.entries(obj)	Devuelve un array de pares clave-valor
// hasOwnProperty()	Verifica si una propiedad existe en el objeto

//A diferencia del array que son colecciones indexadas de elementos, los objetos literales no mantienen un orden en especifico de sus elementos y no se accede a sus valores mediante indices numericos, en los arrays el acceso a los elemenos se realiza a traves de indices comenzando desde 0 mientra que en los objetos el acceso se realiza a traves de claves indefinidas

// Array
// const colores = ['Rojo', 'Verde', 'Azul'];
// console.log(colores[0]); //Resultado: Accede al primer elemento del array "rojo"

// // Objeto literal
// const semaforo = {
//     rojo: 'Detenerse',
//     verde: 'Avanza',
//     amarillo: 'Cuidado'
// };
// console.log(semaforo.rojo); //Resultado: Accede al valor clave 'Rojo': "Detenerse"

//Array de objetos

// let arrayObjetos = [];

// arrayObjetos.push ({
//     id:1 , nombre: 'Producto 1'
// });
// arrayObjetos.push ({
//     id:1 , nombre: 'Producto 1'
// });
// arrayObjetos.push ({
//     id:1 , nombre: 'Producto 1'
// });
// for (let objeto of arrayObjetos) {
//     console.log(objeto.nombre)
// };

// Manipulacion de arrays y objetos
// Los metodos de array como push, sort y otros se pueden utilizar eficientemente en arrays que contienen objetos literales

// Push: para agregar nuevos objetos a un array, se utiliza el metodo push
// const usuarios = [];
// usuarios.push({nombre: 'Ana', edad: 25});
// usuarios.push({nombre: 'Luis', edad:30});

// console.log(usuarios); //Resultado: [{nombre: 'Ana', edad: 25,}, {nombre: 'Luis', edad: 30}]

//Sort: el metodo sort puede ser personalizado para ordenar arrays de objetos basandose en algunas claves especificas de los objetos
// usuarios.sort((a,b)=> a.edad - b.edad);
// console.log(usuarios);
// //Resultado: [{ nombre: "Ana", edad: 25 }, { nombre: "Luis", edad: 30 }]

// filter: Para filtrar elementos de un array basandose en una condicion, se usa filter, que es muy util para obtener subconjuntos de un array basados en propiedades de los objetos
// const mayoresDe25 = usuarios.filter(usuarios => usuarios,edad > 25);
// console.log(mayoresDe25);
// // Resultado: [{nombre: 'Luis', edad:30}]

// Find: para encontrar el primer objeto que cumpla con una condicion especifica
// const luis = usuarios.find(usuarios => usuarios.nombre === 'Luis')
// console.log(luis);
// // Resultado: {nombre: 'Luis', edad:30}