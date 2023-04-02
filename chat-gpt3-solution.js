/* PREGUNTA:
Puedes ayudarme a escribir un programa JavaScript que resuelva el siguiente problema:

Se tiene un archipiélago que está constituido por "n" islas, algunas de las cuales están conectadas por puentes bi-direccionales. Se sabe que hay como mucho un camino entre cada par de islas.

Se quieren construir hospitales de manera que nadie tenga que cruzar más de un puente para llegar a un hospital. El programa debe computar el mínimo número de hospitales necesarios.

Paso a describir como es la entrada.

La entrada consiste en un fichero con 

1. En la  primera línea, el número de islas "n" y el número de puentes "p" separados por un blanco. Por ejemplo: "10 6" indica que hay n=10 islas y p=6 puentes.
2. En las siguientes "p" líneas del fichero de entrada aparecen pares de números "x y", con "x" distinto de "y" indicando el par de islas conectadas por cada puente. Una línea como "0 1" indica que la isla "0" está conectada mediante un puente con la isla "1". 
3. Se supone que n es menor o igual que 10000, que las islas se numeran desde 0 y que no hay más de un puente entre dos islas.

Sigue un ejemplo completo de entrada con 10 islas y 6 puentes:

10 6
0 1
3 4
4 5
6 7
7 8
8 9

Para este ejemplo la solución es "5"

Pongo otro ejemplo de entrada con 9 islas y 8 puentes:

9 8
0 4
7 0
3 5
8 6
1 6
2 8
4 1
5 1

Para este segundo ejemplo la solución es "3"

Un tercer ejemplo de entrada con 5 islas y 4 puentes:

5 4
0 2
2 1
1 3
1 4

el número mínimo de hospitales es "2"
*/
/* RESPUESTA:
Claro que sí! Una posible solución al problema es utilizar el algoritmo de coloración de grafos conocido como "Greedy Coloring". La idea es ir asignando un color a cada isla de tal forma que islas adyacentes no tengan el mismo color. El número mínimo de colores necesarios para colorear todas las islas es entonces igual al número mínimo de hospitales necesarios.

Aquí te dejo el código en JavaScript para resolver el problema utilizando este enfoque:
*/
// Función para leer la entrada desde un archivo
function readInputFile(inputFile) {
  const fs = require('fs');
  const input = fs.readFileSync(inputFile, 'utf8');
  const lines = input.split('\n').map(line => line.trim());
  const [n, p] = lines[0].split(' ').map(Number);
  const edges = lines.slice(1).map(line => line.split(' ').map(Number));
  console.log(`n = ${n}, p = ${p}, edges = ${JSON.stringify(edges)}`)
  return [n, p, edges];
}

// Función para obtener el número mínimo de hospitales
function getMinHospitals(n, edges) {
  const colors = new Array(n).fill(-1); // Array para almacenar los colores asignados a cada isla
  let numHospitals = 0; // Contador de hospitales

  // Función auxiliar para asignar un color a una isla y sus vecinas
  function colorIsland(island, color) {
    colors[island] = color;
    for (const [i, j] of edges) {
      if (i === island && colors[j] === -1) {
        colorIsland(j, 1 - color); // Asignar un color distinto al de la isla adyacente
      } else if (j === island && colors[i] === -1) {
        colorIsland(i, 1 - color); // Asignar un color distinto al de la isla adyacente
      }
    }
  }

  // Recorrer todas las islas y asignar colores si aún no se ha hecho
  for (let i = 0; i < n; i++) {
    if (colors[i] === -1) {
      colorIsland(i, 0); // Asignar el color "0" a la isla actual y sus vecinas
      numHospitals++; // Añadir un hospital por cada conjunto de islas con el mismo color
    }
  }

  return numHospitals;
}

// Ejemplo de uso
const inputFile = 'input.txt'; // Nombre del archivo de entrada
const [n, p, edges] = readInputFile(inputFile);
const minHospitals = getMinHospitals(n, edges);
console.log(minHospitals);
