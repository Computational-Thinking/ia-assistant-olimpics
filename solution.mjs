import { readFileSync } from 'fs';

function readProblem(fileName) {
  try {
    const fileContent = readFileSync(fileName, 'utf8');
    const lines = fileContent.trim().split('\n');
    const [numNodes, numEdges] = lines[0].split(' ').map(Number);
    const graph = Array.from({ length: numNodes }, () => new Set());
    for (let i = 1; i <= numEdges; i++) {
      const [node1, node2] = lines[i].split(' ').map(Number);
      if (isNaN(node1) || isNaN(node2) || node1 >= numNodes || node2 >= numNodes) {
        throw new Error('Invalid graph description');
      }
      graph[node1].add(node2);
      graph[node2].add(node1);
    }
    return graph;
  } catch (err) {
    throw new Error(`Error reading file "${fileName}": ${err.message}`);
  }
}

function findDistances(graph) {
    const numNodes = graph.length;
    const distances = Array.from({ length: numNodes }, () => Array.from({ length: numNodes }, () => Infinity));
    for (let i = 0; i < numNodes; i++) {
      distances[i][i] = 0;
      const queue = [i];
      while (queue.length > 0) {
        const node = queue.shift();
        for (const neighbor of graph[node]) {
          if (distances[i][neighbor] === Infinity) {
            distances[i][neighbor] = distances[i][node] + 1;
            queue.push(neighbor);
          }
        }
      }
    }
    return distances;
  }

let graph = readProblem(process.argv[2] || 'input.txt');

console.log(graph)

const distances = findDistances(graph);
console.log(distances);
