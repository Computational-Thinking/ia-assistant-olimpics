function readInputFile(inputFile) {
  const fs = require('fs');
  const input = fs.readFileSync(inputFile, 'utf8');
  const lines = input.split('\n').map(line => line.trim());
  const [n, p] = lines[0].split(' ').map(Number);
  const edges = lines.slice(1).map(line => line.split(' ').map(Number));

  console.log(`n = ${n}, p = ${p}, edges = ${JSON.stringify(edges)}}`)

  const graph = computeGraph(n, edges);

  console.log(`graph = ${JSON.stringify(graph)}`);

  return graph;
}

function computeGraph(n, edges) {
    const Neighbors = Object.create(null);
    for (let i = 0; i < n; i++) {
        Neighbors[i] = [];
    }
    for (const [i, j] of edges) {
      Neighbors[i].push(j) ;
      Neighbors[j].push(i);
    }
    return Neighbors;
  }
  
function minimumDominatingSet(graph) {
  const nodes = new Set(Object.keys(graph));
  //console.log(nodes);
  const dominatingSet = new Set();

  while (nodes.size > 0) {
    let bestNode = null;
    let bestCount = -1;

    for (const node of new Set(nodes)) {
      const neighbors = graph[node];
      const uncoveredNeighbors = neighbors.filter(n => !dominatingSet.has(n));

      if (uncoveredNeighbors.length > bestCount) {
        bestNode = node;
        bestCount = uncoveredNeighbors.length;
      }
    }

    //console.log(`Adding node ${bestNode} to the dominating set. Dominated: ${bestCount}`);
    dominatingSet.add(bestNode);

    //console.log(`Removing node ${bestNode} and its neighbors from the graph`);
    nodes.delete(bestNode);
    // Added by human. Missed this line
    for (const neighbor of graph[bestNode]) {
      //console.log(`Removing node ${neighbor} from the graph`);
      nodes.delete(String(neighbor));
    }
    //console.log(nodes);
  }

  return dominatingSet;
}

const inputFile = process.argv[2] || 'input.txt'; // Nombre del archivo de entrada
const graph = readInputFile(inputFile);

console.log(minimumDominatingSet(graph)); 

