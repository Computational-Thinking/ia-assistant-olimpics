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

/*
* **Q:** How can I solve the resource allocation problem in a graph?

Assume I have a graph of nodes  and edges and I have to allocate resources (say hospitals for instance) in a subset of the nodes in order guarantee that any node is served from a resource not far than 1 edge.

* **A:** The resource allocation problem in a graph with the requirement that any node should be served by a resource not far than 1 edge can be solved using graph coloring algorithms.

The first step is to identify the subset of nodes where resources (hospitals) need to be allocated. Once the subset of nodes is identified, a graph coloring algorithm can be used to allocate resources in such a way that no two adjacent nodes have the same color (i.e., no two nodes that share an edge have the same resource). This ensures that each node is served by a resource not far than 1 edge.

One such algorithm is the greedy graph coloring algorithm. The algorithm assigns the first color to the first node and then iterates through the remaining nodes, assigning the lowest possible color that has not been assigned to any of its neighbors. The algorithm continues until all nodes are assigned a color.

Another algorithm that can be used is the backtracking algorithm. This algorithm recursively assigns colors to nodes and backtracks if a node cannot be assigned a color without violating the 1-edge constraint.

Both algorithms have their pros and cons, and the choice of algorithm will depend on the size and complexity of the graph. However, both algorithms are effective for solving the resource allocation problem in a graph with the 1-edge constraint.
*/

// Función para leer la entrada desde un archivo
function readInputFile(inputFile) {
  const fs = require('fs');
  const input = fs.readFileSync(inputFile, 'utf8');
  const lines = input.split('\n').map(line => line.trim());
  const [n, p] = lines[0].split(' ').map(Number);
  const edges = lines.slice(1).map(line => line.split(' ').map(Number));
  // added by human
  const numNeighbors = computeNumNeighbors(n, edges);

  console.log(`n = ${n}, p = ${p}, edges = ${JSON.stringify(edges)} numNeighbors = ${JSON.stringify(numNeighbors)}`)
  return [n, p, edges, numNeighbors];
}

function computeNumNeighbors(n, edges) {
  const numNeighbors = new Array(n).fill(0);
  for (const [i, j] of edges) {
    numNeighbors[i]++;
    numNeighbors[j]++;
  }
  return numNeighbors;
}

// Función para obtener el número mínimo de hospitales
function getHospitals(n, edges, numNeighbors) {
  const colors = new Array(n).fill(-1); // Array para almacenar los colores asignados a cada isla
  let numComponents = 0; // Contador de componentes

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
  // sort the indices by the number of neighbors in descending order
  let nodes = [...Array(n).keys()].sort((a, b) => numNeighbors[b] - numNeighbors[a])
  nodes.forEach(i => {
    if (colors[i] === -1) {
      colorIsland(i, 0); // Asignar el color "0" a la isla actual y sus vecinas
      numComponents++; // Añadir una componente
      // added by human
      console.log(`Coloring island ${i} with color 0. numComponents=${numComponents}`)
    }  
  })

  // added by human
  console.log(`colors=${JSON.stringify(colors)}`);

  // Modified by human
  return [...colors.keys()].filter(i => colors[i] == 0);
}

// Ejemplo de uso
const inputFile = process.argv[2] || 'input.txt'; // Nombre del archivo de entrada
const [n, p, edges, numNeighbors] = readInputFile(inputFile);
const hospitals = getHospitals(n, edges, numNeighbors);
console.log(`Hospitals: ${JSON.stringify(hospitals)}, numHospitals: ${hospitals.length}`);
