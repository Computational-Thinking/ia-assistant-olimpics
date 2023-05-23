import arrayShuffle from 'array-shuffle';
import fs from 'fs';

/* function readProblem(fileName) reads a file with name fileName and returns a graph G.
The input file has the following format:
first line: number of nodes in the graph followed by the number od edges
remaining lines: each line represents an edge in the graph
*/
function readProblem(fileName) {

    const text = fs.readFileSync(fileName, 'utf8');
    const lines = text.split('\n');
    const firstLine = lines[0].split(' ');
    const n = parseInt(firstLine[0]);
    const m = parseInt(firstLine[1]);
    const G = {};
    for (let i = 0; i < n; i++) {
        G[i] = [];
    }
    for (let i = 1; i <= m; i++) {
        const line = lines[i].split(' ');
        const u = parseInt(line[0]);
        const v = parseInt(line[1]);
        G[u].push(v);
        G[v].push(u);
    }
    return G;
}

let problem = readProblem(process.argv[2] || 'input.txt');

//console.log(problem);

/*
To solve this problem, you can use a greedy algorithm. Here's a high-level plan:

Initialize an empty set R to store the nodes that will be selected.
For each node v in the graph G, check if it is adjacent to any node in R. If not, add it to R.
Repeat step 2 until all nodes in G are either in R or adjacent to a node in R.
Here's the JavaScript code that implements this algorithm:
*/
function findSubset(G) {
    const R = new Set(); // initialize an empty set R
    let nodes = Object.keys(G).map(x => parseInt(x)); // get all nodes in G

    nodes = arrayShuffle(nodes);
    //console.log(nodes);
    for (const node of nodes) {
      let isAdjacent = false;
      for (const r of R) {
        if (G[node].includes(r)) {
          isAdjacent = true;
          break;
        }
      }
      if (!isAdjacent) {
        R.add(node);
      }
      //console.log(R)
    }
  
    return R;
  }

  /*
  You can call this function with a graph G represented as an object where 
  each key is a node and its value is an array of adjacent nodes. 
  */

  let bestLength = 1000
  let best = null;
  for(let i = 0; i < 20; i++) {

    let r = findSubset(problem);
    //console.log(r.size);
    if(r.size < bestLength) {
      bestLength = r.size;
      best = r;
    }
  }
  console.log(best);