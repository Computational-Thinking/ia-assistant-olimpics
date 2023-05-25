import fs from 'fs';

function readProblem(fileName) {
  const fileContent = fs.readFileSync(fileName, 'utf8');
  const lines = fileContent.trim().split('\n');
  const [numNodes, numEdges] = lines[0].split(' ').map(Number);
  if (numNodes <= 0 || numEdges <= 0 || numEdges !== lines.length - 1) {
    throw new Error('Invalid graph description');
  }
  const adjList = Array.from({ length: numNodes }, () => new Set());
  for (let i = 1; i <= numEdges; i++) {
    const [u, v] = lines[i].split(' ').map(Number);
    if (u < 0 || u >= numNodes || v < 0 || v >= numNodes) {
      throw new Error('Invalid node index');
    }
    adjList[u].add(v);
    adjList[v].add(u);
  }
  return adjList;
}

let graph = readProblem(process.argv[2] || 'input.txt')

console.log(graph)

function findDistances(graph) {
  const numNodes = graph.length;
  const dist = Array.from({ length: numNodes }, () =>
    Array.from({ length: numNodes }, () => Infinity)
  );
  for (let u = 0; u < numNodes; u++) {
    dist[u][u] = 0;
    for (const v of graph[u]) {
      dist[u][v] = 1;
    }
  }
  for (let k = 0; k < numNodes; k++) {
    for (let i = 0; i < numNodes; i++) {
      for (let j = 0; j < numNodes; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }
  return dist;
}

let distances = findDistances(graph)

//console.log(distances)

// Given the `graph` as returned by the `readProblem` function write 
// a  function `distanceToSubset(node, R)` that computes the distance of `node` 
// to the subset of nodes `R`
function distanceToSubset(node, R) {
  let min = Infinity
  for (let r of R) {
    min = Math.min(min, distances[node][r])
  }
  return min
}

//let R = new Set([1,4,8])
//console.log(distanceToSubset(6, R)) // 2

/*
Write a heuristic function `allocateResources(order)` that takes 
as input `order` a permutation of the nodes of the `graph`. 
The function returns a minimum size subset `R` of nodes such that the 
distance of any node to the subset `R` is not greater than one. 
Traverse the nodes in the order given by the `order` array. 

For example, for the graph above, the function should return a set with the elements in the following array:

```js
[0, 2, 4, 6, 8]
```

the function can be called this way:

```js
import arrayShuffle from 'array-shuffle';
let order = arrayShuffle(Array.from({ length: graph.length }, (_, i) => i))
console.log(allocateResources(order)) // Set(5) { 0, 2, 4, 6, 8 }
```
*/
function allocateResources(order) {
  let R = new Set()
  for (let node of order) {
    if (distanceToSubset(node, R) > 1) {
      R.add(node)
    }
  }
  return R
}

import arrayShuffle from 'array-shuffle';
//let order = arrayShuffle(Array.from({ length: graph.length }, (_, i) => i))
//console.log(allocateResources(order)) // Set(5) { 0, 2, 4, 6, 8 }

/*
Write a function `explore(graph, t)` that takes as input a graph description as returned
by the `readProblem` function and  

1. Initializes `bestSize`to `Infinity` and `bestSet` to `[]`.
2. repeats `t` times these steps:
  1. Shuffles the `graph` (use the `arrayShuffle` functionthat shuffles an array and is exported by the module `array-shuffle`) and 
  2. Uses the `allocateResources(graph)` above to find a subset candidate `R`.
  3. If the new set `R` has smaller size than the best set found so far, the `bestSet` is updated.
3. The function should return the `bestSet` found.
*/
function explore(graph, t) {
  let bestSize = Infinity
  let bestSet = []
  for (let i = 0; i < t; i++) {
    let order = arrayShuffle(Array.from({ length: graph.length }, (_, i) => i))
    let R = allocateResources(order)
    if (R.size < bestSize) {
      bestSize = R.size
      bestSet = R
    }
  }
  return bestSet
}

console.log(explore(graph, 10)) // Set(5) { 0, 2, 4, 6, 8 }
