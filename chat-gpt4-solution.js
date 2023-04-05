function readInputFile(inputFile) {
  const fs = require('fs');
  const input = fs.readFileSync(inputFile, 'utf8');
  const lines = input.split('\n').map(line => line.trim());
  const [n, p] = lines[0].split(' ').map(Number);
  const edges = lines.slice(1).map(line => line.split(' ').map(Number));

  console.log(`n = ${n}, p = ${p}, edges = ${JSON.stringify(edges)}}`)
  return [n, edges];
}


function minimumDominatingSet(graph) {
  const nodes = Object.keys(graph);
  const dominatingSet = new Set();

  while (nodes.length > 0) {
    let bestNode = null;
    let bestCount = -1;

    for (const node of nodes) {
      const neighbors = graph[node];
      const uncoveredNeighbors = neighbors.filter(n => !dominatingSet.has(n));

      if (uncoveredNeighbors.length > bestCount) {
        bestNode = node;
        bestCount = uncoveredNeighbors.length;
      }
    }

    dominatingSet.add(bestNode);
    nodes.splice(nodes.indexOf(bestNode), 1);
  }

  return dominatingSet;
}

const inputFile = process.argv[2] || 'input.txt'; // Nombre del archivo de entrada
const [n, edges] = readInputFile(inputFile);

console.log(minHospitals(n, edges)); // Output: 5

